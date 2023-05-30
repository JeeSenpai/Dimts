<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCitizen" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Age</div>
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
                            v-model="age"
                            type="number"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Contact No.</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Email</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="contact_no" 
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="email" 
                            :class="{ invalid: isSubmitting && !email.trim() }" 
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Address</div>
                    <div><input 
                        v-model="address" 
                        :class="{ invalid: isSubmitting && !address }"
                        type="text"
                        class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>
                    
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                    <button v-if="action == 'update'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                    <button v-if="action == 'add'" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
                    <button type="button" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
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
            subtitle: null,

            //form datas
            citizenId: null,
            fname: "",
            mname: "",
            lname: "",
            age: "",
            contact_no: "",
            address: "",
            email: "",
            
            //query datas
            caseData: [],
        }
    },
    computed: {
        filteredCase(){
            return this.caseData.filter(item => item.caseStatus !== 0 && item.caseType.id == 1)
        }
    },
    methods: {
        init(){
            // axios.get(this.$store.state.serverUrl + '/cases', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
            //     this.caseData = res.data
            // });
        },
        initializeAdd(){
            this.isSubmitting = false
            this.action = "add"
            this.title = "Citizen Details"
            this.subtitle = "Add New Citizen"
            this.citizenId = null,
            this.fname = "",
            this.mname = "",
            this.lname = "",
            this.age = "",
            this.contact_no = "",
            this.address = "",
            this.email = ""
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Citizen Details"
            this.subtitle = "Update Citizen Details"
            this.citizenId = data.id,
            this.fname = data.fname,
            this.mname = data.mname,
            this.lname = data.lname,
            this.age = data.age,
            this.contact_no = data.contact_no,
            this.address = data.address,
            this.email = data.email
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.fname, this.lname, this.address, this.email, this.address]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid){
                let formData = {
                    citizenId: this.citizenId,
                    caseId: this.caseId,
                    fname: this.fname,
                    mname: this.mname,
                    lname: this.lname,
                    age: this.age,
                    contact_no: this.contact_no,
                    address: this.address,
                    email: this.email
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/citizen/createCitizenByAdmin', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Citizen Account Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/citizen/updateCitizenByAdmin', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Citizen Account Succesfully Updated", {
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
</style>