<template>
<div>
    <div v-if="mainMenu == true" class="checkFade animated">
        <div class="flex flex-row space-x-2">
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; hearingType = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Court Hearing Types</div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; documentType = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Document Types</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="flex flex-row space-x-2 mt-2">
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; judges = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Judges</div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; raffleCourt = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Raffled Courts</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="flex flex-row space-x-2 mt-2">
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; caseDecision = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Case Decisions</div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; offices = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Offices</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="flex flex-row space-x-2 mt-2">
            <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button  type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Case Level Checklist</div>
                        </div>
                    </div> 
                </div>
            </div>
            <!-- <div class="w-1/2 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
                        <div>
                            <button @click="mainMenu = false; offices = true" type="button" class="float-right bg-transparent hover:bg-[#BF40BF] text-[#BF40BF] text-sm font-semibold hover:text-white py-1.5 px-2 border border-[#BF40BF] hover:border-transparent rounded">View</button>
                            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2">Offices</div>
                        </div>
                    </div> 
                </div>
            </div> -->
        </div>
    </div>
    <div v-show="hearingType == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; hearingType = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Court Hearing Types</div>
        </div>
        <HearingType
            ref="HearingType"
        />
    </div>
    <div v-show="documentType == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; documentType = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Document Types</div>
        </div>
        <DocumentTypes
            ref="DocumentTypes"
        />
    </div>
    <div v-show="judges == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; judges = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Judges</div>
        </div>
        <Judges
            ref="Judges"
        />
    </div>
    <div v-show="raffleCourt == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; raffleCourt = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Raffled Courts</div>
        </div>
        <RaffledCourt
            ref="RaffledCourt"
        />
    </div>
    <div v-show="caseDecision == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; caseDecision = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Case Decision</div>
        </div>
        <CaseDecisions
            ref="CaseDecisions"
        />
    </div>
    <div v-show="offices == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; offices = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Offices</div>
        </div>
        <Offices
            ref="Offices"
        />
    </div>
    <div v-show="checklist == true" class="checkFade animated">
        <div class="flex justify-between">
            <button @click=" mainMenu = true; offices = false" class="mr-3 rounded-xl px-2 mb-2 py-1.5 text-sm border-2 font-semibold bg-transparent border-[#BF40BF] text-[#BF40BF]" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline h-5 w-5 mr-1 mb-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>Back
            </button>
            <div class="text-gray-900 font-bold text-left text-md mt-2 mb-2 mr-5">Case Checklist</div>
        </div>
        <Offices
            ref="Offices"
        />
    </div>
</div>
</template>

<script>
import HearingType from '../Utils/HearingType.vue';
import DocumentTypes from '../Utils/DocumentTypes.vue';
import Judges from '../Utils/Judges.vue';
import RaffledCourt from '../Utils/RaffledCourt.vue';
import CaseDecisions from '../Utils/CaseDecisions.vue';
import Offices from '../Utils/Offices.vue';

export default {
    components: {
        HearingType,
        DocumentTypes,
        Judges,
        RaffledCourt,
        CaseDecisions,
        Offices
    },
    data(){
        return {
            mainMenu: true,

            //Utils
            hearingType: false,
            documentType: false,
            judges: false,
            raffleCourt: false,
            caseDecision: false,
            offices: false,
            checklist: false
        }
    }
}
</script>

<style scoped>

</style>