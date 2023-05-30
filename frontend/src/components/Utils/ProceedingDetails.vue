<template>
    <div class="checkFade animated">
       <div class="flex -ml-2 bg-white w-full rounded-lg shadow-lg p-3.5">
        <div class="flex justify-between">
            <div class="flex">
                <div>
                    <vue-qrcode :value="caseNumber" :options="{ width: 250 }" class="rounded-lg shadow-lg"></vue-qrcode>
                </div>
                <div class="space-y-7">
                    <div class="flex text-left font-semibold space-x-20 mt-3 ml-6">
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Case No.</p>
                            <p class="text-xs">{{ caseNumber }}</p>
                        </div>
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Case Type</p>
                            <p class="text-xs">{{ caseType }}</p>
                        </div>
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Date Recieved</p>
                            <p class="text-xs">{{ formatDate(recievedDate) }}</p>
                        </div>
                    </div>
                    <div class="ml-6 font-semibold mt-3.5">
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Case Title</p>
                            <p class="text-xs text-left">{{ caseTitle }}</p>
                        </div>
                    </div>
                    <div class="ml-6 font-semibold mt-3.5">
                        <div class="mt-3.5 mr-[3rem]">
                            <p class="font-thin text-xs text-gray-600 text-left">Case Description</p>
                            <p class="text-xs text-left break-word"> {{ caseDesc }}</p>
                        </div>
                    </div>
                    <div class="flex ml-6 font-semibold mt-3">
                        <div class="mt-3.5 mr-[3rem]">
                            <p class="font-thin text-xs text-gray-600 text-left">Case Status</p>
                            <span v-if="caseStatus == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-md">Docket Case</span>
                            <span v-if="caseStatus == 1 && reOpenedCount -1 == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">New Case</span>
                            <span v-if="caseStatus == 1 && reOpenedCount -1 > 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Reopened Case</span>
                        </div>
                        <div v-if="caseStatus == 1 && reOpenedCount == proceedingData.length" class="mt-3.5 ml-5">
                            <button @click="showTransferDialog = true" type="button" class="inline-block px-5 py-2.5 mr-3 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0">Transfer Case to Docket</button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>    
    </div>
    <div class="-ml-2 mt-2 relative w-full bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex flex-shrink-0 justify-between mt-4 ml-3 text-sm font-semibold">
                <div :class="reOpenedCount == proceedingData.length ? '' : 'mt-2'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 -mt-1 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <span class="mt-5">Court Decision</span>
                </div>
                <div>
                    <button v-if="caseStatus == 1 && reOpenedCount != proceedingData.length && courtHearings[0].hearing_schedule <= dateNow" @click="showAddProceedingDialog(caseData)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCourtProceeding" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">
                        Add Court Decision
                    </button>
                    <button v-if="caseStatus == 1 && reOpenedCount == proceedingData.length" @click="showUpdateProceedingDialog(proceedingData[0])" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCourtProceeding" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">
                        Update Court Decision
                    </button>
                </div>
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="p-3 flex flex-wrap">
                <div v-if="proceedingData.length == 0" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5 p-2 text-xs font-semibold"> No Case Proceedings or Decision Yet</div>
                  <div v-for="proceeding in proceedingData" :key="proceeding" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5">
                    <div class="space-y-5 mb-3">
                            <div class="flex text-left font-semibold space-x-32 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Case Decision</p>
                                    <p class="text-xs">{{ proceeding.caseDecision.description }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Minimum Sentence</p>
                                    <p class="text-xs">{{ !proceeding.minimum_sentence ? 'N/A' : proceeding.minimum_sentence }} {{ getSentenceDuration(proceeding.minimum_duration)}}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Maximum Sentence</p>
                                    <p class="text-xs">{{ !proceeding.maximum_sentence ? 'N/A' : proceeding.maximum_sentence }} {{ getSentenceDuration(proceeding.maximum_duration)}}</p>
                                </div>
                            </div>
                            <div class="flex text-left font-semibold space-x-32 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Minimum Fines</p>
                                    <p class="text-xs">{{ !proceeding.minimum_fines ? 'N/A' : proceeding.minimum_fines }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Maximum Fines</p>
                                    <p class="text-xs">{{ !proceeding.maximum_fines ? 'N/A' : proceeding.maximum_fines }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Last Court Action</p>
                                    <p class="text-xs">{{ formatDate(proceeding.last_court_action) }}</p>
                                </div>
                            </div>
                            <div class="ml-4 font-semibold mt-3.5">
                                    <div>
                                        <p class="font-thin text-xs text-gray-600 text-left">Remarks</p>
                                        <p class="text-xs text-left">{{ proceeding.remarks }}</p>
                                    </div>
                                </div>
                        </div>
                  </div>
            </div>
        </div>
      </div>
      <div class="flex">
    <div class="-ml-2 mr-2 mt-2 relative w-1/2 bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
               </svg>
               Court Hearings
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="p-3 flex flex-wrap">
                  <div v-for="hearing in courtHearings" :key="hearing" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5">
                    <div class="space-y-8 mb-3">
                            <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Type of Hearing</p>
                                    <p class="text-xs">{{ hearing.hearingType.description }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Hearing Schedule</p>
                                    <p class="text-xs">{{ formatDate(hearing.hearing_schedule) }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Time Start & End</p>
                                    <p class="text-xs">{{ formatTime(hearing.start_time) + " - " + formatTime(hearing.end_time) }}</p>
                                </div>
                            </div>
                            <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Raffled Court</p>
                                    <p class="text-xs">{{ hearing.raffledCourt.description }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Judge Assigned</p>
                                    <p class="text-xs">{{ hearing.judgeAssigned.name }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Status</p>
                                    <span v-if="hearing.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Pending</span>
                                    <span v-if="hearing.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-700 rounded-md">Cancelled</span>
                                    <span v-if="hearing.status == 2" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Completed</span>
                                </div>
                            </div>
                            <div class="ml-4 font-semibold mt-3.5">
                                    <div>
                                        <p class="font-thin text-xs text-gray-600 text-left">Remarks</p>
                                        <p class="text-xs text-left">{{ hearing.remarks == "" ? 'No remarks as of now': hearing.remarks }}</p>
                                    </div>
                                </div>
                        </div>
                  </div>
            </div>
        </div>
      </div>
      <div class="mt-2 mr-2 relative w-1/2 bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
               </svg>
               Document Emailed & Served
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="p-3 flex flex-wrap">
                <div v-if="documentServedData.length == 0" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5 p-2 text-xs font-semibold"> No Documents Found</div>
                  <div v-for="document in documentServedData" :key="document" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5">
                    <div class="space-y-8 mb-3">
                            <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Document Type</p>
                                    <p class="text-xs">{{ document.documentType.description }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Proccessing Office</p>
                                    <p class="text-xs">{{ document.office.description }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Status</p>
                                    <p class="text-xs">
                                        <span v-if="document.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Acknowledge - {{ formatDate(document.acknowledge_date) }}</span>
                                        <span v-if="document.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-600 rounded-md">Pending</span>
                                        <span v-if="document.status == null" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-600 rounded-md">Waiting to Send</span>
                                    </p>
                                </div>
                            </div>
                            <div class="flex text-left font-semibold space-x-14 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Date Recieved</p>
                                    <p class="text-xs">{{ document.sended_date == null ? 'N/A' : formatDate(document.sended_date) }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Sender</p>
                                    <p class="text-xs">{{ document.sender }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Receiver</p>
                                    <p class="text-xs">{{ document.reciever }}</p>
                                </div>
                            </div>
                            <div class="ml-4 font-semibold mt-3.5">
                                    <div>
                                        <p class="font-thin text-xs text-gray-600 text-left">Remarks</p>
                                        <p class="text-xs text-left">{{ document.remarks }}</p>
                                    </div>
                                </div>
                        </div>
                  </div>
            </div>
        </div>
      </div>
     </div>
     <div class="-ml-2 mt-2 relative w-full bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                </svg>
               Custodies
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="p-3 flex flex-wrap">
                <div v-if="custodiesData.length == 0" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5 p-2 text-xs font-semibold"> No Custodies Found</div>
                  <div v-for="custodies in custodiesData" :key="custodies" class="bg-gray-100 shadow-lg rounded-lg w-full mb-3.5 hover:bg-gray-200">
                    <div class="space-y-5 mb-3">
                            <div class="flex text-left font-semibold space-x-32 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Detainee Name</p>
                                    <p class="text-xs">
                                        {{ custodies.lname }}, {{ custodies.fname }} {{ !custodies.mname ? '' : custodies.mname[0] }} {{ custodies.suffix }}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Height</p>
                                    <p class="text-xs">
                                        {{ custodies.height }}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Weight</p>
                                    <p class="text-xs">
                                        {{ custodies.weight }}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Birthdate</p>
                                    <p class="text-xs">
                                        {{ formatDate(custodies.birth_date) }}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Blood Type</p>
                                    <p class="text-xs">
                                        {{ custodies.blood_type }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex text-left font-semibold space-x-32 mt-3 ml-4">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Address</p>
                                    <p class="text-xs text-left">
                                        {{ custodies.address }}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Latest Transfer Status</p>
                                    <p class="text-xs">
                                        <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 0 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">PNP - {{ formatDate(custodies.pnp_status_date) }}</span>
                                        <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 1 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-200 text-blue-600 rounded-md">BJMP - {{ formatDate(custodies.bjmp_status_date) }}</span>
                                        <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 1 && custodies.bucor_status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">BuCor - {{ formatDate(custodies.bucor_status_date) }}</span>
                                        <span v-if="custodies.pnp_status == 0 && custodies.bjmp_status == 0 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-600 rounded-md">No Transfer History</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
      </div>
     <div>
        <CourtProceedingDialog
        ref="CourtProceedingDialog"
        v-on:refresh="initView(caseId)"
        />
        </div>
      <div v-show="showTransferDialog" tabindex="-1" aria-hidden="false" class="checkFade animated  modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md mx-auto top-48 h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="pb-6 text-center">
                            <div class="p-6 mb-2 font-semibold">Do you really want to transfer this case to docket ?</div>
                        <div>
                            <button @click="showTransferDialog = false" type="button" class="inline-block px-6 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                            <button @click="AddDocketCase()" type="button" class="inline-block px-6 py-2.5 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase rounded hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Confirm</button>
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
import CourtProceedingDialog from '../Modals/CourtProceedingDialog.vue';

export default {
    components: {
        CourtProceedingDialog
    },
    data(){
        return{
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            showTransferDialog: false,

            //Case Details
            caseData: [],
            caseId: null,
            caseNumber: "1",
            caseType: "",
            caseTitle: "",
            caseDesc: "",
            caseStatus: null,
            reOpenedCount: null,
            courtHearings: [],
            recievedDate: "",
            dateNow: moment(new Date()).format('YYYY-MM-DD'),

            caseDecisionData: [],
            proceedingData: [],
            documentServedData: [],
            custodiesData: [],
        }
    },
    methods: {
        initView(id){
            this.isSubmitting = false
            axios.get(this.$store.state.serverUrl + '/cases/getProceedings/' + id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseId = res.data.id
                this.caseData = res.data
                this.caseNumber = res.data.case_no
                this.caseType = res.data.caseType.description
                this.recievedDate = res.data.date_recieved
                this.caseTitle = res.data.case_title
                this.caseDesc = res.data.case_description
                this.caseStatus = res.data.caseStatus
                this.reOpenedCount = res.data.reopenCount + 1
                this.courtHearings = res.data.courtHearings

                axios.get(this.$store.state.serverUrl + '/case-decision/findAllCaseDecisionByCaseType/' + this.caseData.caseType.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((decision)=>{
                     this.caseDecisionData = decision.data
                });

                axios.get(this.$store.state.serverUrl + '/proceedings/' + this.caseId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((proceeding)=>{
                    this.proceedingData = proceeding.data
                });

                axios.get(this.$store.state.serverUrl + '/documents/findOneByCaseId/' + this.caseId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((documents)=>{
                    this.documentServedData = documents.data
                });

                axios.get(this.$store.state.serverUrl + '/custodies/findAllCustodyById/' + this.caseId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((custody)=>{
                    this.custodiesData = custody.data
                    console.log(this.custodiesData)
                });
            });
        },
        showAddProceedingDialog(data){
            this.$refs.CourtProceedingDialog.initializeAdd(data)
        },
        showUpdateProceedingDialog(data){
            this.$refs.CourtProceedingDialog.initializeUpdate(data)
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
        AddDocketCase(){
            let formData = {
                caseId: this.caseId
            }
            axios.post(this.$store.state.serverUrl + '/cases/updateCaseStatusToFalse', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                if(res){
                    const toast = useToast();
                    toast.success("Transfered to Docket Case", {
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    showCloseButtonOnHover: true,
                    });
                    this.showTransferDialog = false,
                    this.initView(this.caseId)
                    this.init()
                }
            });
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        formatTime(time){
            return moment(time,'h:mm a').format('h:mm a');
        }
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