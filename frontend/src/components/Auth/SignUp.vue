<template>
<div>

   <div class="flex flex-col justify-center py-11 sm:px-6" v-show="formDiv">
    <div class="h-full sm:mx-auto sm:w-full sm:max-w-lg">
      <div class="bg-white py-8 px-2 shadow sm:rounded-lg sm:px-10">
                <label class="mb-1 flex text-left"><p class="font-sans text-lg font-bold mr-2">Sign Up</p><p class="font-sans text-lg">| Create an account</p> </label>
          <div class="mb-3 w-full border-t-4 border-gray-500"/>

  <!--Form for Signup-->
    <form class="space-y-5" @submit.prevent>
      <div v-show="form1">
        <div class="text-xs font-semibold">Basic Information</div>
            <div class="text-xs font-thin">Step 1 of 4</div>
          
          <div class="flex flex-col">  
            <div class="mt-1">
              <label for="fname" class="ml-2 mt-1 block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> First Name </label>
                <input id="fname" name="fname" type="text" 
                     v-model="posts.fname" 
                    :class="{ invalid: isSubmitting && !posts.fname.trim() }" 
                    class="appearance-none block w-full pl-4 pr-4 mr-8 py-2 border hover:border-gray-500  border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs" />
                </div>
            
            <div class="mt-1">
              <label for="mname" class="ml-2 mt-1 block text-xs text-left font-medium text-green-800"> Middle Name </label>
                <input id="mname" name="mname" type="text"  
                    v-model="posts.mname" 
                    class="appearance-none block w-full pl-4 pr-4 mr-8 py-2 border hover:border-gray-500  border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs" />
            </div>
          </div>

          
            <div class="mt-1 mb-3">
             <label for="lname" class="ml-2 mt-1 block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Last Name </label>
              <input id="lname" name="lname" type="text" 
                    v-model="posts.lname" 
                    :class="{ invalid: isSubmitting && !posts.lname.trim() }" 
                    class="appearance-none block w-full pl-4 pr-4 mr-8 py-2 border hover:border-gray-500  border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs" />
            </div>

        <div class="text-xs font-semibold ">Department Information</div>
            <div class="text-xs font-thin">Step 2 of 4</div>

            <div>
                <div class="mt-2">
                  <label for="office" class="ml-2 mt-1 block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Institute/Office </label>
                      <select 
                        @change="loadProgram()"
                        v-model="posts.office"
                        class="block w-full px-2 py-2 mr-8 border hover:border-gray-500 border-gray-300 rounded-3xl shadow-sm focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs">
                                  <option disabled value="">Please select a institute or office</option>
                                  <option value="1">Office of the Vice President for Academic Affairs</option>
                                  <option v-for="institutes in instituteData" :key="institutes.office_id" :value="institutes.office_id">{{institutes.office_officeName}}</option>
                        </select>
                </div>

                <div class="mt-3 mb-3">
                  <label for="office" class="ml-2 mt-1  block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Designation </label>
                      <select 
                        @change="programTrigger()"
                        v-model="posts.designation"
                        class="block w-full px-2 py-2 mr-14 border hover:border-gray-500 border-gray-300 rounded-3xl shadow-sm focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs">
                                  <option disabled value="">Please select a designation</option>
                                  <option v-if="isVPAA == false" value="1">Dean</option>
                                  <option v-if="isVPAA == false" value="2">Program Chairperson</option>
                                  <option v-if="isVPAA == false" value="3">Faculty</option>
                                  <option v-if="isVPAA == true" value="4">Staff</option>
                        </select>
                </div>

                  <div v-show="programShow" class="mt-3 mb-5">
                   <label for="office" class="ml-2 mt-1 block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Program </label>
                      <select 
                        v-model="posts.program"
                        class="block w-full px-2 py-2 mr-14 border hover:border-gray-500 border-gray-300 rounded-3xl shadow-sm focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs">
                                  <option disabled value="0">Please select a program</option>
                                  <option v-for="program in programData" :key="program.id" :value="program.id">{{program.programName}}</option>
                        </select>
                </div>
            </div>
        <div>
            <button @click="showForm2" class="w-full flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Next</button>
          </div>
        </div>
    <!--Form2-->    
      <div v-show="form2">
        <div class="text-xs font-semibold -mt-1">Account Information</div>
            <div class="text-xs font-thin">Step 3 of 4</div>
            <div>
                <label for="email" class="ml-2 mt-2 block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Email </label>
                <div class="mt-1">
                <input id="email" name="email" type="email" 
                    @keyup="emailCheck"
                    v-model="posts.email" 
                    :class="{ invalid: isSubmitting && !posts.email.trim() }" 
                    class="appearance-none block w-full px-3 py-2 border hover:border-gray-500  border-gray-300 rounded-3xl shadow-sm  focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600  sm:text-xs" />
                </div>
                <span v-show="emailOff" class="text-red-500 text-xs font-extralight text-left">*Email must have '@' followed by a valid dnsc email</span>
                <span v-show="emailOn" class="text-green-500 text-xs font-extralight"><p class="mt-1">Valid Email</p></span>
            </div>
         <div>
            <label for="password" class="ml-2 mt-4 block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Password </label>
            <div class="mt-1 mb-1 flex">
              <input id="password" name="password" :type="show1 ? 'password' : 'text'"
                    @keyup="passCheck" 
                    v-model="posts.password" 
                    :class="{ invalid: isSubmitting && !posts.password.trim() }" 
                    class="appearance-none block w-full px-3 py-2 border hover:border-gray-500  border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600  sm:text-xs" />

                <button class="flex items-center justify-center px-4 -ml-12 z-20">
                  <svg @click="show1 = !show1" :class="{'hidden': !show1, 'block':show1 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg  @click="show1 = !show1" :class="{'block': !show1, 'hidden':show1 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>

            </div>
             <span v-if="passOff" class="text-red-500 text-xs font-extralight text-left">
                <p class="ml-3 mt-1">Minimum eight(8) in length</p>
                <p class="ml-3 mt-1">At least one upper case letter</p>
                <p class="ml-3 mt-1">At least one uower case letter</p>
                <p class="ml-3 mt-1">At least one digit</p>
            </span>
            <span v-if="passOn" class="text-green-500 text-xs font-extralight"><p class="mt-1">Valid Password</p></span>
        </div>
        <div>
            <label for="confirmPassword" class="ml-2 mt-4  block text-xs text-left font-medium text-green-800"><span class="text-red-500 text-md">*</span> Confirm Password </label>
            <div class="mt-1 flex">
              <input id="confirmpassword" name="password" :type="show2 ? 'password' : 'text'" 
                    @keyup = "confirmPassCheck"
                    v-model="confirmPassword" 
                    :class="{ invalid: isSubmitting && !confirmPassword.trim() }" 
                    class="appearance-none block w-full px-3 py-2 border hover:border-gray-500  border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none bg-gray-100 focus:border-green-600 focus:ring-green-600 sm:text-xs" />

                <button class="flex items-center justify-center px-4 -ml-12 z-20">
                  <svg @click="show2 = !show2" :class="{'hidden': !show2, 'block':show2 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg  @click="show2 = !show2" :class="{'block': !show2, 'hidden':show2 }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
            </div>
            <span v-if="confirmPassOff" class="text-red-500 text-xs font-extralight"><p class="mt-1">Password do not match</p></span>
            <span v-if="confirmPassOn" class="text-green-500 text-xs font-extralight"><p class="mt-1">Password match</p></span>
        </div>
        <div>
          <br>
            <button @click="signUp" class="w-full flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Sign Up</button>
          </div>
        </div>
  <!--OTP-->
          <div v-show="form3">
        <div class="text-xs font-semibold -mt-1">OTP Confirmation</div>
            <div class="text-xs font-thin">Step 4 of 4</div>
             <div class=" text-left text-xs font-bold mt-5">An OTP (One Time Passcode) has been sent to your email address. Check your email and encode your OTP on the input below.</div>
              <div class=" text-left text-xs font-bold mb-5 mt-5 text-red-600">Note: Never share this OTP to anyone</div>
            <div>
            <div class="mt-1 mb-7">
                    <div id="otp" class="flex flex-row justify-center text-center px-2 mt-1"> 
                          <input class="m-2 border border-gray-500 h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" /> 
                          <input class="m-2 border border-gray-500 h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" /> 
                          <input class="m-2 border border-gray-500 h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
                          <input class="m-2 border border-gray-500 h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> 
                          <input class="m-2 border border-gray-500 h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
                          <input class="m-2 border border-gray-500 h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> 
                    </div>
            </div>
            <br><br><br><br>
        </div>
          <div>
            <button @click="validateOtp"  class="w-full flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Confirm OTP</button>
          </div>
        </div>
      </form>

<!--Back to Signin-->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500 text-xs">Already have an account? <a><router-link to="/" class="text-blue-700 font-semibold">Sign In</router-link></a></span>
            </div>
          </div>
        </div>
        </div>
      </div>     
    </div>

<!--If successfully signup this form shows--> 
     <div v-show="verifiedForm">
            <div class=" flex flex-col justify-center py-11 sm:px-6 ">
                <div class="mt-10 m-auto sm:w-10/12 h-full">
                    <div class="bg-white sm:py-7 px-4 shadow sm:rounded-lg">
                      <div class="flex">
                        <div class="w-1/2">
                              <div class="text-left font-bold text-4xl sm:ml-10 sm:mt-20 mr">You have <div class="text-green-700 inline">Successfully Registered </div>your account!</div>
                              <div class="text-left font-sm sm:ml-10 sm:mt-2">As of the moment, your account is subject for verification by the admin. You can contact your systems administrator for a quick response.</div>
                              <div class="mt-8">
                                <router-link to="/login"><button class=" sm:ml-10 w-3/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-signup focus:outline-none focus:ring-2 focus:ring-offset-2 ">Sign in</button></router-link>
                              </div>
                          </div>
                          <div class="w-1/2">
                              <img src="./../../assets/review.png" class="sm:ml-12">
                          </div>
                    </div>
                  </div>
                </div>
            </div>
            
        </div> 
        <br><br>
</div>
    
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification"

export default {
    name: 'Signup',
    
    data(){
        return{
        
          //Returning v-show
           formDiv: true, 
           form1: true,
           form2: false,
           form3: false,
           verifiedForm: false,
           isSubmitting: false,
           show1: true,
           show2: true,

        //Data for post inputs
           posts:{
              fname: "",
              mname: "",
              lname: "",
              eduQ: "",
              office: "",
              designation: "",
              program: "0",
              email: "",
              password: "",
              isValidated: false,
              otpVerified: false,
           },
        //Verification data

           programData: "", 
           instituteData: "",

           isVPAA: false,
           emailOff: true,
           emailOn: false,
           passOff: true,
           passOn: false,
           confirmPassOff:false,
           confirmPassOn:false,
           
           confirmPassword: "",

           emailVerified: false,
           passwordVerified: false,
           confirmPasswordVerified: false,

           programShow: false
        }
    },

  // Calling the OTP function
   mounted(){
          this.OTPInput()
          this.initialize()
   },

    methods:{

        initialize(){
          axios.get(process.env.VUE_APP_BASE_URL + '/offices/findInstitute', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                if(res){
                    this.instituteData = res.data
                }
            });
        },

        loadProgram(){
          if(this.posts.office == 1){
            this.isVPAA = true
            this.posts.designation = ""
            this.programShow = false
            this.posts.program = "0"
          }
          else{
            this.isVPAA = false
            this.posts.designation = ""
            axios.get(process.env.VUE_APP_BASE_URL + '/program/getProgramByInstitute/' + this.posts.office).then((program)=>{
                    if(program){  
                        this.programData = program.data 
                    }  

            });
          }
        },

        programTrigger(){
            if(this.posts.office != 1 && this.posts.designation == "1" ){
                  this.programShow = true
            }
            else if (this.posts.office != 1 && this.posts.designation == "2" ){
                this.programShow = true
            }
            else if (this.posts.office != 1 && this.posts.designation == "3" ){
                this.programShow = true
            }
            else{
                this.programShow = false
                this.posts.program = "0"
            }
        },  

        // Validating Form 1 (Basic Information)
        showForm2(){
          
              this.isSubmitting = true;

              const formValid = [this.posts.fname, this.posts.lname]
              .map((x) => x.trim())
              .every(Boolean);

            if (formValid && this.posts.office == ""){

                const toast = useToast();
                  toast.error("Please select a Institute or Office", {
                  timeout: 1500,
                  closeOnClick: true,
                  pauseOnHover: false,
                  showCloseButtonOnHover: true,
                });

            }
            else if (formValid && this.posts.designation == ""){

                const toast = useToast();
                  toast.error("Please select a Designation", {
                  timeout: 1500,
                  closeOnClick: true,
                  pauseOnHover: false,
                  showCloseButtonOnHover: true,
                });

            }

            else if ( formValid && this.posts.office != 1 && this.posts.program == "0"){

                const toast = useToast();
                  toast.error("Please select a Program", {
                  timeout: 1500,
                  closeOnClick: true,
                  pauseOnHover: false,
                  showCloseButtonOnHover: true,
                });
            }

            else if (formValid && this.posts.office !== "" && this.posts.designation !== ""){
                this.form1= false,
                this.form2= true,
                this.form3= false,  
                this.verifiedForm = false,
                this.isSubmitting = false
            }
        },

        //Validating all the forms if verified user added to the database
        signUp(){
              
              this.isSubmitting = true;
              const formValid = [this.posts.email, this.posts.password, this.confirmPassword]
              .map((x) => x.trim())
              .every(Boolean);

              if(formValid && this.emailVerified == false || this.passwordVerified == false || this.confirmPasswordVerified == false) {

                  const toast = useToast();
                  toast.error("Please fill up a correct credentials", {
                  timeout: 1500,
                  closeOnClick: true,
                  pauseOnHover: false,
                  showCloseButtonOnHover: true,
                });

              }

              else if (formValid && this.emailVerified && this.passwordVerified && this.confirmPasswordVerified && this.posts.password === this.confirmPassword) {
                    axios.post( process.env.VUE_APP_BASE_URL + '/auth/signUp', this.posts).then((result)=>{
                      if(result){
                          this.form1= false,
                          this.form2= false,
                          this.form3= true,
                          this.verifiedForm = false,
                          this.isSubmitting = false

                          sessionStorage.setItem('otp', result.data.otp ),
                          sessionStorage.setItem('userid' , result.data.id)
                      }
              }); 
            }
        },

        //Validate OTP
        validateOtp(){

          const first = document.getElementById('first').value;
          const second = document.getElementById('second').value;
          const third = document.getElementById('third').value;
          const fourth = document.getElementById('fourth').value;
          const fifth = document.getElementById('fifth').value;
          const sixth = document.getElementById('sixth').value;

          const otpRaw = first + "" + second + "" + third + "" + fourth + "" + fifth + "" + sixth;
          const otpReq = sessionStorage.getItem('otp');
          const userid = sessionStorage.getItem('userid');

            if (otpRaw == otpReq) {

              axios.post( process.env.VUE_APP_BASE_URL + '/auth/updateOtp', {id: userid}).then((result)=>{
                if(result){

                  sessionStorage.removeItem('otp');
                  sessionStorage.removeItem('userid');
                  
                  this.formDiv = false,  
                  this.verifiedForm = true
                  
                }
              }); 
            }
         
        },

        //Function for checking email
        emailCheck(){
            if (/^\w+([\.-]?\w+)+@dnsc.edu\.ph$/.test(this.posts.email)){
                  this.emailOff= false
                  this.emailOn= true

                  this.emailVerified = true
              }
            else{ 
                  this.emailOff= true
                  this.emailOn= false

                  this.emailVerified = false
            }
        },
      //Function for checking password
        passCheck(){
            if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(this.posts.password)){
                this.passOff=false
                this.passOn=true

                 this.passwordVerified = true
            }
            else{
                this.passOff=true
                this.passOn=false

                 this.passwordVerified = false
            }  
        },
       //Function for confirming pasword
        confirmPassCheck(){
            if (this.posts.password === this.confirmPassword){
                this.confirmPassOff = false
                this.confirmPassOn = true

                this.confirmPasswordVerified = true
            }

            else{
                this.confirmPassOff = true
                this.confirmPassOn = false

                this.confirmPasswordVerified = false
            }
        },
   
        // Function for automatic spacing when inputing OTP
        OTPInput() {
           const inputs = document.querySelectorAll('#otp > *[id]');
           for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } 
        }  
        }

}
</script>

<style scoped>
    .button-submit{
           background: #c341af;
           border-radius: 20px;
           
    }
     .button-signup{
           background: #c341af;
           border-radius: 20px;   
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