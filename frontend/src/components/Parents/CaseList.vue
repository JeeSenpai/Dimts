<template>
    <div class="checkFade animated">
        <div class="text-left">
            <div class="text-sm font-semibold text-center text-gray-500 border-gray-200">
                <ul class="flex flex-wrap mb-2">
                    <li v-for="tab in tabs" :key="tab.id">
                        <button @click="changeTab(tab)" :class="tab.id == comply ? 'text-[#BF40BF] border-[#BF40BF] ': 'hover:text-gray-700 hover:border-gray-400'" class="inline-block p-4 rounded-t-lg border-b-4">{{ tab.description }}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="tab.id == 1" class="checkFade animated">
        <div class="flex flex-row justify-between">
            <div>
                <input v-model="searchText" @keyup="handleSearching()" id="searchText" type="text" class="text-xs bg-gray-100 border border-gray-500 focus:border-[#BF40BF] focus:ring-[#BF40BF] rounded-lg mb-2 px-2 py-2.5 w-80" placeholder="Search">
            </div>
            <div>
                <!-- <button class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropUploadCSV">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>Export
                </button>
                <button class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropUploadCSV">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>Import
                </button> -->
                <button @click="showAddDialog()" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCaseList">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg> Add New Case
                </button>
            </div>
        </div>
        <div class="relative overflow-x-auto shadow-md -ml-1 mr-3 rounded-lg">
            <table class="w-full text-xs text-left text-gray-700 ">
                <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                    <tr>
                        <th scope="col" class="px-5 py-3 text-left">
                            Case No.
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Case Title
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Case Type
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Recieved Date
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Status & Recent Schedule
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Action  
                        </th>
                    </tr>
                </thead>
                <tbody v-if="displayedPaginatedData.length > 0">
                    <tr v-for="data in displayedPaginatedData" :key="data" class="bg-white border-b text-xs text-center">
                        <td class="px-5 py-3 text-black text-left">
                            {{ data.case_no }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ data.case_title }}
                        </td>
                        <td class="px-5 py-3">
                            {{ data.caseType.description }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ formatDate(data.date_recieved) }}
                        </td>
                        <td class="px-5 py-3 whitespace-nowrap text-center">
                            <span v-if="data.reopenCount == 0" class="text-xs inline-block py-1 px-2.5 mr-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">New Case</span>
                            <span v-if="data.reopenCount > 0" class="text-xs inline-block py-1 px-2.5 mr-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Reopened Case</span>

                            <span v-if="data.courtHearings.length > 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-200 text-yellow-700 rounded-lg">{{ data.courtHearings[0].hearingType.description }} - {{ formatDate(data.courtHearings[0].hearing_schedule) }}</span>
                            <span v-if="data.courtHearings.length == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-md">Waiting for Schedule</span>
  
                        </td>
                        <td class="py-3 px-2 text-right">
                            <button @click=" showCaseDetails(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCaseDetails" class="bg-transparent mr-2.5 py-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>
                            </button>

                            <button @click="showUpdateDialog(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCaseList" class="bg-transparent mr-4 py-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-if="displayedPaginatedData.length == 0">
                    <tr class="bg-white border-b ">
                        <td class="px-6 py-4 text-black text-center" colspan="6" >
                            No data to load
                        </td>
                    </tr>
                </tbody>
            </table> 
            <div class="flex justify-between bg-white">
                                <div class="text-xs mt-3 ml-4 text-gray-700">
                                    Page <span class="font-base text-gray-900">{{page}}</span> <span v-if="pages.length > 0" class="font-base text-gray-900">of {{pages.length}}</span>
                                </div>
                                <div class="flex mt-2 mb-2 mr-2 xs:mt-0 ">
                                    <div> 
                                        <label class="text-xs mt-1 mr-5">Show &nbsp; <input type="number" v-model="changePerPage" @change="perPage = changePerPage"  step="1" max="30" class="w-12 h-6 px-2 border border-gray-300 text-xs rounded"> files per page</label>
                                    </div>
                                    <button type="button" :disabled="page == 1" @click="page--" :class="page == 1 ? 'bg-[#BF40BF] opacity-60' : 'bg-[#BF40BF]'"  class="py-1 px-3 text-sm font-medium text-white rounded-l ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                    <button type="button" @click="page++" :disabled="page >= pages.length" :class="page >= pages.length ? 'bg-[#BF40BF] opacity-60' : 'bg-[#BF40BF]' " class="py-1 px-3 text-sm font-medium text-white  rounded-r border-0 border-l border-gray-700 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>
                                </button>
                            </div>
                    </div> 
            </div>
        </div>
        <div v-if="tab.id == 2">
            <DocketCase/>
        </div>
        <div>
            <CaseDialog
            ref="CaseDialog"
            v-on:refresh="init()"
            />
        </div>
        <div>
            <CaseDetails
            ref="CaseDetails"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import DocketCase from '../Parents/DocketCases.vue'
import CaseDialog from '../Modals/CaseDialog.vue'
import CaseDetails from '../Modals/CaseDetailsDialog.vue'

export default {
    components: {
        DocketCase,
        CaseDialog,
        CaseDetails
    },
    data(){
        return{
            token: localStorage.getItem("dimts_token"),
            searchText: null,
            data: [],
            savedData: [],
            page: 1,
            perPage: 10,
            pages: [],
            changePerPage: 10,

            comply: 1,
            tabs: [
                { id: 1, description: 'Active Cases'},
                { id: 2, description: 'Docket Cases' },
            ],
            tab: { id: 1, description: 'Active Cases' }
        }
    },
    computed: {
        displayedPaginatedData() {
            return this.paginate(this.data);
        },
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/cases', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.data = res.data
                this.savedData = res.data
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.data.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            });
        },
        handleSearching() {
        if (this.searchText == "" || !this.searchText) {
            this.init();
        }
        else {
            this.data = this.savedData.filter(
            (data) =>
                data.case_no
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.case_title
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.caseType.description
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                this.formatDate(data.date_recieved)
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1
            );
            this.page = 1
            this.pages = []
            let numberOfPages = Math.ceil(this.data.length / this.perPage);
                            for (let index = 1; index <= numberOfPages; index++) {
                                    this.pages.push(index);
                            }
          }
        },
        showAddDialog(){
            this.$refs.CaseDialog.initializeAdd()
        },
        showUpdateDialog(data){
            this.$refs.CaseDialog.initializeUpdate(data)
        },
        showCaseDetails(data){
            this.$refs.CaseDetails.initializeView(data)
        },
        changeTab(data){
            this.tab = data;
            this.comply = data.id
            this.init()
        },
        paginate(data) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return data.slice(from, to);
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
    },
    mounted(){
        this.init()
    }
}

</script>