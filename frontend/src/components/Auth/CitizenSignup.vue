<template>
    <div>
       <div class="flex flex-col justify-center">
        <div class="w-screen h-screen flex flex-col">
          <div v-if="verifiedForm == false" class="bg-white py-8 h-screen shadow sm:rounded-lg px-8">
                    <label class="mb-1 flex text-left"><p class="font-sans text-lg font-bold mr-2">Register</p><p class="font-sans text-lg">| Create an account</p> </label>
              <div class="mb-4 w-full border-t-4 border-gray-500"/>
    
      <!--Form for Signup-->
      <div v-if="basicForm">
        <div class="space-y-5">
            <div class="text-sm font-semibold">Basic Information</div>

            <div class="relative mt-6">
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
                <input v-model="contact_no" :class="{ invalid: isSubmitting && !contact_no.trim() }" type="text" id="floating_outlined" class="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Contact Number</label>
            </div>

            <div class="relative mt-6">
                <input v-model="address" :class="{ invalid: isSubmitting && !address.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
            </div>

            <div class="relative mt-6">
                <input v-model="email" :class="{ invalid: isSubmitting && !email.trim() }" type="email" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
            </div>
        </div>

        <div class="mt-8">
            <button @click="checkForm1()" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Next</button>
        </div>
      </div>

      <div v-if="securityForm">
        <div class="space-y-5">
            <div class="text-sm font-semibold">Security Information</div>

            <div class="relative mt-6">
                <input v-model="username" :class="{ invalid: isSubmitting && !username.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
            </div>

            <div class="relative mt-6">
                <input v-model="password" :class="{ invalid: isSubmitting && !password.trim() }" type="password" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
            </div>

            <div class="relative mt-6">
                <input v-model="confirm_password" :class="{ invalid: isSubmitting && !confirm_password.trim() }" @keyup="comparePass()" type="password" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm Password</label>
            </div>
            <span v-if="passwordMatched == false" class="font-xs text-left text-xs text-red-700 mt-1.5">Password do not match</span>
            <span v-if="passwordMatched == true" class="font-xs text-left text-xs text-green-700 mt-1.5">Password match</span>

            <div class="relative">
                <div class="text-sm text-left ml-1 text-gray-800 font-semibold">Upload Valid ID</div>
                <input :class="{ invalid: isSubmitting && file.length == 0 }" type="file" @change="onUploadChange()" ref="file" accept=".png,.jpeg,.jpg,.webp" id="floating_outlined" class="block w-full text-xs text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
            </div>

        </div>

        <div class="mt-8">
            <button @click="checkForm2()" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Register</button>
        </div>
    </div>
      
    
    <!--Back to Signin-->
            <div v-if="verifiedForm == false" class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500 text-sm">Already have an account? <a><router-link to="/citizen-login" class="text-blue-700 font-semibold">Sign In</router-link></a></span>
                </div>
              </div>
            </div>
            </div>

            <div v-if="verifiedForm">
                <div class=" flex flex-col justify-center">
                    <div class="w-screen h-screen flex flex-col">
                        <div class="bg-white w-screen h-screen px-4 shadow">
                          <div class="flex">
                            <div class="mt-20">
                                <div class="text-left font-bold text-4xl">You have <div class="text-[#BF40BF] inline">Successfully Registered </div>your account!</div>
                                <div class="text-left font-sm mt-2">You can log in now to the DIMTS app as citizen</div>
                                <div class="mt-8">
                                <router-link to="/citizen-login"><button class=" sm:ml-10 w-3/4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-signup focus:outline-none focus:ring-2 focus:ring-offset-2 ">Sign in</button></router-link>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>

          </div>     
        </div>
    
    <!--If successfully signup this form shows--> 
         
    </div>
        
</template>
    
<script>
import axios from 'axios';
// import { useToast } from "vue-toastification"

export default {
    name: 'Signup',
    
    data(){
        return{
            token: localStorage.getItem('dimts_token'),
            isSubmitting: false,

            fname: "",
            mname: "",
            lname: "",
            age: "",
            contact_no: "",
            address: "",
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            file: [],
            passwordMatched: Boolean,

            basicForm: false,
            securityForm: false,
            verifiedForm: false
        }
    },

    // Calling the OTP function
    mounted(){

    },

    methods:{
       initialize(){
         this.basicForm = true
         this.securityForm = false
         this.verifiedForm = false
       },
       checkForm1(){
        this.isSubmitting = true; 
    
        const formValid = [this.fname, this.lname, this.age.toString(), this.contact_no.toString(), this.address, this.email]
        .map((x) => x.trim())
        .every(Boolean);
        
        if(formValid){
            this.basicForm = false
            this.securityForm = true
            this.isSubmitting = false
        }
       },
       checkForm2(){
        this.isSubmitting = true;

        const formValid = [this.username, this.password, this.confirm_password]
        .map((x) => x.trim())
        .every(Boolean);
        
        if(formValid && this.file.length > 0 && this.passwordMatched){
            

            let formData = new FormData();
            const data = {
                fname: this.fname,
                mname: this.mname,
                lname: this.lname,
                age: this.age.toString(),
                contact_no: this.contact_no.toString(),
                address: this.address,
                email: this.email,
                username: this.username,
                password: this.password,
            }

            formData.append('data', JSON.stringify(data))
            for( var i = 0; i < this.file.length; i++ ){
                    let file = this.file[i];
                    formData.append('files', file);
            }
            
            axios.post( process.env.VUE_APP_BASE_URL  + '/citizen/citizenSignup', formData, {headers: {"Content-Type": "multipart/form-data" , Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                if(res){
                this.securityForm = false
                this.verifiedForm = true
                }
            });
        }
       },
       comparePass(){
          if(this.confirm_password.trim() && this.confirm_password == this.password){
              this.passwordMatched = true
          }
          else{
              this.passwordMatched = false
          }
       },
       onUploadChange() {
            this.file = [...this.$refs.file.files];
        },
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
        .button-signup{
            background: #c341af;   
    }

    :hover.button-submit{
            background: #c341b0e9;
    }

    :hover.button-signup{
            background: #a4a4a4ea;
    }

    .invalid {
            border-color: red;
    }
</style>