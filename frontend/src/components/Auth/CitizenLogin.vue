<template>
    <div class="flex">
        <!-- Form div -->
      <div class="w-[500px] flex flex-col justify-center">
        <div class="w-screen h-screen flex flex-col">
          <div class="bg-white py-8 h-screen shadow rounded-lg px-8">
            <label class="mb-1 mt-4 flex text-left"><p class="font-sans text-xl font-bold mr-2">DIMTS</p><p class="mt-[1px] text-xl">| Welcome Citizen !</p></label>
            <div class="mb-3.5 w-full border-t-4 border-gray-500" />
            <div class="space-y-6">
                <div class="relative mt-6">
                  <input @keyup.enter="userLogin()" v-model="user.email" :class="{ invalid: isSubmitting && !user.email.trim() }" type="text" id="floating_outlined" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                  <label for="floating_outlined" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                </div>
    
                <div class="relative">
                  <input @keyup.enter="userLogin()" v-model="user.password" :class="{ invalid: isSubmitting && !user.password.trim() }" :type="show ? 'password': 'text'" id="floating_outlined2" class="block px-2.5 pb-3.5 pl-5 pt-3.5 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                  <label for="floating_outlined2" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 ml-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 focus:border-purple-600 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
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
    
              <!-- <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-gray-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-2 block text-xs text-gray-900"> Remember me </label>
                </div>
    
                <div class="text-sm">
                  <a href="#" class="font-medium text-xs text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                </div>
              </div> -->
            </div>
            <div>
              <div class="mt-10">
                <button v-if="isLoading == false" @click="userLogin()" class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                     Sign in
                </button>
                <button v-if="isLoading == true" disabled class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white button-submit focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                  <svg role="status" class="inline mr-3 w-5 h-5 -mb-1.5 text-[#BF40BF] animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>Sign in
                </button>
              </div>
            </div>
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
                <router-link to="/citizen-signup" class="flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white button-signup focus:outline-none focus:ring-2 focus:ring-offset-2">Sign up</router-link>
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
        name: 'Login',
    
        data(){
        return{
           user:{
              email: "",
              password: "",
           },
           isSubmitting: false,
           isLoading: false,
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
                    this.isLoading = true
                    axios.post(process.env.VUE_APP_BASE_URL + '/citizen/citizenLogin/' + this.user.email + '/' + this.user.password).then((result)=>{
                      
                      if(result.data.status == 404 ){
                            const toast = useToast();
                            toast.error("No user found in this username", {
                            position: "top-left",
                            timeout: 2000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            showCloseButtonOnHover: true,
                        });
                        this.isLoading = false
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
                        this.isLoading = false
                      }
    
                      else{
                          this.isLoading = false
                          localStorage.setItem('dimts_token', 'citizen');

                          this.$store.commit('UPDATE_USER', result.data.citizenData)
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
               
        }
         .button-signup{
               background: #a4a4a4;  
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