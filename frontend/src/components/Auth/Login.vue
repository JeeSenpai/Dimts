<template>
<div class="flex">
    <!-- Form div -->
  <div class="min-h-full w-[500px] m-auto flex flex-col justify-center md:mt-16 py-10 sm:px-6">
    <div class="sm:mx-auto sm:w-full md:max-w-sm">
      <div class="bg-white py-8 px-2 shadow sm:rounded-lg sm:px-10">
            <label class="mb-1 flex text-left"><p class="font-sans text-lg font-bold mr-2">Sign In</p><p class="font-sans text-lg">| Welcome Back!</p> </label>
        <div class="mb-3.5 w-full border-t-4 border-gray-500" />
        <form class="space-y-6" @submit.prevent>
            <div class="relative mt-6">
              <input @keyup.enter="userLogin()" v-model="user.email" :class="{ invalid: isSubmitting && !user.email.trim() }" type="email" id="floating_outlined" class="block px-2.5 pb-2.5 pl-5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-3xl border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
              <label for="floating_outlined" class="absolute text-[13px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
            </div>

            <div class="relative">
              <input @keyup.enter="userLogin()" v-model="user.password" :class="{ invalid: isSubmitting && !user.password.trim() }" :type="show ? 'password': 'text'" id="floating_outlined2" class="block px-2.5 pb-2.5 pl-5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-3xl border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
              <label for="floating_outlined2" class="absolute text-[13px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
              <button type="submit" class="absolute right-2.5 bottom-2.5">
                <svg @click="show = !show" :class="{'hidden': !show, 'block':show }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg  @click="show = !show" :class="{'block': !show, 'hidden':show }" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
              </button>
            </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-gray-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-xs text-gray-900"> Remember me </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-xs text-blue-600 hover:text-blue-500"> Forgot your password? </a>
            </div>
          </div>
          <div>
            <button @click="userLogin()" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">Sign in</button>
          </div>
        </form>
        <div class="mt-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500 text-xs"> Don’t have an account yet?</span>
            </div>
          </div>
            <div class="mt-4">
            <router-link to="/register" class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-signup focus:outline-none focus:ring-2 focus:ring-offset-2">Sign up</router-link>
          </div>
        </div>
        </div>
      </div>
      <br><br><br>
    </div>    
  </div> 
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification"

export default {
    name: 'Login',

    data(){
    return{
       user:{
          email: "",
          password: "",
       },
       isSubmitting: false,
       show: true
      }
    },

  methods:{
      // Function for user login
      userLogin(){
              this.isSubmitting = true; 

              const formValid = [this.user.email, this.user.password]
              .map((x) => x.trim())
              .every(Boolean);
              if(formValid){

                axios.post(process.env.VUE_APP_BASE_URL + '/auth/login', this.user ).then((result)=>{
                  
                  if(result.data.status == 404 ){
                        const toast = useToast();
                        toast.error("No user found in this email", {
                        position: "top-left",
                        timeout: 2000,
                        closeOnClick: true,
                        pauseOnHover: false,
                        showCloseButtonOnHover: true,
                    });
                  }

                  else if (result.data.status == 409){
                    const toast = useToast();
                        toast.error("Incorrect Password", {
                        position: "top-left",
                        timeout: 2000,
                        closeOnClick: true,
                        pauseOnHover: false,
                        showCloseButtonOnHover: true,
                    });
                  }

                  else if(result && result.data.isValidated == false){ 
                        const toast = useToast();
                        toast.error("Your not validated yet to access AUMS\nNote: Please contact the admin for approval", {
                        position: "top-left",
                        timeout: 6000,
                        closeOnClick: true,
                        pauseOnHover: false,
                        showCloseButtonOnHover: true,
                    });
                  }

                  else if(result && result.data.user.status == false){
                        
                        const toast = useToast();
                        toast.error("Your account has been deactivated to access AUMS\nNote: Please contact the admin for activation", {
                        position: "top-left",
                        timeout: 6000,
                        closeOnClick: true,
                        pauseOnHover: false,
                        showCloseButtonOnHover: true,
                    });
                  }

                  else{
                      localStorage.setItem('access_token', result.data.access_token);
                      let token = localStorage.getItem('access_token')

                      this.$store.commit('UPDATE_USER', result.data.user)
                      this.$store.commit('UPDATE_SERVERURL', process.env.VUE_APP_BASE_URL)

                      window.location.reload()
                      
                  }
                }).catch((error) => {
                        const toast = useToast();
                        toast.error("Error has occured", {
                        position: "top-left", 
                        timeout: 2500,
                        closeOnClick: true,
                        pauseOnHover: false,
                        showCloseButtonOnHover: true,
                    });
              });
            }
          }
     },
}
</script>

<style scoped>
 
    .button-submit{
           background: #c341af;
           border-radius: 20px;
           
    }
     .button-signup{
           background: #a4a4a4;
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