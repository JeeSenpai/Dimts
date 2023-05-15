<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCaseTag" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div :class="action == 'add' ? 'max-w-[34rem]' : 'max-w-[75rem]'"  class="modal-dialog relative top-10 pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                         </div>
                          <button type="button" class="p-2" id="close-btn7" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                <div class="modal-body rounded-md">
                    <div class="text-left ml-6 mt-3.5">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input v-model="status" type="checkbox" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-[#BF40BF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#BF40BF]"></div>
                            <span class="ml-3 text-[13px] text-gray-800 font-bold">Active Status</span>
                        </label>
                    </div>
                    <div class="flex mt-4 flex-row">
                        <div class=" text-left ml-5 text-[13px] text-gray-800 font-bold">Description</div>
                        <div class=" text-left ml-[15rem] text-[13px] text-gray-800 font-bold">Case Type</div>
                    </div>
                    <div class="flex flex-row justify-between">
                    <div class="flex">
                        <div>
                            <input 
                            v-model="description" 
                            :class="{ invalid: isSubmitting && !description.trim() }"
                            type="text"
                            class=" ml-5 mr-2.5 px-2 py-2.5 w-[18rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                        <div>
                            <select v-model="caseType" class="ml-2 mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                                <option v-for="casetype in caseTypeData" :key="casetype" :value="casetype.id">{{ casetype.description }}</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="action == 'update'">
                        <button @click="showAddDialog()" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button"    >
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg> Add New Checklist
                        </button>
                    </div>
                    </div>
                    <div v-if="action == 'update'" class="mt-1 ml-6 max-w-[80rem]">
                        <div class="relative overflow-x-auto shadow-md -ml-1 mr-3 rounded-lg">
                        <table class="w-full text-xs text-left text-gray-700 ">
                            <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                                <tr>
                                    <th scope="col" class="px-5 py-3 text-left">
                                        Description
                                    </th>
                                    <th scope="col" class="px-5 py-3">
                                        Minimum & Maximum Penalty
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
                                    <td class="px-5 py-3 text-black max-w-[18rem] text-left">
                                       {{ data.description }}
                                    </td>
                                    <td class="px-5 py-3">
                                       {{ data.minPenalty }} - {{ data.maxPenalty }}
                                    </td>
                                    <td class="px-5 py-3 whitespace-nowrap text-center">
                                        <span v-if="data.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-600 rounded-md">Inactive</span>
                                        <span v-if="data.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Active</span>
                                    </td>
                                    <td class="py-3 px-2 text-right">
                                        <button @click="showUpdateDialog(data)" type="button" class="bg-transparent mr-4 py-1.5">
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
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                    <button v-if="action == 'update'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                    <button v-if="action == 'add'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
                    <button type="button" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
                </div>
         </div>
        </div>
        <div v-show="showDialog" tabindex="-1" aria-hidden="false" class="checkFade animated modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-[30rem] mx-auto top-20 h-full md:h-auto">
                    <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ checkTitle }}</h5>
                         </div>
                          <button type="button" @click="showDialog = false" class="p-2" id="close-btn7"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                    <div class="modal-body rounded-md relative">
                        <div class="text-left ml-6 mt-3.5">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input v-model="checkStatus" type="checkbox" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-[#BF40BF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#BF40BF]"></div>
                                <span class="ml-3 text-[13px] text-gray-800 font-bold">Active Status</span>
                            </label>
                        </div>
                        <div class="text-left ml-6 mt-4 text-[13px] text-gray-800 font-bold">Description</div>
                        <div><textarea
                            v-model="checkDescription"
                            :class="{ invalid: checkSubmitting && !checkDescription.trim() }"
                            type="text"
                            rows="5"
                            class="ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                        <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Minimum Penalty</div>
                        <div class=" w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Maximum Penalty</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="minPenalty" 
                            :class="{ invalid: checkSubmitting && !minPenalty }"
                            type="number"
                            class="ml-5 px-2 py-2.5 w-[12rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="maxPenalty"
                            :class="{ invalid: checkSubmitting && !maxPenalty }"
                            type="number"
                            class="mr-5 px-2 py-2.5 w-[12rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                        <button v-if="checkAction == 'update'" @click="validateChecklist()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                        <button v-if="checkAction == 'add'" @click="validateChecklist()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
                        <button type="button" @click="showDialog = false" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import { useToast } from "vue-toastification"

export default {
    data(){
        return {
            token: localStorage.getItem("access_token"),
            isSubmitting: false,
            action: null,
            title: null,
            showDialog: false,

            checkTitle: null,
            checkId: null,
            checkDescription: "",
            maxPenalty: "",
            minPenalty: "",
            checkStatus: true,

            checkAction: null,
            checkSubmitting: false,

            //form datas
            tagId: null,
            description: "",
            caseType: 1,
            status: true,

            //query datas
            caseTypeData: [],
            checklistData: [],

            page: 1,
            perPage: 5,
            pages: [],
            changePerPage: 5,
        }
    },
    computed: {
        displayedPaginatedData() {
            return this.paginate(this.checklistData);
        },
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/case-type', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseTypeData = res.data
            });
        },
        initializeAdd(){
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add New Case Tag & Checklist"
            this.tagId = null
            this.caseType = 1
            this.description = "",
            this.status = true
            this.checklistData = []
            this.page = 1
            this.pages = []
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Case Tag & Checklist"
            this.tagId = data.id
            this.caseType = data.caseType.id
            this.description = data.description
            this.status = data.status
            this.updateChecklistData()
        },
        updateChecklistData(){
            axios.get(this.$store.state.serverUrl + '/case-checklist/findAllChecklistByCaseTag/' + this.tagId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.checklistData = res.data
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.checklistData.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            });
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.description]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid){
                let formData = {
                    tagId: this.tagId,
                    caseType: this.caseType,
                    description: this.description,
                    status: this.status
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/case-tags', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn7').click();

                            const toast = useToast();
                            toast.success("Case Tag Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/case-tags/update', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn7').click();

                            const toast = useToast();
                            toast.success("Case Tag Succesfully Updated", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
            }
        },
        showAddDialog(){
            this.checkTitle = 'Add Checklist'
            this.checkId = null
            this.checkDescription = ""
            this.minPenalty = ""
            this.maxPenalty = ""
            this.checkStatus = true
            this.checkAction = 'add'
            this.showDialog = true
        },
        showUpdateDialog(data){
            this.checkTitle = 'Update Checklist'
            this.checkId = data.id
            this.checkDescription = data.description
            this.minPenalty = data.minPenalty
            this.maxPenalty = data.maxPenalty
            this.checkStatus = data.status
            this.checkAction = 'update'
            this.showDialog = true
        },
        validateChecklist(){
            this.checkSubmitting = true
            const formValid = [this.checkDescription]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.minPenalty && this.maxPenalty){
                let formData = {
                    id: this.checkId,
                    caseTag: this.tagId,
                    description: this.checkDescription,
                    minPenalty: this.minPenalty,
                    maxPenalty: this.maxPenalty,
                    status: this.checkStatus
                }
                if(this.checkAction == 'add'){
                    axios.post(this.$store.state.serverUrl + '/case-checklist', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.updateChecklistData()
                            this.showDialog = false
                            const toast = useToast();
                            toast.success("Checklist Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.checkAction == 'update'){
                    axios.post(this.$store.state.serverUrl + '/case-checklist/update', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.updateChecklistData()
                            this.showDialog = false
                            const toast = useToast();
                            toast.success("Checklist Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
            }
        },
        paginate(data) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return data.slice(from, to);
        },
    },
    mounted(){
        this.init()
    }
}
</script>
<style scoped>
     .invalid {
         border-width: 1px;
         border-color: red;
    }
    .modal{
    background-color: rgba(0,0,0,0.5);
    }
</style>