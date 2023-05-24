<template>
    <div class="toggleRouter animated ">
      <div class="flex flex-col">
          <div class="relative minwidth mx-2 h-1/2 justify-center bg-white shadow-md sm:rounded-md">
                <div class="w-full">
                    <div class="p-4">
                      <div class="flex flex-row justify-between">
                            <h1 class="text-lg text-left font-semibold ml-2">General Information</h1>
                      </div>
                        <div class="mt-3 flex flex-wrap mx-2 border-t-2 border-gray-400"/>
                        <div class="tab-content" id="tabs-tabContent">
                            <div class="tab-pane fade show active" id="tabs-personal" role="tabpanel" aria-labelledby="tabs-personal-tab">
                                <div class="flex flex-row justify-start mt-6">
                                  <div class="flex-col ml-5 px-5">
                                      <h1 class="text-left text-sm">First name</h1>
                                      <input v-model="basicInfo.fname" :disabled="enableBasic" :class="{ invalid: isSubmitting && !basicInfo.fname.trim() }" type="text" id="fname" name="fname" class="text-sm border bg-gray-200 shadow rounded-lg px-2 py-2 focus:ring-green-600 focus:border-green-600" placeholder="First name">
                                  </div>
                                  <div class="flex-col px-5">
                                      <h1 class="text-left text-sm">Middle name</h1>
                                      <input v-model="basicInfo.mname" :disabled="enableBasic" type="text" class="hover:bg-gray-200 text-sm bg-gray-200 shadow rounded-lg px-2 py-2 focus:ring-green-600 focus:border-green-600" placeholder="Middle name">
                                  </div>
                                  <div class="flex-col px-5">
                                      <h1 class="text-left text-sm">Last name</h1>
                                    <input v-model="basicInfo.lname" :disabled="enableBasic" :class="{ invalid: isSubmitting && !basicInfo.lname.trim() }" type="text" class="border text-sm bg-gray-200 shadow rounded-lg px-2 py-2 focus:ring-green-600 focus:border-green-600" placeholder="Last name">
                                  </div>
                              </div>
                              <div class="flex mt-8 mr-5 float-right">
                                <div>
                                  <button @click="enableBasic = !enableBasic" :class="{'hidden': !enableBasic, 'block':enableBasic }" type="button" class="inline-block px-6 py-2.5 bg-transparent text-green-800 font-semibold text-xs leading-tight uppercase rounded hover:bg-green-800 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Edit Personal Info</button>
                                </div> 
                                <div>
                                  <button @click="enableBasic = !enableBasic; intialize();" type="button" :class="{'block': !enableBasic, 'hidden':enableBasic }" class="inline-block px-6 py-2.5 bg-transparent text-red-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                                  <button @click="saveBasicInfo"  type="button" :class="{'block': !enableBasic, 'hidden':enableBasic }" class="inline-block px-6 py-2.5 bg-transparent text-green-800 font-semibold text-xs leading-tight uppercase rounded hover:bg-green-800 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
                                </div>  
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div> 

              <div class="relative minwidth mt-2 mx-2 h-1/2 justify-center bg-white shadow-lg sm:rounded-md">
                <div class="w-full">
                    <div class="p-4">
                     <div class="flex flex-row justify-between">
                            <h1 class="text-lg text-left font-semibold ml-2">Security Information</h1>
                            <p class="text-xs text-right text-red-500 mt-1 mr-3"><span class="font-semibold">Note: </span> Changing security info required you to re-login</p>
                      </div>
                        <div class="mt-3 flex flex-wrap mx-2 border-t-2 border-gray-400"/>
                      <div class="flex justify-start mt-6 ml-10 mb-4">
                          <div class="flex-col">
                              <h1 class="text-left text-sm">Email</h1>
                              <input v-model="email" disabled type="text" class="hover:bg-gray-200 text-sm bg-gray-200 shadow rounded-lg px-2 py-2 w-[415px]" placeholder="Email">
                          </div>
                      </div>

                      <div class="flex flex-row justify-start ml-10 mt-6">
                          <div class="flex-col">
                              <h1 class="text-left text-sm">Password</h1>
                              <input @keyup="checkConfirmPass()" v-model="secureInfo.password" :disabled="enableSecure" :class="{ invalid: isSubmitting && !secureInfo.password.trim()}" :type="show1 ? 'password' : 'text'" class="border hover:bg-gray-200 text-sm bg-gray-200 shadow rounded-lg px-2 py-2 focus:ring-green-600 focus:border-green-600" placeholder="**********">
                              <button v-show="showEye == true" class="absolute items-center justify-center px-4 mt-2 -ml-12 z-20">
                                  <svg @click="show1 = !show1" :class="{'hidden': !show1, 'block':show1 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  <svg  @click="show1 = !show1" :class="{'block': !show1, 'hidden':show1 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                  </svg>
                              </button>
                          </div>
                          
                          <div class="flex-col ml-10">
                             <h1 class="text-left text-sm">Confirm Password</h1>
                             <input @keyup="checkConfirmPass()" v-model="confirmPass" :disabled="enableSecure" :class="{ invalid: isSubmitting && !confirmPass.trim()}" :type="show2 ? 'password' : 'text'"  class=" border hover:bg-gray-200 text-sm bg-gray-200 shadow rounded-lg px-2 py-2 focus:ring-green-600 focus:border-green-600" placeholder="**********">
                              <button v-show="showEye == true" class="absolute items-center justify-center px-4 mt-2 -ml-12 z-20">
                                  <svg @click="show2 = !show2" :class="{'hidden': !show2, 'block':show2 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  <svg  @click="show2 = !show2" :class="{'block': !show2, 'hidden':show2 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                  </svg>
                              </button>
                             <p :class="{'block': passwordCheck, 'hidden': !passwordCheck }" class="absolute text-xs text-green-600">Password matched</p>
                             <p v-show="notMatch" class="absolute text-xs text-red-600">Password not matched</p>
                          </div>
                      </div>
                      
                      <div class="flex justify-end mr-5 mt-2">
                        <div>
                           <button @click="enableSecure = !enableSecure; erasePasswordInput();" :class="{'hidden': !enableSecure, 'block':enableSecure }" type="button" class="inline-block px-6 py-2.5 bg-white text-green-800 font-semibold text-xs leading-tight uppercase rounded hover:bg-green-800 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Change Password</button>
                        </div> 
                        <div>
                          <button @click="enableSecure = !enableSecure; intialize(); erasePasswordInput();" type="button" :class="{'block': !enableSecure, 'hidden':enableSecure }" class="inline-block px-6 py-2.5 bg-white text-red-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                          <button @click="saveSecurityInfo"  type="button" :class="{'block': !enableSecure, 'hidden':enableSecure }" class="inline-block px-6 py-2.5 bg-white text-green-800 font-semibold text-xs leading-tight uppercase rounded hover:bg-green-800 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Save</button>
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

export default {
   name: 'UserProfile',
   data(){
     return {
        basicInfo: {
           fname: "",
           mname: "",
           lname: "",
        },

        secureInfo: {
           password: "**********",
        },

        confirmPass: "**********",

        enableBasic: true,
        enableSecure: true,

        passwordCheck: false,
        notMatch: false,
        
        show1: true,
        show2: true,
        showEye: false,

        userId: "",
        userInfoId: null,
        fullname: "",
        email: "",
        office: "",
        designation: "",
        program: "",

        isSubmitting: false

     }
   },

   methods: {
        // Load all the current user information
        intialize(){
          const token = localStorage.getItem("dimts_token"); 

          axios.get( this.$store.state.serverUrl + '/users/' + this.$store.state.user.id , {headers: {Authorization: `Bearer  ${token}`}}).then((result)=>{
                      if(result){

                          this.basicInfo.fname = result.data.userDetails.fname
                          this.basicInfo.mname = result.data.userDetails.mname
                          this.basicInfo.lname = result.data.userDetails.lname
                          this.userInfoId = result.data.userDetails.id
                          this.email = result.data.email
                          this.designation = result.data.userDetails.designation.designationName
                          this.office = result.data.userDetails.office.officeName
                          this.program = result.data.userDetails.program.programName

                          if(this.basicInfo.mname == ""){
                            this.fullname = this.basicInfo.fname + " " + this.basicInfo.lname
                            
                          }
                          else{
                            this.fullname = this.basicInfo.fname + " " + this.basicInfo.mname[0].toUpperCase() + "." + " " + this.basicInfo.lname
                          }
                      }
              });
      },

    // Function for saving user basic information
    saveBasicInfo(){
        const token = localStorage.getItem("dimts_token");

        this.isSubmitting = true;
        const formValid1 = [this.basicInfo.fname, this.basicInfo.lname]
        .map((x) => x.trim())
        .every(Boolean);

        if(formValid1){
          axios.put(this.$store.state.serverUrl + '/users/' + this.userInfoId , this.basicInfo, {headers: {Authorization: `Bearer  ${token}`}}).then((result)=>{
             if(result){
                
                this.intialize();
                this.enableBasic = true;
                this.isSubmitting = false;
                
                const toast = useToast();
                toast.success("Basic Information Saved", {
                timeout: 1500,
                closeOnClick: true,
                pauseOnHover: false,
                showCloseButtonOnHover: true,
              });
                 
             }
         });
       }
      },
      
    // Function for saving user security information
    saveSecurityInfo(){
        const token = localStorage.getItem("dimts_token");

        this.isSubmitting = true;
        const formValid2 = [this.secureInfo.password, this.confirmPass]
        .map((x) => x.trim())
        .every(Boolean);

        if(formValid2 && this.passwordCheck){
         axios.put( this.$store.state.serverUrl + '/users/security/' + this.$store.state.user.id, this.secureInfo,{headers: {Authorization: `Bearer  ${token}`}}).then((result)=>{
              if(result){
                  
                  this.intialize();
                  this.enableSecure = true;
                  this.isSubmitting = false;
                  this.showEye = false

                  localStorage.removeItem("vuex");
                  localStorage.removeItem("dimts_token");
                  window.location.reload()
                 
              } 
        });
      }
        else{
          const toast = useToast();
                  toast.error("Password do not match", {
                  timeout: 1500,
                  closeOnClick: true,
                  pauseOnHover: false,
                  showCloseButtonOnHover: true,
                });
        }
      },
      erasePasswordInput(){
        if(this.enableSecure == false){
            this.showEye = true
            this.secureInfo.password = "",
            this.confirmPass = ""
        }
        else{
            this.showEye = false
            this.secureInfo.password = "********",
            this.confirmPass = "********"
        }
      },
      checkConfirmPass(){
           if(this.secureInfo.password != '' && this.confirmPass == ''){
                  this.passwordCheck = false,
                  this.notMatch = false
           }
           else if(this.secureInfo.password == '' && this.confirmPass == ''){
                  this.passwordCheck = false,
                  this.notMatch = false
           }
           else if (this.secureInfo.password === this.confirmPass){
                  this.passwordCheck = true,
                  this.notMatch = false
           }
           else{
                this.passwordCheck = false,
                this.notMatch = true
           }
      },
   },
    mounted(){
        this.intialize();
    }
   
}
</script>

<style scoped>
  .minheight {
      min-height: 87vh;
    }

  .minwidth{
      min-width:  115vh;
  }
  .invalid {
      border-color: red;
  }
</style>