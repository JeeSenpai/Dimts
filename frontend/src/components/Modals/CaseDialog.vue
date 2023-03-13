<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCaseList" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-16 max-w-[30rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                              <p class="font-thin text-xs text-gray-600 text-left">Case No.- {{ caseNumber }}</p>
                         </div>
                          <button type="button" class="p-2" id="close-btn" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                <div class="modal-body rounded-md relative">
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Case Title</div>
                    <div><input 
                        v-model="caseTitle" 
                        :class="{ invalid: isSubmitting && !caseTitle.trim() }"
                        type="text"
                        class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>

                    <div class="text-left ml-6 mt-4 text-[13px] text-gray-800 font-bold">Case Description</div>
                    <div><textarea
                        v-model="caseDesc" 
                        :class="{ invalid: isSubmitting && !caseDesc.trim() }"
                        type="text"
                        class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>
                    <div class="flex mt-4 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Case Type</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Recieved Date</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <select v-model="caseType" :class="{ invalid: isSubmitting && caseType == '' }" class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select case type</option>
                              <option v-for="casetypes in caseTypeData" :key="casetypes" :value="casetypes.id"> {{ casetypes.description }}</option>
                            </select>
                        </div>
                        <div><input 
                            v-model="recievedDate" 
                            :class="{ invalid: isSubmitting && recievedDate == '' }"
                            type="date"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
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

export default {
    data(){
        return {
            token: localStorage.getItem("access_token"),
            isSubmitting: false,
            action: null,
            title: null,

            //form datas
            caseId: null,
            caseNumber: "",
            caseType: "",
            caseTitle: "",
            caseDesc: "",
            recievedDate: "",

            //query datas
            caseTypeData: [],
            raffledCourtData: [],
            judgesData: [],
        }
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
            this.title = "Add New Case Record"
            this.caseNumber = moment(new Date()).format('YYYY')+"-"+Math.floor(Math.random()*90000)
            this.caseType = "",
            this.caseTitle = "",
            this.caseDesc = "",
            this.recievedDate =  moment(new Date()).format('YYYY-MM-DD');
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Case Record"
            this.caseId = data.id
            this.caseNumber = data.case_no
            this.caseType = data.caseType.id
            this.caseTitle = data.case_title
            this.caseDesc = data.case_description
            this.recievedDate = data.date_recieved
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.caseTitle, this.caseDesc]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.caseType){
                let formData = {
                    case_id: this.caseId,
                    case_no: this.caseNumber,
                    case_title: this.caseTitle,
                    case_description: this.caseDesc,
                    date_recieved: this.recievedDate,
                    case_type: this.caseType,
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/cases', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.patch(this.$store.state.serverUrl + '/cases', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();
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