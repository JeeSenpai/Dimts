<template>
    <div>
        <div class="modal fade fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden hidden w-full h-full outline-none" id="staticBackdropCitizenDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div  class="modal-dialog relative top-16 max-w-[40rem] pointer-events-none">
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
                    <div class="flex ml-10">
                        <div class="space-y-6">
                            <div class="flex text-left font-semibold space-x-16 mt-8">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">First Name</p>
                                    <p class="text-sm">{{ fname }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Middle Name</p>
                                    <p class="text-sm">{{ mname }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Last Name</p>
                                    <p class="text-sm">{{ lname }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Username</p>
                                    <p class="text-sm">{{ username }}</p>
                                </div>
                            </div>
                            <div class="flex text-left font-semibold space-x-16 mt-8">
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Age</p>
                                    <p class="text-sm">{{ age }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Contact No.</p>
                                    <p class="text-sm">{{ contact_no }}</p>
                                </div>
                                <div>
                                    <p class="font-thin text-xs text-gray-600 text-left">Email</p>
                                    <p class="text-sm">{{ email }}</p>
                                </div>
                            </div>
                            <div class="font-semibold mt-3.5">
                                <div class="mt-3.5 mr-[3rem]">
                                    <p class="font-thin text-xs text-gray-600 text-left">Address</p>
                                    <p class="text-sm text-left break-word">{{ address }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-6 border-t border-gray-200 rounded-b-md">
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
            token: localStorage.getItem("access_token"),
            isSubmitting: false,
            action: null,
            title: null,
            subTitle: null,

            //form datas
            fname: "",
            mname: null,
            lname: null,
            age: null,
            contact_no: null,
            address: null,
            email: null,
            username: null,
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/case-type', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseTypeData = res.data
            });
        },
        initializeView(data){
            this.title = "Citizen Details"
            this.subTitle = "View citizen details"
            this.fname = data.fname
            this.mname = data.mname
            this.lname = data.lname
            this.age = data.age
            this.contact_no = data.contact_no
            this.address = data.address
            this.email = data.email
            this.username = data.username
        },
        viewProceedings(data){
            const routeData = this.$router.resolve({path: '/admin/proceedings', query: { id: data.id } });
            window.open(routeData.href, '_blank');
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
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