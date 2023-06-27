<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCaseRequest" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-16 max-w-[30rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col h-full max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                         </div>
                          <button type="button" class="p-2" id="close-btn14" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                <div class="modal-body rounded-md relative">
                    <div class="text-left ml-4 mt-4 text-sm text-gray-800 font-bold">Case No. & Title</div>
                    <div>
                        <select v-model="caseId" :class="{ invalid: isSubmitting && caseId == '' }" class="ml-4 mr-5 px-2 py-3.5 w-[92%] text-sm rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                            <option disabled value="">Select case number & title</option>
                            <option v-for="cases in caseData" :key="cases" :value="cases.id"> {{ cases.case_no }} - {{ cases.case_title }}</option>
                        </select>
                    </div>
                    <div class="text-left ml-4 mt-3.5 text-sm text-gray-800 font-bold">Relationship to the case</div>
                    <div>
                        <input 
                        v-model="relation"
                        :class="{ invalid: isSubmitting && !relation.trim() }"
                        type="text"
                        class=" ml-4 mr-5 px-2 py-3.5 w-[92%] text-sm rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                    <button v-if="action == 'update'" @click="checkForm()" type="button" class="inline-block px-6 py-3 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                    <button v-if="action == 'add'" @click="checkForm()" type="button" class="inline-block px-6 py-3 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
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

            //form datas
            citizenId: this.$store.state.user.id,
            monitorId: null,
            caseId: "",
            relation: "",
            is_verified: true,

            //query datas
            caseData: [],
            caseTypeData: []
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/case-type', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseTypeData = res.data
            });
        },
        initializeAdd(){
            axios.get(this.$store.state.serverUrl + '/cases/findAllActive', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseData = res.data
            });
            this.isSubmitting = false
            this.title = 'Add New Citizen Monitor'
            this.action = 'add'
            this.monitorId = null
            this.caseId = ''
            this.relation = ''
            this.is_verified = false
            this.showDialog = true
        },
        initializeUpdate(data){
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
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.relation]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.caseId){
                let formData = {
                    monitorId: this.monitorId,
                    citizenId: this.citizenId,
                    caseId: this.caseId,
                    relation: this.relation,
                    is_verified: this.is_verified
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/citizen-monitors/createCitizenMonitorByAdmin', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn14').click();

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
                            this.$emit('refresh')
                            document.getElementById('close-btn14').click();

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
        }
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