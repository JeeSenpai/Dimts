<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCourtProceeding" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Case Decision</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Date Of Court Action</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <select v-model="caseDecision" @change="checkInputs(caseDecision)" :class="{ invalid: isSubmitting && caseDecision == '' }" class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select case decision</option>
                              <option v-for="cd in caseDecisionData" :key="cd.id" :value="cd.id"> {{ cd.description }}</option>
                            </select>
                        </div>
                        <div><input 
                            v-model="last_court_action" 
                            :class="{ invalid: isSubmitting && last_court_action == '' }"
                            type="date"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Minimum Sentence</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Duration</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input
                            :disabled="inputs == false"
                            v-model="minimum_sentence"
                            @keyup="minimum_sentence == '' ? minimum_duration = '': ''"
                            type="number"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div>
                            <select :disabled="inputs == false" v-model="minimum_duration" ref="min_dur" class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select minimum duration</option>
                              <option value="1">Days</option>
                              <option value="2">Months</option>
                              <option value="3">Years</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Maximum Sentence</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Duration</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input
                            :disabled="inputs == false"
                            v-model="maximum_sentence"
                            @keyup="maximum_sentence == '' ? maximum_duration = '': ''"
                            type="number"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div>
                            <select :disabled="inputs == false" v-model="maximum_duration" ref="max_dur" class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select maximum duration</option>
                              <option value="1">Days</option>
                              <option value="2">Months</option>
                              <option value="3">Years</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Minimum Fines</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Maximum Fines</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input
                            :disabled="inputs == false"
                            v-model="minimum_fines" 
                            type="text"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div>
                            <input
                            :disabled="inputs == false"
                            v-model="maximum_fines" 
                            type="text"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Remarks</div>
                    <div><textarea
                        v-model="remarks"
                        :class="{ invalid: isSubmitting && !remarks.trim() }"
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

export default {
    data(){
        return {
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subTitle: null,
            inputs: null,

            valid1: null,
            valid2: null,

            //form datas
            proceedingId: null,
            caseId: "",
            caseDecision: "",
            minimum_sentence: "",
            maximum_sentence: "",
            minimum_duration: "",
            maximum_duration: "",
            minimum_fines: "",
            maximum_fines: "",
            last_court_action: "",
            remarks: "",

            //query datas
            caseData: [],
            proceedingData: [],
            caseDecisionData: []
        }
    },
    methods: {
        initializeAdd(data){

            axios.get(this.$store.state.serverUrl + '/case-decision/findAllCaseDecisionByCaseType/' + data.caseType.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseDecisionData = res.data
            });
            
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add Court Decision"
            this.subTitle = "Case No. " + data.case_no + " - " + data.casse_title
            this.proceedingId = null,
            this.caseId = data.id,
            this.caseDecision = "",
            this.minimum_sentence = "",
            this.maximum_sentence = "",
            this.minimum_duration = "",
            this.maximum_duration = "",
            this.minimum_fines = "",
            this.maximum_fines = "",
            this.last_court_action = moment(new Date()).format('YYYY-MM-DD'),
            this.remarks= ""

            this.inputs = false
        },
        initializeUpdate(data){

            axios.get(this.$store.state.serverUrl + '/case-decision/findAllCaseDecisionByCaseType/' + data.case.caseType.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseDecisionData = res.data
            });

            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Court Decision"
            this.subTitle = "Case No. " + data.case.case_no + " - " + data.case.case_title
            this.proceedingId = data.id
            this.caseId = data.case.id,
            this.caseDecision = data.caseDecision.id,
            this.minimum_sentence = data.minimum_sentence,
            this.maximum_sentence = data.maximum_sentence,
            this.minimum_duration = data.minimum_duration,
            this.maximum_duration = data.maximum_duration,
            this.minimum_fines = data.minimum_fines,
            this.maximum_fines = data.maximum_fines,
            this.last_court_action = data.last_court_action,
            this.remarks= data.remarks

            this.checkInputs(data.caseDecision.id)
        },
        checkInputs(inputs){
            axios.get(this.$store.state.serverUrl + '/case-decision/findCaseDecisionById/' + inputs, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                if(res){
                    this.inputs = res.data.inputs
                }
            });
        },
        checkForm(){
            this.isSubmitting = true

            if(this.caseDecision && this.remarks){
                let formData = {
                    proceedingId: this.proceedingId,
                    caseId: this.caseId,
                    caseDecision: this.caseDecision,
                    minimum_sentence: this.minimum_sentence,
                    maximum_sentence: this.maximum_sentence,
                    minimum_duration: this.minimum_duration,
                    maximum_duration: this.maximum_duration,
                    minimum_fines: this.minimum_fines,
                    maximum_fines: this.maximum_fines,
                    last_court_action: this.last_court_action,
                    remarks: this.remarks,
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/proceedings', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.patch(this.$store.state.serverUrl + '/proceedings', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();
                        }
                    });
                }
            }
        }
    },
}
</script>
<style scoped>
     .invalid {
         border-width: 1px;
         border-color: red;
    }
</style>