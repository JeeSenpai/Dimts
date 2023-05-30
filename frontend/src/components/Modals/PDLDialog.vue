<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropPDL" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Case No. & Title</div>
                    <div>
                        <div>
                            <select v-model="caseId" :class="{ invalid: isSubmitting && caseId == '' }" class="ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select case number & title</option>
                              <option v-for="cases in action == 'add' ? filteredCase : caseData" :key="cases" :value="cases.id"> {{ cases.case_no }} - {{ cases.case_title }}</option>
                            </select>
                        </div>
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
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Suffix</div>
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
                            v-model="suffix"
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Height</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Weight</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="height" 
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="weight" 
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Blood Type</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Birthdate</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="blood_type" 
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="birthdate" 
                            :class="{ invalid: isSubmitting && !birthdate }"
                            type="date"
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
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Transfer Status</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Transfer Dates</div>
                    </div>
                    <div class="flex justify-between mt-1.5">
                        <div>
                            <label class="flex flex-row justify-between p-2.5 mx-4 mb-1 rounded-lg">
                            <input v-model="pnp_status" :disabled="bjmp_status == true" @change="pnp_status == true ? pnp_status_date = returnDateNow() : pnp_status_date = null" type="checkbox" class="text-[#BF40BF] focus:ring-0 rounded w-3.5 h-3.5">
                            <p class="text-xs ml-1.5 font-semibold text-gray-900">PNP</p> 
                            </label>
                        </div>
                        <div><input 
                            v-model="pnp_status_date"
                            type="date"
                            required
                            :disabled="bjmp_status == true"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <div>
                            <label class="flex flex-row justify-between p-2.5 mx-4 mt-1 mb-1 rounded-lg">
                            <input v-model="bjmp_status" :disabled="bucor_status == true" @change="bjmp_status == true ? bjmp_status_date = returnDateNow() : bjmp_status_date = null" type="checkbox" class="text-[#BF40BF] focus:ring-0 rounded w-3.5 h-3.5">
                            <p class="text-xs ml-1.5 font-semibold text-gray-900">BJMP</p> 
                            </label>
                        </div>
                        <div><input 
                            v-model="bjmp_status_date" 
                            type="date"
                            required
                            :disabled="bucor_status == true"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex justify-between mt-1.5">
                        <div>
                            <label class="flex flex-row justify-between p-2.5 mx-4 mt-1 mb-1 rounded-lg">
                            <input v-model="bucor_status" @change="bucor_status == true ? bucor_status_date = returnDateNow() : bucor_status_date = null" type="checkbox" class="text-[#BF40BF] focus:ring-0 rounded w-3.5 h-3.5">
                            <p class="text-xs ml-1.5 font-semibold text-gray-900">BuCor</p> 
                            </label>
                        </div>
                        <div><input 
                            v-model="bucor_status_date"
                            type="date"
                            required
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:ring-[#BF40BF]"/>
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
            custodyId: null,
            caseId: "",
            fname: "",
            mname: "",
            lname: "",
            suffix: "",
            height: "",
            weight: "",
            blood_type: "",
            birthdate: "",
            address: "",

            pnp_status: false,
            pnp_status_date: null,
            bjmp_status: false,
            bjmp_status_date: null,
            bucor_status: false,
            bucor_status_date: null,
            
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
            axios.get(this.$store.state.serverUrl + '/cases/findAllActive', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseData = res.data
            });
        },
        initializeAdd(){
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add New Case Custodies"
            this.subtitle = "Add New Person Deprive Liberty Detainee"
            this.custodyId = null,
            this.caseId = "",
            this.fname = "",
            this.mname = "",
            this.lname = "",
            this.suffix = "",
            this.height = "",
            this.weight = "",
            this.blood_type = "",
            this.birthdate = "",
            this.address = "",

            this.pnp_status = false,
            this.pnp_status_date = null,
            this.bjmp_status = false,
            this.bjmp_status_date = null,
            this.bucor_status = false,
            this.bucor_status_date = null
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Case Custodies"
            this.subtitle = "Update Person Deprive Liberty Detainee Details"
            this.custodyId = data.id,
            this.caseId = data.case.id,
            this.fname = data.fname,
            this.mname = data.mname,
            this.lname = data.lname,
            this.suffix = data.suffix,
            this.height = data.height,
            this.weight = data.weight,
            this.blood_type = data.blood_type,
            this.birthdate = data.birth_date,
            this.address = data.address,

            this.pnp_status = data.pnp_status,
            this.pnp_status_date = data.pnp_status_date,
            this.bjmp_status = data.bjmp_status,
            this.bjmp_status_date = data.bjmp_status_date,
            this.bucor_status = data.bucor_status,
            this.bucor_status_date = data.bucor_status_date
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.fname, this.lname, this.address]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.caseId && this.birthdate){
                let formData = {
                    custodyId: this.custodyId,
                    caseId: this.caseId,
                    fname: this.fname,
                    mname: this.mname,
                    lname: this.lname,
                    suffix: this.suffix,
                    height: this.height,
                    weight: this.weight,
                    blood_type: this.blood_type,
                    birthdate: this.birthdate,
                    address: this.address,

                    pnp_status: this.pnp_status,
                    pnp_status_date: this.pnp_status_date,
                    bjmp_status: this.bjmp_status,
                    bjmp_status_date: this.bjmp_status_date,
                    bucor_status: this.bucor_status,
                    bucor_status_date: this.bucor_status_date,
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/custodies', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Custodies Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/custodies/updateCustody', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Custodies Succesfully Updated", {
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