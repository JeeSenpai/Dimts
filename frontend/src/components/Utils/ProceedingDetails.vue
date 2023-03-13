<template>
    <div class="checkFade animated">
       <div class="flex -ml-2 bg-white w-full rounded-lg shadow-lg p-3.5"> 
        <div>
            <vue-qrcode :value="caseNumber" :options="{ width: 310 }" class="rounded-lg shadow-lg"></vue-qrcode>
        </div>
        <div class="space-y-5">
            <div class="flex text-left font-semibold space-x-24 mt-3 ml-6">
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
            <div>
            <div class="flex text-left font-semibold space-x-8 mt-6 ml-6">
                <div>
                    <p class="font-thin text-xs text-gray-600 text-left">Case Decision</p>
                    <select v-model="caseDecision" :class="{ invalid: isSubmitting && caseDecision == '' }" class="px-1.5 py-2 w-[10rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                        <option disabled value="">Select case decision</option>
                    </select>
                </div>
                <div>
                    <p class="font-thin text-xs text-gray-600 text-left">Minimum Sentence</p>
                    <input 
                        v-model="minimumSentence" 
                        :class="{ invalid: isSubmitting && !mi.trim() }"
                        type="text"
                        class="px-1.5 py-2 w-[10rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                </div>
                <div>
                    <p class="font-thin text-xs text-gray-600 text-left">Maximum Sentence</p>
                    <input 
                        v-model="maximumSentence" 
                        :class="{ invalid: isSubmitting && !maximumSentence.trim() }"
                        type="text"
                        class="px-1.5 py-2 w-[10rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                </div>
                    <div>
                        <p class="font-thin text-xs text-gray-600 text-left">Duration</p>
                        <select v-model="sentenceDuration" :class="{ invalid: isSubmitting && sentenceDuration == '' }" class="px-1.5 py-2 w-[10rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                            <option disabled value="">Select duration</option>
                            <option value="1">Days</option>
                            <option value="2">Months</option>
                            <option value="3">Years</option>
                        </select>
                    </div>
                </div>
                <div class="flex text-left font-semibold  mt-3 ml-6">
                    <div class="mt-3.5 mr-[3rem]">
                        <p class="font-thin text-xs text-gray-600 text-left">Remarks</p>
                        <textarea
                            v-model="remarks" 
                            :class="{ invalid: isSubmitting && !remarks.trim() }"
                            type="text"
                            class="px-1.5 py-1.5 w-[22rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>
                    <div class="mt-[2.5rem] ml-12">
                        <div>
                        <button type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Update</button>
                        <button type="button" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0">Transfer to Docket</button>
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
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
               </svg>
               Court Proceedings
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="p-3 flex flex-row h-60">
                  
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            token: localStorage.getItem("access_token"),
            isSubmitting: false,

            //Case Details
            caseId: null,
            caseNumber: "1",
            caseType: "",
            caseTitle: "",
            caseDesc: "",
            courtHearings: "",
            recievedDate: "",

            //Case Proceedings
            caseDecision: "",
            minimumSentence: "",
            maximumSentence: "",
            sentenceDuration: "",
            minimumFines: "",
            maximumFines: "",
            finesEquivalent: "",
            remarks: "",
        }
    },
    methods: {
        initView(id){
            axios.get(this.$store.state.serverUrl + '/cases/getProceedings/' + id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                console.log(res.data)
                this.caseNumber = res.data.case_no
                this.caseType = res.data.caseType.description
                this.recievedDate = res.data.date_recieved
                this.caseTitle = res.data.case_title
                this.caseDesc = res.data.case_description
            });
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
    },
}
</script>