<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCaseList" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-10 max-w-[30rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">{{ title }}</h5>
                         </div>
                          <button type="button" class="p-2" id="close-btn" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                <div class="modal-body rounded-md relative">
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Case No</div>
                    <div><input 
                        v-model="caseNumber"
                        @keyup="watchCaseNo()"
                        :class="{ invalid: isSubmitting && !caseNumber.trim() }"
                        type="text"
                        class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                    </div>
                    <span v-if="validCaseNo == false" class="text-red-500 text-xs font-extralight"><p class="mt-1">Duplicate Case No. Found</p></span>
                    <span v-if="validCaseNo == true" class="text-green-500 text-xs font-extralight"><p class="mt-1">Valid Case No.</p></span>
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
                        <div class="w-1/2 text-left ml-6 text-[13px] text-gray-800 font-bold">Date Filled</div>
                        <div class=" w-1/2 text-left ml-2 text-[13px] text-gray-800 font-bold">Date Raffled</div>
                    </div>
                    <div class="flex justify-between">
                        <div><input 
                            v-model="recievedDate" 
                            :class="{ invalid: isSubmitting && recievedDate == '' }"
                            type="date"
                            class="ml-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>
                        <div><input 
                            v-model="raffleDate" 
                            :class="{ invalid: isSubmitting && recievedDate == '' }"
                            type="date"
                            class="mr-5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border- focus:ring-[#BF40BF]"/>
                        </div>

                    </div>
                    <div class="text-left ml-6 mt-4 text-[13px] text-gray-800 font-bold">Case Type</div>
                    <div>
                        <select :disabled="toggleUpdate == false && action == 'update'" v-model="caseType" @change="getCaseTag()" :class="{ invalid: isSubmitting && caseType == '' }" class="ml-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                            <option disabled value="">Select case type</option>
                            <option v-for="casetypes in caseTypeData" :key="casetypes" :value="casetypes.id"> {{ casetypes.description }}</option>
                        </select>
                        <div v-if="toggleUpdate == false && action == 'update'" class="font-medium text-left text-xs text-gray-600 ml-6 mt-1.5">
                            Change case type and tags ? 
                            <button @click="changeTags()" class="text-[#BF40BF] mr-2 underline">Yes</button>
                        </div>
                    </div>
                    <div v-if="action == 'add' ? toggleUpdate == false : toggleUpdate == true">
                    <div class="text-left ml-6 mt-3 text-[13px] text-gray-800 font-bold">Case Tag</div>
                    <div>
                        <Multiselect
                        class="ml-5 mr-5 w-[92%] text-sm rounded-lg bg-gray-200 border-0 shadow-lg multiselect-green"
                        :classes="{container: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-lg bg-white text-xs leading-snug outline-none',
                        containerDisabled: 'cursor-default bg-gray-100',
                        containerOpen: 'rounded-b-none',
                        containerOpenTop: 'rounded-t-none',
                        containerActive: 'ring-0 ring-green-500 ring-opacity-30',
                        singleLabel: 'flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5',
                        singleLabelText: 'overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full',
                        multipleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5',
                        search: 'w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5',
                        tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 rtl:pl-0 rtl:pr-2',
                        tag: 'bg-[#BF40BF] text-white text-xs font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1',
                        tagDisabled: 'pr-2 opacity-50 rtl:pl-2',
                        tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
                        tagsSearch: 'absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-xs font-sans box-border w-full bg-gray-200',
                        tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
                        placeholder: 'flex items-center h-full absolute text-xs left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5',
                        clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 rtl:pr-0 rtl:pl-3.5',
                        clearIcon: 'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
                        spinner: 'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0 rtl:mr-0 rtl:ml-3.5',
                        inifite: 'flex items-center justify-center w-full',
                        inifiteSpinner: 'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 animate-spin flex-shrink-0 flex-grow-0 m-3.5',
                        dropdown: 'max-h-60 absolute bg-gray-200 -left-px -right-px bottom-0 transform translate-y-full border-1 ring-[0.5px] ring-gray-900 border-gray-900 -mt-px overflow-y-auto z-50 bg-white flex flex-col rounded-b',
                        dropdownTop: '-translate-y-full top-px bottom-auto rounded-b-none rounded-t',
                        dropdownHidden: 'hidden',
                        options: 'flex flex-col p-0 m-0 list-none',
                        optionsTop: '',
                        group: 'p-0 m-0',
                        groupLabel: 'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
                        groupLabelPointable: 'cursor-pointer',
                        groupLabelPointed: 'bg-gray-300 text-gray-700',
                        groupLabelSelected: 'bg-green-600 text-white',
                        groupLabelDisabled: 'bg-gray-100 text-gray-300 cursor-not-allowed',
                        groupLabelSelectedPointed: 'bg-green-600 text-white opacity-90',
                        groupLabelSelectedDisabled: 'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
                        groupOptions: 'p-0 m-0',
                        option: 'flex items-center justify-start box-border text-left cursor-pointer text-xs leading-snug py-2 px-3',
                        optionPointed: 'text-gray-800 bg-gray-300',
                        optionSelected: 'text-white bg-green-500',
                        optionDisabled: 'text-gray-300 cursor-not-allowed',
                        optionSelectedPointed: 'text-white bg-green-500 opacity-90',
                        optionSelectedDisabled: 'text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed',
                        noOptions: 'py-2 px-3 text-gray-600 bg-gray-200 text-xs text-left',
                        noResults: 'py-2 px-3 text-gray-600 bg-gray-200 text-xs text-left',
                        fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
                        spacer: 'h-9 py-px box-content',}"
                        v-model="value"
                        :options="option"
                        mode="tags"
                        placeholder="Add case tags"
                        @select="getChecklist()"
                        @deselect="getChecklist()"
                        :close-on-select="true"
                        :searchable="true"
                        :canClear="false"
                        label="label"
                        />
                    </div>
                    </div>
                    <div v-if="value.length > 0">
                        <div class="text-left ml-6 mt-4 text-[13px] text-gray-800 font-bold">Case Tag & Checklist</div>
                        <div v-for="check in checklistData" :key="check" class="ml-3 mt-2">
                            <div class="text-left ml-3.5 mt-1 mb-1 text-[13px] text-gray-800 font-bold underline">{{ check.label }}</div>
                            <label v-for="list in check.checklist" :key="list" class="flex p-2.5 mx-5 ml-1 mt-1.5 rounded-lg bg-gray-200">
                            <input :disabled="toggleUpdate == false && action == 'update'" v-model="checklist" @click="setChecklist(list)" :value="list.id" type="checkbox" class="text-[#BF40BF] focus:ring-0 rounded w-3.5 h-3.5">
                            <p class="text-xs text-left ml-1.5 font-sans text-gray-900">{{ list.description }}</p> 
                            </label>
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
import Multiselect from '@vueform/multiselect'

export default {
    components: {
      Multiselect,
    },
    data(){
        return {
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            action: null,
            title: null,
            toggleUpdate: false,
            validCaseNo: Boolean,

            //form datas
            caseId: null,
            caseNumber: "",
            caseType: "",
            caseTitle: "",
            caseDesc: "",
            recievedDate: "",
            raffleDate: "",
            point_x: null,
            point_y: null,
            level: null,

            pointXData: [],
            pointYData: [],

            value: [],
            checklist: [],
            option: [],
            checkCaseNo: null,

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
        getCaseTag(){
            this.option = []
            this.value = []
            axios.get(this.$store.state.serverUrl + '/case-tags/findAllTagsByCaseType/' + this.caseType, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                for (let i = 0; i < res.data.length; i++) {
                    let obj = {
                        value: null,
                        label: null
                    }
                    obj.value = res.data[i].id
                    obj.label = res.data[i].description
                    this.option.push(obj)
                }
            });
        },
        getChecklist(){
            if(this.value.length > 0){
                this.checklistData = []
                for (let i = 0; i < this.value.length; i++) {
                    axios.get(this.$store.state.serverUrl + '/case-checklist/findAllActiveChecklistByCaseTag/' + this.value[i], {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
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
        },
        setChecklist(data){

            if(this.checklist.includes(data.id)){
              for( var i = 0; i < this.checklist.length; i++){                
                if ( this.checklist[i] === data.id) { 
                    this.checklist.splice(i,1) 
                    this.pointXData.splice(i, 1)
                    this.pointYData.splice(i, 1)
                    i--; 
                }
              }
            }
            else{
              this.checklist.push(data.id)
              this.pointXData.push(data.minPenalty)
              this.pointYData.push(data.maxPenalty)
            }
            
            let highX = this.pointXData.length > 0 ? Math.max(...this.pointXData) : 0;
            let highY = this.pointYData.length > 0 ? Math.max(...this.pointYData) : 0;

            let epsilon = 1

            if(highX >= 30 && highY >= 40){
                 epsilon = 3
            }
            else if( highX >= 20 && highY >= 30 ){
                epsilon = 2.5
            }
            else if( highX >= 12 && highY >= 20 ){
                epsilon = 2
            }
            else if( highX >= 6 && highY >= 12 ){
                epsilon = 1.5
            }
            else if(highX >= 1 && highY >= 6 ){
                epsilon = 1
            }
            else if(highX >= 0 && highY >= 1 ){
                epsilon = 0.7
            }

            this.point_x = highX + Math.random() * epsilon
            this.point_y = highY + Math.random() * epsilon

            if(this.point_x > 30){
                this.level = 6
            }
            else if(this.point_x > 20){
                this.level = 5
            }
            else if(this.point_x > 12){
                this.level = 4
            }
            else if(this.point_x > 6){
                this.level = 3
            }
            else if(this.point_x > 1){
                this.level = 2
            }
            else if(this.point_x > 0){
                this.level = 1
            }
        },
        getOptionLabel(option) {
            // Find the option with the matching ID
            const match = this.option.find(o => o.id === option)
            return match ? match.label : ''
        },
        changeTags(){
            this.toggleUpdate = true
            this.value = []
            this.checklist = []
            this.option = []
            this.caseType = ""
            this.pointXData = []
            this.pointYData = []
            this.level = null
        },
        initializeAdd(){
            this.toggleUpdate = false
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add New Case Record"
            this.validCaseNo = Boolean
            this.caseNumber = ""
            this.caseType = "",
            this.caseTitle = "",
            this.caseDesc = "",
            this.point_x = null
            this.point_y = null
            this.pointXData = []
            this.pointYData = []
            this.recievedDate =  moment(new Date()).format('YYYY-MM-DD');
            this.raffleDate = moment(new Date()).format('YYYY-MM-DD')
            this.value = []
            this.checklist = []
            this.option = []
            this.level = null
        },
        initializeUpdate(data){
            this.toggleUpdate = false
            this.isSubmitting = false
            this.validCaseNo = Boolean
            this.action = "update"
            this.title = "Update Case Record"
            this.caseId = data.id
            this.point_x = data.point_x
            this.point_y = data.point_y
            this.caseNumber = data.case_no
            this.checkCaseNo = data.case_no
            this.caseType = data.caseType.id
            this.getCaseTag()
            this.caseTitle = data.case_title
            this.caseDesc = data.case_description
            this.recievedDate = data.date_recieved
            this.raffleDate = data.raffle_date  
            this.value = JSON.parse(data.case_tag)
            this.getChecklist()
            this.checklist = JSON.parse(data.case_checklist)
            this.level = data.level
        },
        watchCaseNo(){
            if(this.caseNumber.trim()){
                axios.get(this.$store.state.serverUrl + '/cases/findCasesWithSameCaseNo/' + this.caseNumber, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                    if(res){
                        if(res.data.length > 0 && this.action == 'add'){
                            this.validCaseNo = false
                        }
                        else if (res.data.length > 0 && this.action == 'update'){
                            if(this.checkCaseNo == this.caseNumber){
                                this.validCaseNo = Boolean
                            }
                            else{
                                this.validCaseNo = false
                            }
                        }
                        else{
                            this.validCaseNo = true
                        }
                    } 
                });
            }
            else{
                this.validCaseNo = Boolean
            }
       },
        checkForm(){
            this.isSubmitting = true
            const formValid = [ this.caseNumber,this.caseTitle, this.caseDesc]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid && this.caseType && this.value.length > 0 && this.validCaseNo){
                let formData = {
                    case_id: this.caseId,
                    case_no: this.caseNumber,
                    case_title: this.caseTitle,
                    case_description: this.caseDesc,
                    date_recieved: this.recievedDate,
                    raffle_date: this.raffleDate,
                    case_type: this.caseType,
                    point_x: this.point_x,
                    point_y: this.point_y,
                    level: this.level,
                    case_tag: JSON.stringify(this.value),
                    case_checklist: JSON.stringify(this.checklist)
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/cases', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Case Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/cases/update', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Case Succesfully Updated", {
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
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
     .invalid {
         border-width: 1px;
         border-color: red;
    }
    .multiselect-green {
     --ms-border-width-active: 0px;
    }
</style>