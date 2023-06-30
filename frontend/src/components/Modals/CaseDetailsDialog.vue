<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCaseDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-12 max-w-[55rem] pointer-events-none">
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
                    <div class="text-left ml-2">
                        <div class="text-sm font-semibold text-center text-gray-500 border-gray-200">
                            <ul class="flex flex-wrap mb-2">
                                <li v-for="tab in tabs" :key="tab.id">
                                    <button @click="changeTab(tab)" :class="tab.id == comply ? 'text-[#BF40BF] border-[#BF40BF] ': 'hover:text-gray-700 hover:border-gray-400'" class="inline-block p-4 rounded-t-lg border-b-4">{{ tab.description }}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="comply ==1" class="flex">
                        <div>
                            <vue-qrcode :value="caseNoString" :options="{ width: 275 }"></vue-qrcode>
                            <p class="font-thin text-xs text-gray-600 text-center">{{ caseNumber }}</p>
                        </div>
                        <div class="space-y-6">
                            <div class="flex text-left font-semibold space-x-16 mt-8">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Case No.</p>
                                    <p class="text-sm">{{ caseNumber }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Case Type</p>
                                    <p class="text-sm">{{ caseType }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Date Filled</p>
                                    <p class="text-sm">{{ formatDate(recievedDate) }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Date Raffled</p>
                                    <p class="text-sm">{{ !raffleDate ? 'N/A' : formatDate(raffleDate) }}</p>
                                </div>
                            </div>
                            <div class="font-semibold mt-3.5">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Case Title</p>
                                    <p class="text-sm text-left">{{ caseTitle }}</p>
                                </div>
                            </div>
                            <div class="font-semibold mt-3.5">
                                <div class="mt-3.5 mr-[3rem]">
                                    <p class="font-thin text-xs text-gray-600 text-left">Case Description</p>
                                    <p class="text-sm text-left break-word">{{ caseDesc }}</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap text-left font-semibold mt-3.5">
                                <div class="mt-3.5 mr-[3rem]">
                                    <p class="font-thin text-xs text-gray-600 text-left">Case Schedules</p>
                                    <span v-if="courtHearings.length > 0" v-for="ch in courtHearings" :key="ch" class="text-sm inline-block py-1 px-2.5 mr-2 mt-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-200 text-yellow-700 rounded-lg">
                                        {{ ch.hearingType.description }} - {{ formatDate(ch.hearing_schedule) }}
                                    </span>
                                    <span v-else class="text-sm inline-block py-1 px-2.5 mr-2 mt-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-lg">
                                        Waiting for Schedules
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="comply == 2">
                        <div class="font-semibold mt-3.5 ml-6">
                            <div class="mt-3.5 mr-[3rem]">
                                <p class="font-thin text-xs text-gray-600 text-left">Level of Penalty</p>
                                <p class="text-sm text-left">{{ level >= 6 ? 'Reclusion Perpetua (Life Imprisontment)' : 'Level ' + level}}</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            <div v-for="check in checklistData" :key="check" class="ml-3 mt-2">
                                <div class="text-left ml-3.5 mt-1 mb-1 text-[13px] text-gray-800 font-bold underline">{{ check.label }}</div>
                                <label v-for="list in check.checklist" :key="list" class="flex p-2.5 mx-5 ml-1 mt-1.5 rounded-lg bg-gray-200">
                                <input :disabled="true" v-model="checklist" :value="list.id" type="checkbox" class="text-[#BF40BF] focus:ring-0 rounded w-3.5 h-3.5">
                                <p class="text-xs text-left ml-1.5 font-sans text-gray-900">{{ list.description }}</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
                    <button v-if="courtHearings.length > 0" @click="viewProceedings(caseData)" type="button" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">View Case Proceedings</button>
                    <button type="button" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
                </div>
         </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import Proceedings from '../Parents/Proceedings.vue';

export default {
    components: {
        Proceedings
    },
    data(){
        return {
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subTitle: null,

            comply: 1,
            tabs: [
                { id: 1, description: 'Case Details'},
                { id: 2, description: 'Case Tag & Checklist' },
            ],
            tab: { id: 1, description: 'Case Details' },

            //form datas
            caseData: null,
            caseId: null,
            caseNumber: "",
            caseType: "",
            caseTitle: "",
            caseDesc: "",
            courtHearings: "",
            recievedDate: "",
            raffleDate: "",
            level: "",
            checklist: [],

            //convertion
            caseNoString: "1",
            
            //query datas
            caseTypeData: [],
            raffledCourtData: [],
            judgesData: [],
            checklistData: [],
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/case-type', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseTypeData = res.data
            });
        },
        initializeView(data){
            let parseChecklist = JSON.parse(data.case_tag)

            if( parseChecklist.length > 0){
                this.checklistData = []
                for (let i = 0; i < parseChecklist.length; i++) {
                    axios.get(this.$store.state.serverUrl + '/case-checklist/findAllActiveChecklistByCaseTag/' + parseChecklist[i], {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        let obj = {
                            label: null,
                            checklist: []
                        }
                        obj.label = res.data[0].caseTag.isForLife == true ? res.data[0].caseTag.description + ' (Life Imprisonment)'  : res.data[0].caseTag.description,
                        obj.checklist = res.data
                        this.checklistData.push(obj)
                        
                    });
                }
            }
            else{
                this.checklistData = []
            }
            
            this.comply = 1
            this.title = "Case Details"
            this.subTitle = "View case details and proceedings"
            this.caseData = data
            this.caseId = data.id
            this.caseNumber = data.case_no
            this.caseNoString = data.case_no.toString()
            this.caseType = data.caseType.description
            this.caseTitle = data.case_title
            this.caseDesc = data.case_description
            this.recievedDate = data.date_recieved
            this.raffleDate = data.raffle_date
            this.courtHearings = data.courtHearings
            this.level = data.level
            this.checklist = JSON.parse(data.case_checklist)

        },
        viewProceedings(data){
            const routeData = this.$router.resolve({path: '/admin/proceedings', query: { id: data.id } });
            window.open(routeData.href, '_blank');
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        changeTab(data){
            this.tab = data;
            this.comply = data.id
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