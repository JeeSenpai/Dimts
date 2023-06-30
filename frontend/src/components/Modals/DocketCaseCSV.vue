<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropDocketCSV" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-10 max-w-[82rem] pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col max-w-5x1 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                        <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">Upload CSV</h5>
                         </div>
                          <button type="button" class="p-2" id="close-btn-csv" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                        </div>
                        <div class="modal-body rounded-md relative">
                            <div v-if="isValidated == false">
                                <vue-csv-import
                                    v-model="csv"
                                    :fields="{  case_no: {required: true, label: 'Case No.'},
                                                case_title: {required: true, label: 'Case Title'},
                                                case_description: {required: true, label: 'Description'},
                                                caseType: {required: true, label: 'Case Type'},
                                                date_received: {required: true, label: 'Date Filled'},
                                                raffle_date: {required: true, label: 'Raffled Date'}
                                            }"
                                    >   
                                    <vue-csv-input class="flex text-left pr-16 border ml-5 mb-3 mt-5 border-black rounded-lg"></vue-csv-input>
                                    <button @click="validateCSV()" class="mr-3 ml-5 float-left rounded-xl px-2 mb-3.5 py-2 text-sm border font-semibold bg-[#BF40BF] text-white" type="button">
                                        Validate CSV
                                    </button>
                                    
                                    <vue-csv-map :auto-match="true"></vue-csv-map>
                                    <div class="mb-4"></div>
                                </vue-csv-import>
                            </div>
                            <div v-if="isValidated == true" class="rounded-xl">
                                <div class="text-left ml-5">
                                    <button @click="uploadAgain()" class="mr-2 mt-4 rounded-xl px-2 py-1.5 text-sm border font-semibold bg-red-500 text-white" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline w-5 h-5 mr-1 mb-0.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>Upload Again
                                    </button>
                                    <button @click="uploadCsv()" class="bg-[#BF40BF] text-white mr-8 mt-4 rounded-xl px-2 py-1.5 text-sm border font-semibold" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropUploadCSV">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 mr-1 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>Upload CSV
                                    </button>
                                </div>
                            
                                <div class="relative shadow-xl mx-4 my-4 mb-4 rounded-lx">
                                    <table class="w-full text-xs text-left text-gray-700 rounded-lg">
                                        <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                                            <tr>
                                                <th scope="col" class="px-5 py-3 text-left">
                                                    Case No.
                                                </th>
                                                <th scope="col" class="px-5 py-3">
                                                    Case Title
                                                </th>
                                                <th scope="col" class="px-5 py-3">
                                                    Case Description
                                                </th>
                                                <th scope="col" class="px-5 py-3">
                                                    Case Type
                                                </th>
                                                <th scope="col" class="px-5 py-3">
                                                    Date Filled
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-right">
                                                    Date Raffled
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="displayedPaginatedData.length > 0">
                                            <tr v-for="data in displayedPaginatedData" :key="data" class="bg-white border-b text-xs text-center">
                                                <td class="px-5 py-5 text-black text-left">
                                                    {{ data.case_no }}
                                                </td>
                                                <td class="px-5 py-5">
                                                    {{ data.case_title }}
                                                </td>
                                                <td class="px-5 py-5">
                                                    {{ data.case_description }}
                                                </td>
                                                <td class="px-5 py-5">
                                                    {{ data.caseType }}
                                                </td>
                                                <td class="px-5 py-5">
                                                    {{ formatDate(data.date_received) }}
                                                </td>
                                                <td class="px-5 py-4 text-right">
                                                    {{ formatDate(data.raffle_date) }}
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-if="displayedPaginatedData.length == 0">
                                            <tr class="bg-white border-b ">
                                                <td class="px-6 py-4 text-black text-center" colspan="6" >
                                                    No data to load
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                    <div class="flex justify-between bg-white">
                                                        <div class="text-xs mt-3 ml-4 text-gray-700">
                                                            Page <span class="font-base text-gray-900">{{page}}</span> <span v-if="pages.length > 0" class="font-base text-gray-900">of {{pages.length}}</span>
                                                        </div>
                                                        <div class="flex mt-2 mb-2 mr-2 xs:mt-0 ">
                                                            <div> 
                                                                <label class="text-xs mt-1 mr-5">Show &nbsp; <input type="number" v-model="changePerPage" @change="perPage = changePerPage"  step="1" max="30" class="w-12 h-6 px-2 border border-gray-300 text-xs rounded"> files per page</label>
                                                            </div>
                                                            <button type="button" :disabled="page == 1" @click="page--" :class="page == 1 ? 'bg-[#BF40BF] opacity-60' : 'bg-[#BF40BF]'"  class="py-1 px-3 text-sm font-medium text-white rounded-l ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                                                </svg>
                                                            </button>
                                                            <button type="button" @click="page++" :disabled="page >= pages.length" :class="page >= pages.length ? 'bg-[#BF40BF] opacity-60' : 'bg-[#BF40BF]' " class="py-1 px-3 text-sm font-medium text-white  rounded-r border-0 border-l border-gray-700 ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                                                </svg>
                                                        </button>
                                                    </div>
                                            </div> 
                                </div>
                            </div>
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
        computed: {
            displayedPaginatedData() {
                var data =  this.data
                let sortedData = data.sort(function(a, b) {
                    return a.id - b.id;
                });
                return this.paginate(sortedData)
            },
        },
        data(){
            return {
                csv: null,
                data: [],
                isValidated: false,
                isSubmitting: false,

                page: 1,
                perPage: 10,
                pages: [],
                changePerPage: 10,
            }
        },
        methods: {
            validateCSV(){
                if(this.csv != null){
                    for (let i = 1; i< this.csv.length; i++){
                    let obj = {
                        case_no: this.csv[i].case_no,
                        case_title: this.csv[i].case_title,
                        case_description: this.csv[i].case_description,
                        caseType: this.csv[i].caseType,
                        date_received: moment(this.csv[i].date_received, 'MM/DD/YYYY').format('YYYY-MM-DD') ,
                        raffle_date: moment(this.csv[i].raffle_date, 'MM/DD/YYYY').format('YYYY-MM-DD')
                    }
                        this.data.push(obj)
                    }
                    this.isValidated = true
                }
            },
            uploadAgain(){
                this.data = []
                this.csv = null
                this.isValidated = false
            },
            uploadCsv(){
                axios.post(this.$store.state.serverUrl + '/cases/uploadCSV', this.data ,{headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                    if(res.data.status = 201){
                        
                        this.$emit('refresh')
                        this.csv = null
                        this.isValidated = false
                        document.getElementById('close-btn-csv').click();

                        const toast = useToast();
                        toast.success("Upload CSV Succesfully", {
                        timeout: 2000,
                        closeOnClick: true,
                        pauseOnHover: false,
                        showCloseButtonOnHover: true,
                        });
                    }
                });
            },
            paginate(data) {
                let page = this.page;
                let perPage = this.perPage;
                let from = page * perPage - perPage;
                let to = page * perPage;
                return data.slice(from, to);
            },
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            },
        }
        
    }
</script>
<style scoped>
    .modal{
    background-color: rgba(0,0,0,0.5);
    }
</style>