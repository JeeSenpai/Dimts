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
        <div class="flex flex-row justify-between">
            <div class="flex">
                <div>
                    <input v-model="searchText" @keyup="handleSearching()" id="searchText" type="text" class="text-xs bg-gray-100 border border-gray-500 focus:border-[#BF40BF] focus:ring-[#BF40BF] rounded-lg mb-2 px-2 py-2.5 w-80" placeholder="Search">
                </div>
                <div>
                    <select v-model="selectedCaseType" id="files" @change="sortHearingCaseType()" class=" text-xs bg-gray-100 border border-gray-500 focus:border-[#BF40BF] focus:ring-[#BF40BF] rounded-lg mb-2 ml-2 px-2 py-2.5 w-[13rem]">
                        <option value="1" selected>All Cases</option>
                        <option value="2">Pending Cases</option>
                        <option value="3">Canceled Cases</option>
                        <option value="4">Completed Cases</option>
                    </select> 
                </div>
            </div>
            <div>
                <!-- <button class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropUploadCSV">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>Filter
                </button> -->
                <button v-if="comply == 1" @click="showAddDialog()" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCase">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg> Add New Court Hearing
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
                            Type of Hearing
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Hearing Schedule
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Judge Assigned
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Action  
                        </th>
                    </tr>
                </thead>
                <tbody v-if="displayedPaginatedData.length > 0">
                    <tr v-for="data in displayedPaginatedData" :key="data" class="bg-white border-b text-xs text-center">
                        <td class="px-5 py-3 text-black text-left">
                            {{ data.case.case_no }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ data.hearingType.description }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ formatDate(data.hearing_schedule) }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ data.judgeAssigned.name }}
                        </td>
                        <td class="px-5 py-3 whitespace-nowrap text-center">
                            <span v-if="data.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Pending</span>
                            <span v-if="data.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-700 rounded-md">Cancelled</span>
                            <span v-if="data.status == 2" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Completed</span>
                        </td>
                        <td class="py-3 px-2 text-right">
                            <button @click="showUpdateDialog(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCase" class="bg-transparent mr-4 py-1.5">
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
        <div>
            <CourtHearing
            ref="CourtHearing"
            :date_action="action"
            v-on:refresh="init()"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import CourtHearing from '../Modals/CourtHearingDialog.vue'

export default {
    components: {
        CourtHearing
    },
    data(){
        return{
            token: localStorage.getItem("dimts_token"),
            searchText: null,
            action: null,
            selectedCaseType: 1,
            data: [],
            savedData: [],
            page: 1,
            perPage: 10,
            pages: [],
            changePerPage: 10,

            comply: 1,
            tabs: [
                { id: 1, description: 'Upcoming Court Hearings'},
                { id: 2, description: 'Todays Court Hearings' },
                { id: 3, description: 'Done Court Hearings' },
                { id: 4, description: 'Docket Cases Court Hearings' },
            ],
            tab: { id: 1, description: 'Upcoming Court Hearings' }
        }
    },
    computed: {
        displayedPaginatedData() {
            return this.paginate(this.data);
        },
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/court-hearings', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.data = res.data
                if(this.comply == 1){
                    this.data = this.data.filter(
                    (data) => data.case.caseStatus == 1 && data.hearing_schedule > moment(new Date()).format('YYYY-MM-DD')
                    );
                    this.page = 1
                    this.pages = []
                    let numberOfPages = Math.ceil(this.data.length / this.perPage);
                    for (let index = 1; index <= numberOfPages; index++) {
                            this.pages.push(index);
                    }
                    this.savedData = this.data
                    this.action = 1
                }
                else if (this.comply == 2){
                    this.data = this.data.filter(
                    (data) =>data.case.caseStatus == 1 && data.hearing_schedule == moment(new Date()).format('YYYY-MM-DD')
                    );
                    this.page = 1
                    this.pages = []
                    let numberOfPages = Math.ceil(this.data.length / this.perPage);
                    for (let index = 1; index <= numberOfPages; index++) {
                            this.pages.push(index);
                    }
                    this.savedData = this.data
                    this.action = 2
                }
                else if (this.comply == 3){
                    this.data = this.data.filter(
                    (data) => data.case.caseStatus == 1 && data.hearing_schedule < moment(new Date()).format('YYYY-MM-DD')
                    );
                    this.page = 1
                    this.pages = []
                    let numberOfPages = Math.ceil(this.data.length / this.perPage);
                    for (let index = 1; index <= numberOfPages; index++) {
                            this.pages.push(index);
                    }
                    this.savedData = this.data
                    this.action = 3
                }
                else if (this.comply == 4){
                    this.data = this.data.filter(
                    (data) => data.case.caseStatus == 0
                    );
                    this.page = 1
                    this.pages = []
                    let numberOfPages = Math.ceil(this.data.length / this.perPage);
                    for (let index = 1; index <= numberOfPages; index++) {
                            this.pages.push(index);
                    }
                    this.savedData = this.data
                    this.action = 4
                }
            });
        },
        sortHearingCaseType(){
            if(this.selectedCaseType == 1){
                this.init()
            }
            else if (this.selectedCaseType == 2){
                this.data = this.savedData.filter(
                (data) => data.status == 0
                );
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.data.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                        this.pages.push(index);
                }
            }
            else if (this.selectedCaseType == 3){
                this.data = this.savedData.filter(
                (data) => data.status == 1
                );
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.data.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                        this.pages.push(index);
                }
            }
            else if (this.selectedCaseType == 4){
                this.data = this.savedData.filter(
                (data) => data.status == 2
                );
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.data.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                        this.pages.push(index);
                }
            }
        },
        handleSearching() {
        if (this.searchText == "" || !this.searchText) {
            this.init();
        }
        else {
            this.data = this.savedData.filter(
            (data) =>
                data.case.case_no
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                this.formatDate(data.hearing_schedule)
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.raffledCourt.description
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.judgeAssigned.name
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 || 
                data.hearingType.description
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                this.formatDate(data.hearing_schedule)
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
            this.$refs.CourtHearing.initializeAdd()
        },
        showUpdateDialog(data){
            this.$refs.CourtHearing.initializeUpdate(data)
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