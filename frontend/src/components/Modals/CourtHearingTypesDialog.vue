<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropHearingType" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-16 max-w-[30rem] pointer-events-none">
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
                    <div class="text-left ml-6 mt-3.5">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input v-model="status" type="checkbox" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-[#BF40BF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#BF40BF]"></div>
                            <span class="ml-3 text-[13px] text-gray-800 font-bold">Active Status</span>
                        </label>
                    </div>
                    <div class="text-left ml-6 mt-3.5 text-[13px] text-gray-800 font-bold">Description</div>
                    <div><input 
                        v-model="description" 
                        :class="{ invalid: isSubmitting && !description.trim() }"
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
import { useToast } from "vue-toastification"

export default {
    data(){
        return {
            token: localStorage.getItem("access_token"),
            isSubmitting: false,
            action: null,
            title: null,

            //form datas
            hearingTypeId: null,
            description: "",
            status: true,

            //query datas

        }
    },
    methods: {
        // init(){
        //     axios.get(this.$store.state.serverUrl + '/case-type', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
        //         this.caseTypeData = res.data
        //     });
        // },
        initializeAdd(){
            this.isSubmitting = false
            this.action = "add"
            this.title = "Add New Court Hearing Type"
            this.hearingTypeId = null
            this.description = "",
            this.status = true
        },
        initializeUpdate(data){
            this.isSubmitting = false
            this.action = "update"
            this.title = "Update Court Hearing Type"
            this.hearingTypeId = data.id
            this.description = data.description
            this.status = data.status
        },
        checkForm(){
            this.isSubmitting = true
            const formValid = [this.description]
            .map((x) => x.trim())
            .every(Boolean);

            if(formValid){
                let formData = {
                    hearingTypeId: this.hearingTypeId,
                    description: this.description,
                    status: this.status
                } 
                if(this.action == "add"){
                    axios.post(this.$store.state.serverUrl + '/hearing-types', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Hearing Type Succesfully Saved", {
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                            });
                        }
                    });
                }
                else if(this.action == "update"){
                    axios.post(this.$store.state.serverUrl + '/hearing-types/update', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                        if(res){
                            this.$emit('refresh')
                            document.getElementById('close-btn').click();

                            const toast = useToast();
                            toast.success("Hearing Type Succesfully Updated", {
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
}
</script>
<style scoped>
     .invalid {
         border-width: 1px;
         border-color: red;
    }
</style>