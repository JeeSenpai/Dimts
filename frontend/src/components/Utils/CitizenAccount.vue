<template>
    <div class="checkFade animated">
        <div class="flex flex-row justify-between">
            <div class="flex">
                <div>
                    <input v-model="searchText" @keyup="handleSearching()" id="searchText" type="text" class="text-xs bg-gray-100 border border-gray-500 focus:border-[#BF40BF] focus:ring-[#BF40BF] rounded-lg mb-2 px-2 py-2.5 w-80" placeholder="Search">
                </div>
                <div>
                    <button @click="handleSearching()" id="button-search" class="ml-3 rounded-xl px-3 mb-2 py-2 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button">
                        Search
                    </button>
                </div>
            </div>
            <!-- <div>
                <button @click="showAddDialog()" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCitizen">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg> Add New Citizen
                </button>
            </div> -->
        </div>
        <div class="relative overflow-x-auto shadow-md -ml-1 mr-3 rounded-lg">
            <table class="w-full text-xs text-left text-gray-700 ">
                <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                    <tr>
                        <th scope="col" class="px-5 py-3 text-left">
                            Name
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Contact No,
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Action  
                        </th>
                    </tr>
                </thead>
                <tbody v-if="displayedPaginatedData.length > 0">
                    <tr v-for="data in displayedPaginatedData" :key="data" class="bg-white border-b text-xs text-center">
                        <td class="px-5 py-3 text-black text-left">
                            {{ data.lname }}, {{ data.fname }} {{ !data.mname ? '': data.mname[0] + '.' }}
                        </td>
                        <td class="px-5 py-3 text-black">
                            {{ data.contact_no }}
                        </td>
                        <td class="px-5 py-3 text-black">
                            {{ data.email }}
                        </td>
                        <td class="py-3 px-2 text-right">
                            <!-- <button @click="showUpdateDialog(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCitizen" class="bg-transparent mr-4 py-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button> -->
                            <button @click="showCitizenMonitor(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCitizenMonitor" class="bg-transparent mr-4 py-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
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
            <CitizenDialog
            ref="CitizenDialog"
            v-on:refresh="init()"
            />
        </div>
        <div>
            <CitizenDetailsDialog
            ref="CitizenDetailsDialog"
            />
        </div>
        <div>
            <CitizenMonitorDialog
            ref="CitizenMonitorDialog"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import CitizenDetailsDialog from '../Modals/CitizenDetailsDialog.vue'
import CitizenDialog from '../Modals/CitizenDialog.vue'
import CitizenMonitorDialog from '../Modals/CitizenMonitorDialog.vue'

export default {
    components: {
        CitizenDetailsDialog,
        CitizenMonitorDialog,
        CitizenDialog
    },
    data(){
        return{
            token: localStorage.getItem("dimts_token"),
            searchText: null,
            selectedStatus: 1,
            data: [],
            savedData: [],
            
            page: 1,
            perPage: 10,
            pages: [],
            changePerPage: 10,
        }
    },
    computed: {
        displayedPaginatedData() {
            return this.paginate(this.data);
        },
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/citizen', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
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
        changeTab(data){
            this.tab = data;
            this.comply = data.id
        },
        handleSearching() {
        if (this.searchText == "" || !this.searchText) {
            this.init();
        }
        else {
            this.data = this.savedData.filter(
            (data) =>
                data.fname
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.lname
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.username
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.email
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
        sortFromNotif(name) {
            this.data = this.savedData.filter(
            (data) =>
                data.lname
                .toLowerCase()
                .indexOf(name.toLowerCase()) !== -1 
            );
            this.page = 1
            this.pages = []
            let numberOfPages = Math.ceil(this.data.length / this.perPage);
                            for (let index = 1; index <= numberOfPages; index++) {
                                    this.pages.push(index);
                            }
          
        },
        showCitizenMonitor(data){
             this.$refs.CitizenMonitorDialog.initializeTable(data)
        },
        showAddDialog(){
            this.$refs.CitizenDialog.initializeAdd()
        },
        showUpdateDialog(data){
            this.$refs.CitizenDialog.initializeUpdate(data)
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
        if(this.$route.query.notif_type == 3){
            this.init()
            this.searchText = this.$route.query.user
        }
        else{
            this.init()
        }
    }
}

</script>