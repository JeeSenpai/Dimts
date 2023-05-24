<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCase" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-5 max-w-[30rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                              <p class="font-thin text-xs text-gray-600 text-left">{{ subTitle }}</p>
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
                            <select  v-model="caseId" :class="{ invalid: isSubmitting && caseId == '' }" class="ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select case number</option>
                              <option v-for="cases in action == 'add' ? filteredCase : caseData" :key="cases" :value="cases.id"> {{ cases.case_no }} - {{ cases.case_title }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Type of Document</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Office</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <select v-model="documentType" :class="{ invalid: isSubmitting && documentType == '' }" class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select type of document</option>
                              <option v-for="dt in documentTypeData" :key="dt" :value="dt.id"> {{ dt.description }}</option>
                            </select>
                        </div>
                        <div>
                            <select v-model="office" :class="{ invalid: isSubmitting && office == '' }" class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select office</option>
                              <option v-for="od in action == 'view' ? officeData : filteredOffice" :key="od" :value="od.id"> {{ od.description }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Sender</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Reciever</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="sender" 
                            :class="{ invalid: isSubmitting && sender == '' }"
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                        <div>
                            <input 
                            v-model="reciever" 
                            :class="{ invalid: isSubmitting && reciever == '' }"
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Address</div>
                    <div><input 
                        v-model="address" 
                        :class="{ invalid: isSubmitting && !address }"
                        type="text"
                        class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>
                    <div class="text-left ml-6 mt-6 text-[13px] text-gray-800 font-bold">Remarks</div>
                    <div><textarea
                        v-model="remarks"
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
import { useToast } from "vue-toastification"

export default {
    data(){
        return {
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subTitle: null,

            //form datas
            documentId: null,
            caseId: "",
            documentType: "",
            control_number: "",
            from_office: "",
            office: "",
            sender: "",
            reciever: "",
            address: "",
            remarks: "",

            //query datas
            caseData: [],
            documentTypeData: [],
            officeData: [],
        }
    },
    computed: {
        filteredOffice(){
            return this.officeData.filter(item => item.id !== this.$store.state.user.userDetails.office.id)
        },
        filteredCase(){
            return this.caseData.filter(item => item.caseStatus !== 0)
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/cases', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseData = res.data
            });
            axios.get(this.$store.state.serverUrl + '/document-type/active', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.documentTypeData = res.data
            });
            axios.get(this.$store.state.serverUrl + '/offices/active', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.officeData = res.data
            });
        },
        initializeAdd(){
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add Documents"
            this.documentId = null,
            this.caseId = "",
            this.documentType = "",
            this.control_number = this.generateRandomString(),
            this.subTitle = "Control No. - " + this.control_number, 
            this.from_office = this.$store.state.user.userDetails.office.id
            this.office = "",
            this.sender = "",
            this.reciever = "",
            this.address = ""
            this.remarks = ""
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Documents"
            this.documentId = data.id,
            this.caseId = data.case.id,
            this.documentType = data.documentType.id,
            this.control_number = data.control_number,
            this.subTitle = "Control No. - " + this.control_number,
            this.from_office = this.$store.state.user.userDetails.office.id
            this.office = data.office.id,
            this.sender = data.sender,
            this.reciever = data.reciever,
            this.address = data.address,
            this.remarks = data.remarks
        },
        initializeView(data){
            this.isSubmitting = false
            this.action = "view"
            this.title = "View Document"
            this.documentId = data.id,
            this.caseId = data.case.id,
            this.documentType = data.documentType.id,
            this.control_number = data.control_number,
            this.subTitle = "Control No. - " + this.control_number,
            this.from_office = this.$store.state.user.userDetails.office.id
            this.office = data.office == undefined ? data.fromOffice.id : data.office.id,
            this.sender = data.sender,
            this.reciever = data.reciever,
            this.address = data.address,
            this.remarks = data.remarks
        },
        generateRandomString() {
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
                for (let i = 0; i < 14; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
            return result;
        },
        checkForm(){
            this.isSubmitting = true

            if(this.caseId && this.documentType && this.control_number && this.office && this.sender && this.reciever){
                let formData = {
                    documentId: this.documentId,
                    caseId: this.caseId,
                    documentType: this.documentType,
                    control_number: this.control_number,
                    from_office: this.from_office,
                    office: this.office,
                    sender: this.sender,
                    reciever: this.reciever,
                    address: this.address,
                    remarks: this.remarks
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/documents', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Document Saved Succesfully", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/documents/updateDocs', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Document Updated Succesfully", {
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