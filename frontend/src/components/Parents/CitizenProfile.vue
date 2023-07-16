<template>
    <div class="checkFade animated overflow-y-auto">
        <div class="pl-2 pr-2 pb-2">
            <div class="bg-white shadow-lg rounded-lg w-full mt-3.5">
                <div class="space-y-5 px-4 py-4">
                    <div class="text-sm font-semibold">Basic Information</div>

                    <div class="relative mt-2">
                        <input v-model="fname" :class="{ invalid: isSubmitting && !fname.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First Name</label>
                    </div>
                    <div class="relative mt-6">
                        <input v-model="mname" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Middle Name</label>
                    </div>
                    <div class="relative mt-6">
                        <input v-model="lname" :class="{ invalid: isSubmitting && !lname.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last Name</label>
                    </div>
                    <div class="relative mt-6">
                        <input v-model="age" :class="{ invalid: isSubmitting && !age.toString().trim() }" type="number" id="floating_outlined" class="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Age</label>
                    </div>
                    <div class="relative mt-6">
                        <input v-model="contact_no" :class="{ invalid: isSubmitting && !contact_no.toString().trim() }" type="number" id="floating_outlined" class="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Contact Number</label>
                    </div>
                    <div class="relative mt-6">
                        <input v-model="address" :class="{ invalid: isSubmitting && !address.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                    </div>
                    <div class="relative mt-6">
                        <input v-model="email" :class="{ invalid: isSubmitting && !email.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                    </div>

                    <div class="mt-8">
                        <button @click="checkForm()" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Update</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4 w-full border-t-2 mt-2 border-gray-500"/>

        <div class="pl-2 pr-2 pb-2">
            <div class="bg-white shadow-lg rounded-lg w-full mt-3.5">
                <div class="px-4 py-4">
                    <div>
                        <button @click="showLogoutDialog = true" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-red-600 bg-transparent border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showLogoutDialog" tabindex="-1" aria-hidden="false" class="checkFade animated  modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md mx-auto top-48 h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="pb-6 text-center">
                            <div class="p-6 mb-2 font-semibold">Do you really want to logout this account ?</div>
                        <div>
                            <button @click="showLogoutDialog = false" type="button" class="inline-block px-6 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                            <button @click="logout()" type="button" class="inline-block px-6 py-2.5 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase rounded hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                token: localStorage.getItem('dimts_token'),
                isSubmitting: false,
                showLogoutDialog: false,

                fname: "",
                mname: "",
                lname: "",
                age: "",
                contact_no: "",
                address: "",
                email: "",
            }
        },
        methods: {
            initialize(){
                axios.get( this.$store.state.serverUrl + '/citizen/' + this.$store.state.user.id , {headers: {Authorization: `Bearer  ${this.token}`}}).then((result)=>{
                      if(result){
                          this.fname = result.data.fname
                          this.mname = result.data.mname
                          this.lname = result.data.lname
                          this.age = result.data.age
                          this.contact_no = result.data.contact_no
                          this.address = result.data.address
                          this.email = result.data.email

                      }
              });
            },
            checkForm(){
                this.isSubmitting = true
                const formValid = [this.fname, this.lname, this.age.toString(), this.contact_no.toString(), this.address, this.email]
                .map((x) => x.trim())
                .every(Boolean);

                if(formValid){
                    let formData = {
                        citizenId: this.$store.state.user.id,
                        fname: this.fname,
                        mname: this.mname,
                        lname: this.lname,
                        age: this.age,
                        contact_no: this.contact_no,
                        address: this.address,
                        email: this.email
                    }
                    axios.post( this.$store.state.serverUrl + '/citizen/updateCitizenByCitizen', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((result)=>{
                      if(result){
                        window.location.reload()
                      }
                    });
                }
            },
            logout(){
                localStorage.removeItem("vuex");
                localStorage.removeItem("dimts_token");
                window.location.reload()
            }
        },
        mounted(){
            this.initialize()
        }
    }
</script>

<style scoped>
     .button-submit{
            background: #c341af;
            
    }

    :hover.button-submit{
            background: #c341b0e9;
    }
    .invalid {
            border-color: red;
    }
    .modal{
        background-color: rgba(0,0,0,0.5);
    }
</style>