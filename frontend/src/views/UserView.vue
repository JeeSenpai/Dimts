<template>
  <div class="flex">
<!--Sidebar-->
  <aside class=" flex-shrink-0 xs:w-0 sm:w-0 md:w-60 shadow-lg z-50 sidebarColors" aria-label="Sidebar">
   <a :href=" userType + '/dashboard'" class="flex items-center pl-2.5 mt-4" >
      <img src="../assets/dmits-logo.png" class="h-8 sm:h-10" alt="Dnsc Logo" />
      <span class="self-center text-xl font-semibold text-gray-700">DIMTS</span>
   </a>
   <div class="overflow-y-auto py-4 px-1 overflow-x-hidden rounded-br-lg h-screen">
    <div class="mb-2">
      <ul class="space-y-2">
          <div class="text-[#BF40BF] text-xs font-sans text-left ml-5 mb-2 font-semibold">Main Menu</div>
      </ul>
      <ul class="space-y-2.5">   
         <li>
            <router-link :to=" userType + '/dashboard'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Dashboard</span>
            </router-link>
         </li>
         <li v-if="this.$store.state.user.userDetails.office.id == 1">
            <router-link :to=" userType + '/case-list'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Case List</span>
            </router-link>
         </li>
         <li >
            <router-link :to=" userType + '/documents'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Documents</span>
            </router-link>
         </li>
         <li v-if="this.$store.state.user.userDetails.office.id == 1">
            <router-link :to=" userType + '/custodies'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Custodies</span>
            </router-link>
         </li>
         <li v-if="this.$store.state.user.userDetails.office.id == 1">
            <router-link :to=" userType + '/court-hearing'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Court Hearings</span>
            </router-link>
         </li>
      </ul>
     </div>
     <div v-if="this.$store.state.user.userDetails.office.id == 1" class="mb-2">
      <ul class="space-y-2">
          <div class="text-[#BF40BF] text-xs font-sans text-left ml-5 mb-2 font-semibold">Tracking</div>
      </ul>
      <ul class="space-y-2.5">
         <li>
            <router-link :to=" userType + '/proceedings'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Proceedings</span>
            </router-link>
         </li>  
         <li>
            <router-link :to=" userType + '/clustering'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Clustering</span>
            </router-link>
         </li>
      </ul>
     </div>
     <div v-if="userPosition == 1 && this.$store.state.user.userDetails.office.id == 1" class="mb-2">
      <ul class="space-y-2">
          <div class="text-[#BF40BF] text-xs font-sans text-left ml-5 mb-2 font-semibold">Others</div>
      </ul>
      <ul class="space-y-2.5">   
         <li>
            <router-link :to=" userType + '/account'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Manage Accounts</span>
            </router-link>
         </li>
         <li>
            <router-link :to=" userType + '/utilities'" class="flex items-center p-2 ml-8 -mr-4 text-base font-sans text-gray-800 rounded-lg routerButton">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
               </svg>
               <span class="ml-3 text-xs font-semibold">Utilities</span>
            </router-link>
         </li>  
      </ul>
     </div>
      </div> 
  </aside>

<!--Navbar-->
  <div class="w-full">
     <nav class="font-sans flex relative rounded-b-md flex-row justify-between sm:text-left py-2 px-6 bg-white navBar w-full" aria-label="Navbar">
        <div class="mt-1 flex-1">
            <div class="text-xl font-semibold no-underline text-grey-darkest hover:text-blue-dark" >{{$route.meta.title}}</div>
        </div>
       
        <div class="flex ml-2">
         <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none" type="button"> 
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                  <div :class="notificationData.every(value => value.is_clicked === true) == true ? 'invisible': 'visible'" class="flex relative">
                      <div class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                  </div>
            </button>
            <div id="dropdownNotification" class="hidden z-20 w-full rounded-b-md max-w-sm bg-white divide-y divide-gray-100 shadow overflow-y-auto" aria-labelledby="dropdownNotificationButton">
                  <div class="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50">
                        Notifications
                  </div>
                  <div v-if="notificationData.length == 0" class="text-center text-sm p-2">No Notification Found</div>
                  <div v-if="notificationData.length > 0" class="overflow-y-auto max-h-[350px]">
                  <div v-for="notif in latestData(notificationData)" :key="notif" class="divide-y-2 divide-gray-100 max">
                     <button v-if="notif.notif_type == 1 && notif.document.office.id == $store.state.user.userDetails.office.id" type="button" @click="clickedNotif(notif)" class="flex py-3 px-4 text-left" :class="notif.is_clicked == false ? 'bg-purple-100 hover:bg-purple-200': 'hover:bg-purple-200'">
                        <div class="flex-shrink-0">
                        <img class="w-11 h-11 rounded-full" src="../assets/Profile.png">
                           <div class="flex relative justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-3 h-3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                           </svg>
                           </div>
                        </div>
                        <div class="pl-3 w-full">
                           <div class="text-gray-500 text-sm mb-1.5"><span class="font-semibold text-gray-900">{{ notif.document.fromOffice.description }} Office</span> sended you a document with <span class="font-medium text-black"> Case No. {{ notif.document.case.case_no }} - {{ notif.document.case.case_title }}</span></div>
                           <div class="text-xs text-blue-600">{{ formatDateTime(notif.datecreated) }}</div>
                        </div>
                     </button>
                     <button v-if="notif.notif_type == 2 && notif.document.fromOffice.id == $store.state.user.userDetails.office.id" type="button" @click="clickedNotif(notif)" class="flex py-3 px-4 text-left" :class="notif.is_clicked == false ? 'bg-purple-100 hover:bg-purple-200': 'hover:bg-purple-200'">
                        <div class="flex-shrink-0">
                        <img class="w-11 h-11 rounded-full" src="../assets/Profile.png">
                           <div class="flex relative justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-3 h-3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                           </div>
                        </div>
                        <div class="pl-3 w-full">
                           <div class="text-gray-500 text-sm mb-1.5"><span class="font-semibold text-gray-900">{{ notif.document.office.description }} Office</span> acknowledge your sended documents with <span class="font-medium text-black"> Case No. {{ notif.document.case.case_no }} - {{ notif.document.case.case_title }}</span></div>
                           <div class="text-xs text-blue-600">{{ formatDateTime(notif.datecreated) }}</div>
                        </div>
                     </button>                                                                                                                                                                                                                                                                                                                                                                                       
                     <button v-if="notif.notif_type == 3" @click="clickedNotifCitizen(notif)" type="button" class="flex py-3 px-4 text-left" :class="notif.is_clicked == false ? 'bg-purple-100 hover:bg-purple-200': 'hover:bg-purple-200'">
                        <div class="flex-shrink-0">
                        <img class="w-11 h-11 rounded-full" src="../assets/Profile.png">
                           <div class="flex relative justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-400 rounded-full border border-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-3 h-3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                              </svg>
                           </div>
                        </div>
                        <div class="pl-3 w-full">
                           <div class="text-gray-500 text-sm mb-1.5">A citizen named <span class="font-semibold text-gray-900">{{ notif.monitor.citizen.fname }} {{ notif.monitor.citizen.lname }}</span> requested a new case monitor with<span class="font-medium text-black"> Case No. {{ notif.monitor.case.case_no }} - {{ notif.monitor.case.case_title }}</span></div>
                           <div class="text-xs text-blue-600">{{ formatDateTime(notif.datecreated) }}</div>
                        </div>
                     </button>
                  </div>
               </div>
            <div class="block py-2 text-sm font-medium text-center rounded-b-lg text-gray-900 bg-gray-50 hover:bg-gray-100">
               <div class="inline-flex items-center ">
                  Thats  all
               </div>
            </div>
         </div>
       </div>
        <div class="dropdown relative bg-gray-200 hover:bg-gray-300 p-1 rounded-3xl">
            <a class="dropdown-toggle flex items-center hidden-arrow w-full" id="dropdownMenuButton2" role="button" 
               data-bs-toggle="dropdown" aria-expanded="true">
               <span class="text-black text-[13px] ml-2 mt-0.5 truncate">{{ this.$store.state.user.userDetails.fname }} {{ this.$store.state.user.userDetails.lname }}</span>
                  <svg fill="black" viewBox="0 0 20 20" class="inline w-4 h-4 ml-1 mt-0.5 transition-transform duration-200 transform">
               <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <ul class="dropdown-menu w-full absolute hidden bg-white text-black z-50 float-right py-2 -ml-2 list-none text-right rounded-lg shadow-lg mt-2 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton2">
               <!-- <li> 
               <router-link class="dropdown-item text-sm text-center py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900 hover:bg-gray-100" 
               :to="userType + '/userprofile'">
               <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
               </svg>Profile</router-link>
               </li>
                  <div class="mb-1 mt-1 flex flex-wrap mx-2 right-0 border-gray-400 border-t"/> -->
               <li>
               <button class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900 hover:bg-gray-100 hover:text-red-600" 
               @click="logout()">
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>Log Out</button>
               </li>
            </ul>
         </div>
      </nav>
      <div v-show="isLoading">
         <LoadingScreen/>
      </div>
      
      <!--Router link view-->
      <div class="pl-4 py-3 w-full max-h-screen overflow-y-auto overscroll-y-auto right-0">
            <router-view></router-view>
         <div class="mb-14"></div>
      </div>
   </div>   
</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import LoadingScreen from '@/components/Parents/LoadingScreen.vue';

export default {
    name: "UserView",
    components: { LoadingScreen },
    watch:{
      $route (to, from){
         this.init()
      }
    },
    data() {
        return {
            userType: '',
            token: localStorage.getItem("dimts_token"),
            isLoading: false,

            userPosition: null,
            showToggle: false,
            showAccountApproval: false,

            semester: null,
            schoolYear: null,
            
            toggle: false,
            creationMenu: true,
            approvalMenu: false,
            routeName: 'syllabus',
            workplace: "Compliance Approval",

            NoSemesterCreated: false,
            SemesterCreated: false,

            notificationData: [],
        };
    }, 
    methods: {
        init() {
         axios.get(this.$store.state.serverUrl + '/notifications/findAllNotficationForOffice/' + this.$store.state.user.userDetails.office.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((rest)=>{
                this.notificationData = rest.data
                  
                  if(this.$store.state.user.userDetails.userType.id == 1){
                     axios.get(this.$store.state.serverUrl + '/notifications/findAllNotficationForAdmin/', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                           for (let i = 0; i< res.data.length; i++) {
                              this.notificationData.push(res.data[i])
                           }
                     });
                  }
            });
            
        },
        logout() {
            localStorage.removeItem("vuex");
            localStorage.removeItem("dimts_token");
            window.location.reload()
        },
        loadMenu(userType) {
        switch (userType) {
          case 1:
            this.userType = '/admin'
            break;
          case 2:
            this.userType = '/staff'
            break; 
        }
      },
      formatDateTime(dateTime) {
         return moment(dateTime).fromNow();
      },
      latestData(item) {
            return item.sort((a, b) => new Date(b.datecreated) - new Date(a.datecreated))
      },
      clickedNotif(data){
         axios.patch(this.$store.state.serverUrl + '/notifications/updateIsClicked/' + data.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
            const routeData = this.$router.resolve({path: this.userType +'/documents', query: { notif_type: data.notif_type } });
            window.open(routeData.href, '_self');
         });
      },
      clickedNotifCitizen(data){
         axios.patch(this.$store.state.serverUrl + '/notifications/updateIsClicked/' + data.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
            const routeData = this.$router.resolve({path: this.userType +'/account', query: { notif_type: data.notif_type, user: data.monitor.citizen.lname } });
            window.open(routeData.href, '_self');
         });
      }
    },
    mounted() {
        this.init();
        let userType = this.$store.state.user.userDetails.userType.id
        this.userPosition = this.$store.state.user.userDetails.userType.id
        this.loadMenu(userType)
        
    },
    
}
</script>

<style scoped>
  .sidebarColors{
      background: #fbfbfb;
  }
  :hover.routerButton{
      color: white;
      background: #BF40BF;
  }
  .router-link-active, .router-link-exact-active {
      color: white;
      background: #BF40BF
  }
  .navBar{
      filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
      z-index: 45;
  }

  /* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #efefeff6;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c341af ;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c341af ;
}
</style>  