<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-16 max-w-[30rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                              <p class="font-thin text-xs text-gray-600 text-left">{{ subtitle }}</p>
                         </div>
                          <button type="button" class="p-2" id="close-btn" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                <div class="modal-body rounded-md relative">
                    <div class="text-left ml-6 mt-3.5">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input v-model="status" type="checkbox" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-[#BF40BF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#BF40BF]"></div>
                            <span class="ml-3 text-[13px] text-gray-800 font-bold">Active Status</span>
                        </label>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">First Name</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Middle Name</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="fname" 
                            :class="{ invalid: isSubmitting && !fname.trim() }"
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="mname" 
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Last Name</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Username</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="lname" 
                            :class="{ invalid: isSubmitting && !lname.trim() }"
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="username"
                            :class="{ invalid: isSubmitting && !username.trim() }"
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Office</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Role</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <select v-model="office" :class="{ invalid: isSubmitting && office == '' }" class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select office</option>
                              <option v-for="od in officeData" :key="od" :value="od.id"> {{ od.description }}</option>
                            </select>
                        </div>
                        <div>
                            <select v-model="usertype" :class="{ invalid: isSubmitting && usertype == '' }" class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select role</option>
                              <option v-for="role in userTypeData" :key="role" :value="role.id"> {{ role.description }}</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="action == 'add'" class="text-left ml-4 mt-6">
                        <span class="ml-3 text-[13px] text-gray-800 font-bold">Default password for newly created account is: <span class=" text-xs text-[#BF40BF] font-semibold">dimts123</span></span>
                    </div>
                    <div v-if="action == 'update'" class="text-left ml-4 mt-6">
                        <button @click="showDialog = true" type="button" class="inline-block px-5 py-2.5 mr-3 bg-red-500 text-white font-semibold text-xs leading-tight uppercase rounded-md border border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Reset Password</button>
                    </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                    <button v-if="action == 'update'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                    <button v-if="action == 'add'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
                    <button type="button" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
                </div>
         </div>
        </div>
        <div v-show="showDialog" tabindex="-1" aria-hidden="false" class="checkFade animated  modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md mx-auto top-48 h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="pb-6 text-center">
                        <div class="p-6 mb-2">
                            <div class="font-semibold">Do you really want to reset the password of this account ?</div>
                            <div class="font-thin mt-1 text-xs text-red-500">Default password for reset account is: <span class=" text-xs text-[#BF40BF] font-semibold">dimts123</span></div>
                        </div>
                        <div>
                            <button @click="showDialog = false" type="button" class="inline-block px-6 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                            <button @click="resetPassword()" type="button" class="inline-block px-6 py-2.5 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase rounded hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Confirm</button>
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
            token: localStorage.getItem("access_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subtitle: null,
            showDialog: false,

            retPassId: null,

            //form datas
            accountId: null,
            accountDetailsId: null,
            fname: "",
            mname: "",
            lname: "",
            username: "",
            office: "",
            usertype: "",
            status: true,
            
            //query datas
            userTypeData: [],
            officeData: [],
        }
    },
    computed: {
        filteredCase(){
            return this.caseData.filter(item => item.caseStatus !== 0 && item.caseType.id == 1)
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/offices/active', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.officeData = res.data
            });
            axios.get(this.$store.state.serverUrl + '/user-type', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.userTypeData = res.data
            });
        },
        initializeAdd(){
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add New Account"
            this.subtitle = "Add Admin or Staff Account"
            this.accountId = null,
            this.accountDetailsId = null,
            this.fname = "",
            this.mname = "",
            this.lname = "",
            this.username = "",
            this.office = "",
            this.usertype= ""
            this.status= true
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Account"
            this.subtitle = "Update Admin or Staff Account"
            this.accountId = data.id,
            this.accountDetailsId = data.userDetails.id
            this.fname = data.userDetails.fname,
            this.mname = data.userDetails.mname,
            this.lname = data.userDetails.lname,
            this.username = data.email,
            this.office = data.userDetails.office.id,
            this.usertype= data.userDetails.userType.id
            this.status = data.status
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.fname, this.lname, this.username]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.office && this.usertype){
                let formData = {
                    accountId: this.accountId,
                    accountDetailsId: this.accountDetailsId,
                    caseId: this.caseId,
                    fname: this.fname,
                    mname: this.mname,
                    lname: this.lname,
                    username: this.username,
                    office: this.office,
                    usertype: this.usertype,
                    status: this.status
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/users', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Account Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/users/update', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Account Succesfully Updated", {
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
        resetPassword(){
            axios.patch(this.$store.state.serverUrl + '/users/resetPass/' + this.accountId,1, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.showDialog = false
                            const toast = useToast();
                            toast.success("Account Succesfully Reset Password", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
        },
        returnDateNow(){
            return moment(new Date()).format('YYYY-MM-DD')
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