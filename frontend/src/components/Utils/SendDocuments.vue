<template>
    <div class="checkFade animated">
        <div class="flex flex-row justify-between">
            <div class="flex">
                <div>
                    <input v-model="searchText" @keyup="handleSearching()" id="searchText" type="text" class="text-xs bg-gray-100 border border-gray-500 focus:border-[#BF40BF] focus:ring-[#BF40BF] rounded-lg mb-2 px-2 py-2.5 w-80" placeholder="Search">
                </div>
                <div>
                    <select v-model="selectedStatus" id="files" @change="sortHearingSced()" class=" text-xs bg-gray-100 border border-gray-500 focus:border-[#BF40BF] focus:ring-[#BF40BF] rounded-lg mb-2 ml-2 px-2 py-2.5 w-[13rem]">
                        <option value="1" selected>All Documents</option>
                        <option value="2">Waiting to Send Documents</option>
                        <option value="3">Pending Documents</option>
                        <option value="4">Acknowledge Documents</option>
                    </select> 
                </div>
            </div>
            <div>
                <!-- <button class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropUploadCSV">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>Filter
                </button> -->
                <button @click="showAddDialog()" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCase">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg> Add New Case Documents
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
                            Type of Document
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Control Number
                        </th>
                        <th scope="col" class="px-5 py-3">
                            Proccesing Office
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
                            {{ data.documentType.description }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ data.control_number }}
                        </td>
                        <td class="px-5 py-3 ">
                            {{ data.office.description }}
                        </td>
                        <td class="px-5 py-3 whitespace-nowrap text-center">
                            <span v-if="data.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Acknowledge - {{ formatDate(data.acknowledge_date) }}</span>
                            <span v-if="data.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-600 rounded-md">Pending - {{ formatDate(data.sended_date) }}</span>
                            <span v-if="data.status == null" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-md">Waiting to Send</span>
                        </td>
                        <td class="py-3 px-2 text-right">
                            <button v-if="data.status == null" @click="showSendDialog(data)" type="button" class="bg-transparent mr-2.5 py-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                            <button v-if="data.status == null" @click="showUpdateDialog(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCase" class="bg-transparent mr-4 py-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button v-if="data.status == 0 || data.status == 1" @click="showViewDialog(data)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCase" class="bg-transparent mr-4 py-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
            <DocumentsDialog
            ref="DocumentsDialog"
            v-on:refresh="init()"
            />
        </div>
        <div v-show="showDialog" tabindex="-1" aria-hidden="false" class="checkFade animated  modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md mx-auto top-48 h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="pb-6 text-center">
                        <div class="p-6 mb-2">
                            <div class="font-semibold">Do you really want to send this document ?</div>
                            <div class="font-thin mt-1 text-xs text-red-500">Note: You cannot edit the document after sending</div>
                        </div>
                        <div>
                            <button :disabled="loading== true" @click="showDialog = false" type="button" class="inline-block px-6 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                            <button :disabled="loading== true" @click="sendDocument()" type="button" class="inline-block px-6 py-2.5 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase rounded hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                <svg v-if="loading == true" aria-hidden="true" class="inline w-4 h-4 mr-2 mb-0.5 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification"
import DocumentsDialog from '../Modals/DocumentsDialog.vue'

export default {
    components: {
        DocumentsDialog
    },
    data(){
        return{
            token: localStorage.getItem("dimts_token"),
            searchText: null,
            selectedStatus: 1,
            loading: false,
            data: [],
            savedData: [],
            showDialog: false,
            sendDocs: null,

            page: 1,
            perPage: 10,
            pages: [],
            changePerPage: 10,

            comply: 1,
            tabs: [
                { id: 1, description: 'Send Documents'},
                { id: 2, description: 'Recieved Documents' },
            ],
            tab: { id: 1, description: 'Send Documents' }
        }
    },
    computed: {
        displayedPaginatedData() {
            return this.paginate(this.data);
        },
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/documents/findAllSendedDocs/' + this.$store.state.user.userDetails.office.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
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
        sortHearingSced(){
            if(this.selectedStatus == 1){
                this.init()
            }
            else if (this.selectedStatus == 2){
                this.data = this.savedData.filter(
                (data) => data.status == null
                );
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.data.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                        this.pages.push(index);
                }
            }
            else if (this.selectedStatus == 3){
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
            else if (this.selectedStatus == 4){
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
        },
        changeTab(data){
            this.tab = data;
            this.comply = data.id
            this.init()
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
                data.case.case_title
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.documentType.description
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.control_number
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) !== -1 ||
                data.office.description
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
        showSendDialog(data){
            this.sendDocs = data
            this.showDialog = true
        },
        sendDocument(){
            this.loading = true
            axios.post(this.$store.state.serverUrl + '/documents/sendDocument' , this.sendDocs, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.init()
                this.showDialog = false
                this.loading = false
                const toast = useToast();
                toast.success("Document Sended Succesfully", {
                timeout: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                showCloseButtonOnHover: true,
                });
            });
        },
        showAddDialog(){
            this.$refs.DocumentsDialog.initializeAdd()
        },
        showUpdateDialog(data){
            this.$refs.DocumentsDialog.initializeUpdate(data)
        },
        showViewDialog(data){
            this.$refs.DocumentsDialog.initializeView(data)
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

<style scoped>
.modal{
    background-color: rgba(0,0,0,0.5);
}
</style>