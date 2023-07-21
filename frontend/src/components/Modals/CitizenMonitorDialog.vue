<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCitizenMonitor" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-16 max-w-[82rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                        <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                              <p class="font-thin text-xs text-gray-600 text-left">{{ subTitle }}</p>
                         </div>
                          <button type="button" class="p-2" id="close-btn10" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                <div class="modal-body rounded-md relative">
                    <div class="flex justify-between ml-4 mt-2 mb-2">
                        <div class="space-y-6">
                            <div class="flex text-left font-semibold space-x-16 mt-2">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">First Name</p>
                                    <p class="text-sm">{{ fname }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Middle Name</p>
                                    <p class="text-sm">{{ mname }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Last Name</p>
                                    <p class="text-sm">{{ lname }}</p>
                                </div>
                                <!-- <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Username</p>
                                    <p class="text-sm">{{ username }}</p>
                                </div> -->
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Age</p>
                                    <p class="text-sm">{{ age }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Contact No.</p>
                                    <p class="text-sm">{{ contact_no }}</p>
                                </div>
                                
                            </div>
                            <div class="flex text-left font-semibold space-x-16 mt-8">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Email</p>
                                    <p class="text-sm">{{ email }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Address</p>
                                    <p class="text-sm text-left break-word">{{ address }}</p>
                                </div>
                                
                            </div>
                        </div>
                        <!-- <div>
                            <button @click="showAddDialog()" class="mr-4 rounded-xl px-2 py-1.5 text-sm border-[1.5px] font-semibold bg-[#BF40BF] border-[#BF40BF] text-white" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg> Add Citizen Monitor
                            </button>
                        </div> -->
                    </div>
                    <div class="mt-4 mb-4 ml-4 max-w-[80rem]">
                        <div class="relative overflow-x-auto shadow-md -ml-1 rounded-lg">
                        <table class="w-full text-xs text-left text-gray-700 ">
                            <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                                <tr>
                                    <th scope="col" class="px-5 py-3 text-left">
                                        Case No & Title
                                    </th>
                                    <th scope="col" class="px-5 py-3">
                                        Case Description
                                    </th>
                                    <th scope="col" class="px-5 py-3">
                                        Relations
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
                                       {{ data.case.case_no }} - {{ data.case.case_title }}
                                    </td>
                                    <td class="px-5 py-3">
                                       {{ data.case.case_description }}
                                    </td>
                                    <td class="px-5 py-3">
                                       {{ data.relationship }}
                                    </td>
                                    <td class="px-5 py-3 whitespace-nowrap text-center">
                                        <span v-if="data.is_verified == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-600 rounded-md">Not Verified</span>
                                        <span v-if="data.is_verified == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Verified</span>
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
                                <input v-model="is_verified" type="checkbox" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-[#BF40BF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#BF40BF]"></div>
                                <span class="ml-3 text-[13px] text-gray-800 font-bold">Is Verified</span>
                            </label>
                        </div>
                        <div class="text-left ml-6 mt-4 text-[13px] text-gray-800 font-bold">Case No. & Title</div>
                        <div>
                            <select v-model="caseId" :class="{ invalid: isSubmitting && caseId == '' }" class="ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select case number & title</option>
                              <option v-for="cases in caseData" :key="cases" :value="cases.id"> {{ cases.case_no }} - {{ cases.case_title }}</option>
                            </select>
                        </div>
                        <div class="text-left ml-6 mt-4 text-[13px] text-gray-800 font-bold">Relation to the Case</div>
                        <div><input
                            v-model="relation"
                            :class="{ invalid: isSubmitting && !relation.trim() }"
                            type="text"
                            class="ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                        <button v-if="action == 'update'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                        <button v-if="action == 'add'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
                        <button type="button" @click="showDialog = false" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
                </div>
                </div>
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
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subTitle: null,
            showDialog: false,
            checkTitle: null,

            monitorId: null,
            caseId: "",
            relation: "",
            is_verified: true,
            
            //form datas
            id: null,
            fname: "",
            mname: null,
            lname: null,
            age: null,
            contact_no: null,
            address: null,
            email: null,
            username: null,

            //query datas
            caseData: [],
            citizenMonitorData: [],

            page: 1,
            perPage: 5,
            pages: [],
            changePerPage: 5,
        }
    },
    computed: {
        displayedPaginatedData() {
            return this.paginate(this.citizenMonitorData);
        },
    },
    methods: {
        initializeTable(data){
            this.title = 'Citizen Monitors'
            this.subTitle = 'Manage Cases for Citizen to Monitor'
            this.id = data.id
            this.fname = data.fname
            this.mname = data.mname
            this.lname = data.lname
            this.age = data.age
            this.contact_no = data.contact_no
            this.address = data.address
            this.email = data.email
            this.username = data.username
            this.updateTable()
        },
        updateTable(){
            axios.get(this.$store.state.serverUrl + '/citizen-monitors/findAllMonitorByCitizen/' + this.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.citizenMonitorData = res.data
                this.page = 1
                this.pages = []
                let numberOfPages = Math.ceil(this.citizenMonitorData.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            });
        },
        showAddDialog(){
            axios.get(this.$store.state.serverUrl + '/cases/findAllActive', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseData = res.data
            });
            this.isSubmitting = false
            this.checkTitle = 'Add New Citizen Monitor'
            this.action = 'add'
            this.monitorId = null
            this.caseId = ''
            this.relation = ''
            this.is_verified = true
            this.showDialog = true
        },
        showUpdateDialog(data){
            axios.get(this.$store.state.serverUrl + '/cases/findAllActive', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseData = res.data
            });
            this.isSubmitting = false
            this.checkTitle = 'Update Citizen Monitor'
            this.action = 'update'
            this.monitorId = data.id
            this.caseId = data.case.id
            this.relation = data.relationship
            this.is_verified = data.is_verified
            this.showDialog = true
        },
        verifyMonitor(data){
            axios.patch(this.$store.state.serverUrl + '/citizen-monitors/verifyCitizen/' + data.id,1, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.updateTable()
            });
        },
        unverifyMonitor(data){
            axios.patch(this.$store.state.serverUrl + '/citizen-monitors/unverifyCitizen/' + data.id,1, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
               this.updateTable()
            });
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.relation]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.caseId){
                let formData = {
                    monitorId: this.monitorId,
                    citizenId: this.id,
                    caseId: this.caseId,
                    relation: this.relation,
                    is_verified: this.is_verified
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/citizen-monitors/createCitizenMonitorByAdmin', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.updateTable()
                            this.showDialog = false

                            const toast = useToast();
                            toast.success("Citizen Monitor Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/citizen-monitors/updateCitizenMonitorByAdmin', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.updateTable()
                            this.showDialog = false

                            const toast = useToast();
                            toast.success("Citizen Monitor Succesfully Updated", {
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