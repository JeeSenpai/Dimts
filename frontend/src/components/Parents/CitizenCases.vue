<template>
    <div class="checkFade animated">
        <div v-if="showProceeding == true">
            <div class="m-auto text-center w-screen">
                <div class="text-xs font-semibold text-center text-gray-500 border-gray-200">
                    <ul class="flex flex-wrap mb-2">
                        <li v-for="tab in tabs" :key="tab.id">
                            <button @click="changeTab(tab)" :class="tab.id == comply ? 'text-[#BF40BF] border-[#BF40BF] ': 'hover:text-gray-700 hover:border-gray-400'" class="inline-block p-4 rounded-t-lg border-b-4">{{ tab.description }}</button>
                        </li>
                    </ul>
                </div>
                <div v-if="tab.id == 1">
                    <div class="pl-2 pr-2 pb-2">
                        <div v-if="courtHearings.length == 0" class="bg-white shadow-lg rounded-lg w-full mb-3.5 p-2 text-sm font-semibold"> No Court Hearing Schedule</div>
                        <div v-for="hearing in courtHearings" :key="hearing" class="bg-white shadow-lg rounded-lg w-full mt-3.5">
                            <div class="space-y-5">
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Hearing Type</p>
                                        <p class="text-sm">{{ hearing.hearingType.description }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Hearing Schedule</p>
                                        <p class="text-sm">{{ formatDate(hearing.hearing_schedule) }} </p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Time Start & End</p>
                                        <p class="text-sm">{{ formatTime(hearing.start_time) + " - " + formatTime(hearing.end_time) }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Raffle Court</p>
                                        <p class="text-sm">{{ hearing.raffledCourt.description }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Judge Assigned</p>
                                        <p class="text-sm">{{ hearing.judgeAssigned.name }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div class="mb-3">
                                        <p class="font-thin text-sm text-gray-600 text-left">Status</p>
                                        <span v-if="hearing.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Pending</span>
                                        <span v-if="hearing.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-700 rounded-md">Cancelled</span>
                                        <span v-if="hearing.status == 2" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="tab.id == 2">
                    <div class="pl-2 pr-2 pt-2 pb-2">
                        <div v-if="documentServedData.length == 0" class="bg-white shadow-lg rounded-lg w-full mb-3.5 p-2 text-sm font-semibold"> No Documents Served</div>
                        <div v-for="document in documentServedData" :key="document" class="bg-white shadow-lg rounded-lg w-full">
                            <div class="space-y-5">
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Document Type</p>
                                        <p class="text-sm">{{ document.documentType.description }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Proccessing Office</p>
                                        <p class="text-sm">{{ document.office.description }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Date Recieved</p>
                                        <p class="text-sm">{{ document.sended_date == null ? 'N/A' : formatDate(document.sended_date) }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Sender</p>
                                        <p class="text-sm">{{ document.sender }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Reciver</p>
                                        <p class="text-sm">{{ document.reciever }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Remarks</p>
                                        <p class="text-sm">{{ document.remarks }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div class="mb-3">
                                        <p class="font-thin text-sm text-gray-600 text-left">Status</p>
                                        <span v-if="document.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Acknowledge - {{ formatDate(document.acknowledge_date) }}</span>
                                        <span v-if="document.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-600 rounded-md">Pending</span>
                                        <span v-if="document.status == null" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-600 rounded-md">Waiting to Send</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="tab.id == 3">
                    <div class="pl-2 pr-2 pt-2 pb-2">
                        <div v-if="custodiesData.length == 0" class="bg-white shadow-lg rounded-lg w-full mb-3.5 p-2 text-xs font-semibold"> No Custodies Found</div>
                        <div v-for="custodies in custodiesData" :key="custodies" class="bg-white shadow-lg rounded-lg w-full">
                            <div class="space-y-5">
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Detainee Name</p>
                                        <p class="text-sm">{{ custodies.lname }}, {{ custodies.fname }} {{ !custodies.mname ? '' : custodies.mname[0] }} {{ custodies.suffix }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Height</p>
                                        <p class="text-sm">{{ custodies.height }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Weight</p>
                                        <p class="text-sm">{{ custodies.weight }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Birthdate</p>
                                        <p class="text-sm">{{ formatDate(custodies.birth_date) }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Blood Type</p>
                                        <p class="text-sm">{{ custodies.blood_type }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Address</p>
                                        <p class="text-sm">{{ custodies.address }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div class="mb-3">
                                        <p class="font-thin text-sm text-gray-600 text-left">Transfer Status</p>
                                        <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 0 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">PNP - {{ formatDate(custodies.pnp_status_date) }}</span>
                                        <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 1 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-200 text-blue-600 rounded-md">BJMP - {{ formatDate(custodies.bjmp_status_date) }}</span>
                                        <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 1 && custodies.bucor_status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">BuCor - {{ formatDate(custodies.bucor_status_date) }}</span>
                                        <span v-if="custodies.pnp_status == 0 && custodies.bjmp_status == 0 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-600 rounded-md">No Transfer History</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="tab.id == 4">
                    <div class="pl-2 pr-2 pt-2 pb-2">
                        <div v-if="proceedingData.length == 0" class="bg-white shadow-lg rounded-lg w-full mb-3.5 p-2 text-xs font-semibold"> No Case Proceedings or Decision Yet</div>
                        <div v-for="proceeding in proceedingDatas" :key="proceeding" class="bg-white shadow-lg rounded-lg w-full">
                            <div class="space-y-5">
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Case Decision</p>
                                        <p class="text-sm">{{ proceeding.caseDecision.description }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left mt-2">Minimum Sentence</p>
                                        <p class="text-sm">{{ !proceeding.minimum_sentence ? 'N/A' : proceeding.minimum_sentence }} {{ getSentenceDuration(proceeding.minimum_duration)}} </p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Maximum Sentence</p>
                                        <p class="text-sm">{{ !proceeding.maximum_sentence ? 'N/A' : proceeding.maximum_sentence }} {{ getSentenceDuration(proceeding.maximum_duration)}}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Minimum Fines</p>
                                        <p class="text-sm">{{ !proceeding.minimum_fines ? 'N/A' : proceeding.minimum_fines }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Maximum Fines</p>
                                        <p class="text-sm">{{ !proceeding.maximum_fines ? 'N/A' : proceeding.maximum_fines }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Last Court Action</p>
                                        <p class="text-sm">{{ formatDate(proceeding.last_court_action) }}</p>
                                    </div>
                                </div>
                                <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                    <div>
                                        <p class="font-thin text-sm text-gray-800 text-left">Remarks</p>
                                        <p class="text-sm">{{ proceeding.remarks }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button" @click="showProceeding = false"
                class="button-corner p-0 w-16 h-16 bg-[#BF40BF] text-white rounded-full hover:bg-[#b337b3] active:shadow-lg shadow-lg transition ease-in duration-200 focus:outline-none">
                Back
            </button>
        </div>
        
        <div v-if="showProceeding == false" class="pl-2 pr-2 pb-2">
            <button :disabled="data.is_verified == false" v-for="data in citizenMonitorData" :key="data" @click="showProceedings(data)" class="bg-white shadow-lg rounded-lg w-full mt-3.5">
                <div class="space-y-5">
                    <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                        <div>
                            <p class="font-thin text-sm text-gray-800 text-left mt-2">Case No. & Title</p>
                            <p class="text-sm">{{ data.case.case_no }} - {{ data.case.case_title }}</p>
                        </div>
                    </div>
                    <div class="flex text-left font-semibold space-x-14 ml-4">
                        <div>
                            <p class="font-thin text-sm text-gray-800 text-left mt-2">Case Description</p>
                            <p class="text-sm">{{ data.case.case_description }} </p>
                        </div>
                    </div>
                    <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                        <div>
                            <p class="font-thin text-sm text-gray-800 text-left">Relation to the case</p>
                            <p class="text-sm">{{ data.relationship }}</p>
                        </div>
                    </div>
                    <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                        <div class="mb-3">
                            <p class="font-thin text-sm text-gray-600 text-left">Status</p>
                            <span v-if="data.is_verified == 0" class="text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-700 rounded-md">Unverified</span>
                            <span v-if="data.is_verified == 1" class="text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Verified</span>
                        </div>
                    </div>
                </div>
            </button>
            <button
                type="button" @click="showAddDialog()"
                data-bs-toggle="modal" data-bs-target="#staticBackdropCaseRequest"
                class="button-corner p-0 w-16 h-16 bg-[#BF40BF] rounded-full hover:bg-[#b337b3] active:shadow-lg shadow-lg transition ease-in duration-200 focus:outline-none">
                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-8 h-8 inline-block">
                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                            C15.952,9,16,9.447,16,10z" />
                </svg>
            </button>
        </div>
        
        <div>
            <CitizenRequestMonitorDialog
             ref="CitizenRequestMonitorDialog"
             v-on:refresh="init()"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import CitizenRequestMonitorDialog from '../Modals/CitizenRequestMonitorDialog.vue';

export default {
    components: {
        CitizenRequestMonitorDialog
    },
    data(){
        return {
            citizenId: this.$store.state.user.id,
            citizenMonitorData: [],
            showProceeding: false,

            courtHearings: [],
            proceedingData: [],
            documentServedData: [],
            custodiesData: [],

            comply: 1,
            tabs: [
                { id: 1, description: 'Schedules'},
                { id: 2, description: 'Document' },
                { id: 3, description: 'Custodies' },
                { id: 4, description: 'Decision' },
            ],
            tab: { id: 1, description: 'Active Cases' }
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/citizen-monitors/findAllMonitorByCitizen/' + this.citizenId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.citizenMonitorData = res.data
            });
        },
        showAddDialog(){
            this.$refs.CitizenRequestMonitorDialog.initializeAdd()
        },
        showProceedings(data){
            this.showProceeding = true

            axios.get(this.$store.state.serverUrl + '/cases/getProceedings/' + data.case.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.courtHearings = res.data.courtHearings

                axios.get(this.$store.state.serverUrl + '/proceedings/' + data.case.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((proceeding)=>{
                    this.proceedingData = proceeding.data
                });

                axios.get(this.$store.state.serverUrl + '/documents/findOneByCaseId/' + data.case.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((documents)=>{
                    this.documentServedData = documents.data
                });

                axios.get(this.$store.state.serverUrl + '/custodies/findAllCustodyById/' + data.case.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((custody)=>{
                    this.custodiesData = custody.data
                });
            });
        },
        getSentenceDuration(data){
            if(data == 1){
                return "Days"
            }
            else if(data == 2){
                return "Months"
            }
            else if(data == 3){
                return "Years"
            }
            else{
                return ""
            }
        },
        changeTab(data){
            this.tab = data;
            this.comply = data.id
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        formatTime(time){
            return moment(time,'h:mm a').format('h:mm a');
        }
    },
    mounted(){
        this.init()
    }

 }
</script>

<style scoped>
.button-corner {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 45;
}
</style>