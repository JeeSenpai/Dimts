<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCase" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-10 max-w-[30rem] pointer-events-none">
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
                            <select :disabled="date_action != 1" v-model="caseId" :class="{ invalid: isSubmitting && caseId == '' }" class="ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select case number</option>
                              <option v-for="cases in caseData" :key="cases" :value="cases.id"> {{ cases.case_no }} - {{ cases.case_title }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Type of Hearing</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Hearing Schedule</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <select :disabled="date_action != 1" v-model="hearingType" :class="{ invalid: isSubmitting && hearingType == '' }" class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select type of hearing</option>
                              <option v-for="ht in hearingTypeData" :key="ht" :value="ht.id"> {{ ht.description }}</option>
                            </select>
                        </div>
                        <div><input 
                            v-model="hearingSched"
                            :disabled="date_action != 1"
                            :class="{ invalid: isSubmitting && hearingSched == '' }"
                            type="date"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Start Time</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">End Time</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <input 
                            v-model="startTime" 
                            :disabled="date_action != 1"
                            :class="{ invalid: isSubmitting && startTime == '' }"
                            type="time"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="endTime"
                            :disabled="date_action != 1"
                            :class="{ invalid: isSubmitting && endTime == '' }"
                            type="time"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="w-1/2 text-left ml-5 text-[13px] text-gray-800 font-bold">Raffled Court</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Judge Assigned</div>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <select :disabled="date_action != 1" v-model="raffledCourt" :class="{ invalid: isSubmitting && raffledCourt == '' }" class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select raffled court</option>
                              <option v-for="rf in raffledCourtData" :key="rf" :value="rf.id"> {{ rf.description }}</option>
                            </select>
                        </div>
                        <div><select :disabled="date_action != 1" v-model="judgeAssigned" :class="{ invalid: isSubmitting && judgeAssigned == '' }" class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                              <option disabled value="">Select judge</option>
                              <option v-for="judge in judgesData" :key="judge" :value="judge.id"> {{ judge.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="date_action != 1">
                    <div class="text-left ml-6 mt-6 text-[13px] text-gray-800 font-bold">Remarks</div>
                        <div><textarea
                            :disabled="date_action == 4"
                            v-model="remarks"
                            type="text"
                            class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                    <button v-if="action == 'update' && date_action != 4" @click="checkForm()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
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
import moment from 'moment';

export default {
    props: {
        date_action: null
    },
    data(){
        return {
            token: localStorage.getItem("access_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subTitle: null,

            //form datas
            courtHearingId: null,
            caseId: "",
            hearingType: "",
            hearingSched: "",
            startTime: "",
            endTime: "",
            judgeAssigned: "",
            raffledCourt: "",
            remarks: "",

            //query datas
            caseData: [],
            raffledCourtData: [],
            judgesData: [],
            hearingTypeData: []
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/judges', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.judgesData = res.data
            });
            axios.get(this.$store.state.serverUrl + '/raffled-court', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.raffledCourtData = res.data
            });
            axios.get(this.$store.state.serverUrl + '/hearing-types', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.hearingTypeData = res.data
            });
        },
        initializeAdd(){
            axios.get(this.$store.state.serverUrl + '/cases', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseData = res.data
            });
            this.isSubmitting = false
            this.action = "add"
            this.title = "Court Hearing"
            this.subTitle = "Control No."
            this.caseId = ""
            this.hearingType = ""
            this.hearingSched = moment(new Date()).format('YYYY-MM-DD'),
            this.startTime = "",
            this.endTime = "",
            this.judgeAssigned = "",
            this.raffledCourt = ""
            this.remarks = ""
        },
        initializeUpdate(data){
            if(this.date_action == 4){
                axios.get(this.$store.state.serverUrl + '/cases/findAllDocket', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                    this.caseData = res.data
                });
            }
            else{
                axios.get(this.$store.state.serverUrl + '/cases', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                    this.caseData = res.data
                });
            }
            this.isSubmitting = false
            this.action = "update"
            this.title = "Court Hearing"
            this.subTitle = "Update court hearing"
            this.courtHearingId = data.id
            this.caseId = data.case.id
            this.hearingType = data.hearingType.id
            this.hearingSched = data.hearing_schedule,
            this.startTime = data.start_time,
            this.endTime = data.end_time,
            this.judgeAssigned = data.judgeAssigned.id,
            this.raffledCourt = data.raffledCourt.id,
            this.remarks = data.remarks
        },
        checkForm(){
            this.isSubmitting = true

            if(this.caseId && this.hearingSched && this.startTime && this.endTime && this.judgeAssigned && this.raffledCourt && this.hearingType){
                let formData = {
                    court_hearing_id: this.courtHearingId,
                    case_id: this.caseId,
                    hearing_type: this.hearingType,
                    hearing_schedule: this.hearingSched,
                    start_time: this.startTime,
                    end_time: this.endTime,
                    judge: this.judgeAssigned,
                    raffled_court: this.raffledCourt,
                    remarks: this.remarks
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/court-hearings', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Court Hearing Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.patch(this.$store.state.serverUrl + '/court-hearings', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Court Hearing Succesfully Updated", {
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