<template>
    <div class="checkFade animated">
       <div class="flex -ml-2 bg-white w-full rounded-lg shadow-lg p-3.5">
        <div class="flex justify-between">
            <div class="flex">
                <div>
                    <vue-qrcode :value="caseNumber" :options="{ width: 250 }" class="rounded-lg shadow-lg"></vue-qrcode>
                </div>
                <div class="space-y-7">
                    <div class="flex text-left font-semibold space-x-20 mt-3 ml-6">
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Case No.</p>
                            <p class="text-xs">{{ caseNumber }}</p>
                        </div>
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Case Type</p>
                            <p class="text-xs">{{ caseType }}</p>
                        </div>
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Date Recieved</p>
                            <p class="text-xs">{{ formatDate(recievedDate) }}</p>
                        </div>
                    </div>
                    <div class="ml-6 font-semibold mt-3.5">
                        <div>
                            <p class="font-thin text-xs text-gray-600 text-left">Case Title</p>
                            <p class="text-xs text-left">{{ caseTitle }}</p>
                        </div>
                    </div>
                    <div class="ml-6 font-semibold mt-3.5">
                        <div class="mt-3.5 mr-[3rem]">
                            <p class="font-thin text-xs text-gray-600 text-left">Case Description</p>
                            <p class="text-xs text-left break-word"> {{ caseDesc }}</p>
                        </div>
                    </div>
                    <div class="flex ml-6 font-semibold mt-3">
                        <div class="mt-3.5 mr-[3rem]">
                            <p class="font-thin text-xs text-gray-600 text-left">Case Status</p>
                            <span v-if="caseStatus == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-md">Docket Case</span>
                            <span v-if="caseStatus == 1 && reOpenedCount -1 == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">New Case</span>
                            <span v-if="caseStatus == 1 && reOpenedCount -1 > 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Reopened Case</span>
                        </div>
                        <div v-if="caseStatus == 1 && reOpenedCount == proceedingData.length" class="mt-3.5 ml-5">
                            <button @click="showTransferDialog = true" type="button" class="inline-block px-5 py-2.5 mr-3 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0">Transfer Case to Docket</button>
                        </div>
                        <!-- <div v-if="reOpenedCount == proceedingData.length" class="mt-3.5 ml-3.5">
                            <button v-show="generatingReport == false" @click="printReport()" type="button" class="inline-block px-5 py-2.5 mr-3 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase border border-[#BF40BF] rounded-md hover:shadow-lg hover:text-white hover:bg-[#BF40BF] focus:shadow-lg focus:outline-none focus:ring-0">
                                Print Report
                            </button>
                            <button v-show="generatingReport == true" disabled type="button" class="inline-block px-5 py-2.5 mr-3 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase border border-[#BF40BF] rounded-md hover:shadow-lg hover:text-white hover:bg-[#BF40BF] focus:shadow-lg focus:outline-none focus:ring-0">
                                <svg role="status" class="inline mr-3 w-4 h-4 text-[#BF40BF] animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Print Report
                            </button>
                        </div> -->
                    </div>
                    </div>
                </div>
        </div>    
    </div>
    <div class="text-left">
            <div class="text-sm font-semibold text-center text-gray-500 border-gray-200">
                <ul class="flex flex-wrap mb-2 mt-2">
                    <li v-for="tab in tabs" :key="tab.id">
                        <button @click="changeTab(tab)" :class="tab.id == comply ? 'text-[#BF40BF] border-[#BF40BF] ': 'hover:text-gray-700 hover:border-gray-400'" class="inline-block p-4 rounded-t-lg border-b-4">{{ tab.description }}</button>
                    </li>
                </ul>
            </div>
        </div>
    <div v-if="comply == 4" class="-ml-2 mt-2 relative w-full bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex flex-shrink-0 justify-between mt-4 ml-3 text-sm font-semibold">
                <div :class="reOpenedCount == proceedingData.length ? '' : 'mt-2'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 -mt-1 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <span class="mt-5">Court Decision</span>
                </div>
                <div>
                    <button v-if="caseStatus == 1 && reOpenedCount != proceedingData.length && courtHearings[0].hearing_schedule <= dateNow" @click="showAddProceedingDialog(caseData)" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCourtProceeding" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">
                        Add Court Decision
                    </button>
                    <button v-if="caseStatus == 1 && reOpenedCount == proceedingData.length" @click="showUpdateProceedingDialog(proceedingData[0])" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCourtProceeding" class="inline-block px-5 py-2.5 mr-3 bg-[#BF40BF] text-white font-semibold text-xs leading-tight uppercase rounded-md border border-[#BF40BF] hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">
                        Update Court Decision
                    </button>
                </div>
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="relative overflow-x-auto shadow-md my-3 mx-3 rounded-lg">
                <table class="w-full text-xs text-left text-gray-700 ">
                    <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                        <tr>
                            <th scope="col" class="px-5 py-4 text-left">
                                Case Decision
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Minimum Sentence
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Maximum Sentence
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Minimum Fines
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Maximum Fines
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Last Court Action
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="proceedingData.length > 0">
                        <tr v-for="proceeding in proceedingData" :key="proceeding" class="bg-white border-b text-xs text-center">
                            <td class="px-5 py-4 text-black text-left">
                                {{ proceeding.caseDecision.description }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ !proceeding.minimum_sentence ? 'N/A' : proceeding.minimum_sentence }} {{ getSentenceDuration(proceeding.minimum_duration)}}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ !proceeding.maximum_sentence ? 'N/A' : proceeding.maximum_sentence }} {{ getSentenceDuration(proceeding.maximum_duration)}}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ !proceeding.minimum_fines ? 'N/A' : proceeding.minimum_fines }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ !proceeding.maximum_fines ? 'N/A' : proceeding.maximum_fines }}
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap text-center">
                                {{ formatDate(proceeding.last_court_action) }}
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="proceedingData.length == 0">
                        <tr class="bg-white border-b ">
                            <td class="px-6 py-4 text-black text-center" colspan="6" >
                                No court decision yet
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
      </div>
    <div v-if="comply == 1" class="-ml-2 mr-2 mt-2 relative bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
               </svg>
               Court Hearings
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="relative overflow-x-auto shadow-md my-3 mx-3 rounded-lg">
                <table class="w-full text-xs text-left text-gray-700 ">
                    <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                        <tr>
                            <th scope="col" class="px-5 py-4 text-left">
                                Type of Hearing
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Hearing Schedule
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Start and End Time
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Judge Assigned
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Raffle Court
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-5 py-3 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="courtHearings.length > 0">
                        <tr v-for="data in courtHearings" :key="data" class="bg-white border-b text-xs text-center">
                            <td class="px-5 py-4 text-black text-left">
                                {{ data.hearingType.description }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ formatDate(data.hearing_schedule) }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ formatTime(data.start_time) }} - {{ formatTime(data.end_time) }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ data.judgeAssigned.name }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ data.raffledCourt.description }}
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap text-center">
                                <span v-if="data.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">Pending</span>
                                <span v-if="data.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-700 rounded-md">Cancelled</span>
                                <span v-if="data.status == 2" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Completed</span>
                            </td>
                            <td class="px-5 py-3 text-right">
                                <button @click="showRemarks(data.remarks)" type="button" class="bg-transparent mr-4 py-1.5" title="View Remarks">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="courtHearings.length == 0">
                        <tr class="bg-white border-b ">
                            <td class="px-6 py-4 text-black text-center" colspan="6" >
                                No court hearing schedule
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
      </div>
      <div v-if="comply == 2" class="-ml-2 mt-2 mr-2 relative bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
               </svg>
               Document Emailed & Served
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="relative overflow-x-auto shadow-md my-3 mx-3 rounded-lg">
                <table class="w-full text-xs text-left text-gray-700 ">
                    <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                        <tr>
                            <th scope="col" class="px-5 py-4 text-left">
                                Type of Document
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Proccesing Office
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Date Recieved
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Sender
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Reciever
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="documentServedData.length > 0">
                        <tr v-for="data in documentServedData" :key="data" class="bg-white border-b text-xs text-center">
                            <td class="px-5 py-4 text-black text-left">
                                {{ data.documentType.description }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ data.office.description }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ !data.sended_date ? '-- --' : formatDate(data.sended_date) }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ data.sender }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ data.reciever }}
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap text-center">
                                <span v-if="data.status == null" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-600 rounded-md">Waiting to Send</span>
                                <span v-if="data.status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-200 text-red-700 rounded-md">Pending</span>
                                <span v-if="data.status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">Acknowledge</span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="documentServedData.length == 0">
                        <tr class="bg-white border-b ">
                            <td class="px-6 py-4 text-black text-center" colspan="6" >
                                No documents served
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
      </div>
     <div v-if="comply == 3" class="-ml-2 mt-2 relative w-full bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                </svg>
               Custodies
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="relative overflow-x-auto shadow-md my-3 mx-3 rounded-lg">
                <table class="w-full text-xs text-left text-gray-700 ">
                    <thead class="text-xs bg-[#BF40BF] text-white uppercase text-center">
                        <tr>
                            <th scope="col" class="px-5 py-4 text-left">
                                Detainee Name
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Height
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Weight
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Birthdate
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Latest Transfer Status
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="custodiesData.length > 0">
                        <tr v-for="custodies in custodiesData" :key="custodies" class="bg-white border-b text-xs text-center">
                            <td class="px-5 py-4 text-black text-left">
                                {{ custodies.lname }}, {{ custodies.fname }} {{ !custodies.mname ? '' : custodies.mname[0] }} {{ custodies.suffix }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ custodies.height }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ custodies.weight }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ formatDate(custodies.birth_date) }}
                            </td>
                            <td class="px-5 py-3 ">
                                {{ custodies.address }}
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap text-center">
                                <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 0 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-amber-200 text-amber-600 rounded-md">PNP - {{ formatDate(custodies.pnp_status_date) }}</span>
                                <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 1 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-200 text-blue-600 rounded-md">BJMP - {{ formatDate(custodies.bjmp_status_date) }}</span>
                                <span v-if="custodies.pnp_status == 1 && custodies.bjmp_status == 1 && custodies.bucor_status == 1" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-200 text-green-600 rounded-md">BuCor - {{ formatDate(custodies.bucor_status_date) }}</span>
                                <span v-if="custodies.pnp_status == 0 && custodies.bjmp_status == 0 && custodies.bucor_status == 0" class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-600 rounded-md">No Transfer History</span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="custodiesData.length == 0">
                        <tr class="bg-white border-b ">
                            <td class="px-6 py-4 text-black text-center" colspan="6" >
                                No custodies added
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
      </div>
     <div>
        <CourtProceedingDialog
        ref="CourtProceedingDialog"
        v-on:refresh="initView(caseId)"
        />
        </div>
      <div v-show="showTransferDialog" tabindex="-1" aria-hidden="false" class="checkFade animated  modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md mx-auto top-48 h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="pb-6 text-center">
                            <div class="p-6 mb-2 font-semibold">Do you really want to transfer this case to docket ?</div>
                        <div>
                            <button @click="showTransferDialog = false" type="button" class="inline-block px-6 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
                            <button @click="AddDocketCase()" type="button" class="inline-block px-6 py-2.5 bg-white text-[#BF40BF] font-semibold text-xs leading-tight uppercase rounded hover:bg-[#BF40BF] hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showRemarksDialog" tabindex="-1" aria-hidden="false" class="checkFade animated  modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md mx-auto top-32 h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between bg-white p-4 border-b border-gray-200 rounded-t-md">
                         <div class="text-sm font-semibold leading-normal text-gray-800" id="exampleModalLabel">
                              <h5 class="text-left">View Remarks</h5>
                         </div>
                          <button @click="showRemarksDialog = false" type="button" class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </button>
                    </div>
                    <div class="modal-body rounded-md relative">
                        <div class="text-left ml-5 mt-2 text-[13px] text-gray-800 font-bold">Remarks</div>
                        <div><textarea
                            disabled
                            v-model="remarks"
                            rows="10"
                            type="text"
                            class=" ml-4 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-200 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                        </div>
                    </div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-4 border-t border-gray-200 rounded-b-md">
                        <button @click="showRemarksDialog = false" type="button" class="inline-block px-5 py-2.5 bg-white text-gray-500 font-semibold text-xs leading-tight uppercase border border-gray-400 rounded-md hover:shadow-lg hover:text-white hover:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Close</button>
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
import CourtProceedingDialog from '../Modals/CourtProceedingDialog.vue';

export default {
    components: {
        CourtProceedingDialog
    },
    data(){
        return{
            token: localStorage.getItem("dimts_token"),
            isSubmitting: false,
            showTransferDialog: false,
            showRemarksDialog: false,
            generatingReport: false,
            remarks: null,

            //Case Details
            caseData: [],
            caseId: null,
            caseNumber: "1",
            caseType: "",
            caseTitle: "",
            caseDesc: "",
            caseStatus: null,
            reOpenedCount: null,
            courtHearings: [],
            recievedDate: "",
            dateNow: moment(new Date()).format('YYYY-MM-DD'),

            caseDecisionData: [],
            proceedingData: [],
            documentServedData: [],
            custodiesData: [],

            comply: 1,
            tabs: [
                { id: 1, description: 'Court Hearings'},
                { id: 2, description: 'Documents' },
                { id: 3, description: 'Custodies' },
                { id: 4, description: 'Court Decision' },
            ],
            tab: { id: 1, description: 'Court Hearing'}
        }
    },
    methods: {
        initView(id){
            this.isSubmitting = false
            this.comply = 1
            axios.get(this.$store.state.serverUrl + '/cases/getProceedings/' + id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.caseId = res.data.id
                this.caseData = res.data
                this.caseNumber = res.data.case_no
                this.caseType = res.data.caseType.description
                this.recievedDate = res.data.date_recieved
                this.caseTitle = res.data.case_title
                this.caseDesc = res.data.case_description
                this.caseStatus = res.data.caseStatus
                this.reOpenedCount = res.data.reopenCount + 1
                this.courtHearings = res.data.courtHearings

                axios.get(this.$store.state.serverUrl + '/case-decision/findAllCaseDecisionByCaseType/' + this.caseData.caseType.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((decision)=>{
                     this.caseDecisionData = decision.data
                });

                axios.get(this.$store.state.serverUrl + '/proceedings/' + this.caseId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((proceeding)=>{
                    this.proceedingData = proceeding.data
                });

                axios.get(this.$store.state.serverUrl + '/documents/findOneByCaseId/' + this.caseId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((documents)=>{
                    this.documentServedData = documents.data
                });

                axios.get(this.$store.state.serverUrl + '/custodies/findAllCustodyById/' + this.caseId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((custody)=>{
                    this.custodiesData = custody.data
                });
            });
        },
        showAddProceedingDialog(data){
            this.$refs.CourtProceedingDialog.initializeAdd(data)
        },
        showUpdateProceedingDialog(data){
            this.$refs.CourtProceedingDialog.initializeUpdate(data)
        },
        showRemarks(data){
            this.showRemarksDialog = true
            this.remarks = data
        },
        getSentenceDuration(data){
            if(data == 1){
                return "Days"
            }
            else if(data == 2){
                return "Months"
            }
            else if(data == 3){
                return "Years"
            }
            else{
                return ""
            }
        },
        changeTab(data){
            this.tab = data;
            this.comply = data.id
        },
        AddDocketCase(){
            let formData = {
                caseId: this.caseId
            }
            axios.post(this.$store.state.serverUrl + '/cases/updateCaseStatusToFalse', formData, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                if(res){
                    const toast = useToast();
                    toast.success("Transfered to Docket Case", {
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    showCloseButtonOnHover: true,
                    });
                    this.showTransferDialog = false,
                    this.initView(this.caseId)
                }
            });
        },
        printReport(){
            this.generatingReport = true
            let formData = {
                court_hearings: this.courtHearings,
                document: this.documentServedData,
                custodies: this.custodiesData,
                proceeding: this.proceedingData
            }

            axios.post(this.$store.state.serverUrl + '/pdf-generator/printReport', formData).then((res)=>{
                if(res){
                    this.generatingReport = false
                    const blob = new Blob([
                        res.data
                    ], {type: 'application/pdf'})
                    var objecURL = URL.createObjectURL(blob)
                    window.open(objecURL)
                }
            });
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        formatTime(time){
            return moment(time,'h:mm a').format('h:mm a');
        }
    },
}
</script>

<style scoped>
.invalid {
    border-width: 1px;
    border-color: red;
}
.modal{
    background-color: rgba(0,0,0,0.5);
}
</style>