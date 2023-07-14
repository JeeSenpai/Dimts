<template>
    <div class="checkFade animated overflow-y-auto">
        <div class="pl-2 pr-2 pt-3 pb-2">
            <div class="bg-white shadow-md rounded-lg">
                <div @click="toggle1 == false ? toggle1 = true : toggle1 = false" class="flex justify-between pt-3 pb-3 pr-3 pl-3 text-lg font-semibold flex-row">
                    <div>Basic Court Etiquette</div>
                    <div v-if="toggle1 == false" class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div v-if="toggle1 == true" class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div v-if="toggle1 == true">
                <div class="flex flex-wrap mx-2 border-t"></div>
                    <div class="whitespace-pre-line text-left mt-2 ml-3 mr-3 pb-2">
                        <div>No matter your role in a court case, litigant, defendant, attorney, witness, or juror, making a good impression on the presiding judicial officer is of utmost importance.  This starts with some basic courtroom etiquette.</div>  
                        <br/>
                        <div>Your actions and appearance show that you respect the court, the Judge, and the importance of the proceedings.</div> 
                        <br/>
                        <div class="space-y-2">
                            <div>• Respect the Court’s time by being on time.</div>
                            <div>• Choose clothing that would be appropriate for a casual business setting.</div>
                            <div>• Remove hats before entering the courtroom.</div> 
                            <div>• Turn off cell phones before entering the courtroom.</div>
                            <div>• Be courteous and act in a professional manner to all those involved in the proceedings. This includes the Judge, court staff, opposing litigants, and attorneys. </div>
                            <div>• Do not interrupt others while they are talking.</div>
                            <div>• Refer to the Judge as “Your Honor.”</div>
                            <div>• Stand up when the Judge and jury enter and leave the courtroom.</div>
                            <div>• Stand when speaking to the Judge.</div>
                            <div>• No food or beverages are allowed in the courtroom.</div>
                            <div>• In most situations children are not allowed in the courtroom unless specifically directed by the Judge. </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div class="pl-2 pr-2 pt-2 pb-2">
            <div class="bg-white shadow-md rounded-lg">
                <div @click="toggle2 == false ? toggle2 = true : toggle2 = false" class="flex justify-between pt-3 pb-3 pr-3 pl-3 text-lg font-semibold flex-row">
                    <div>Jurors</div>
                    <div v-if="toggle2 == false" class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div v-if="toggle2 == true" class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div v-if="toggle2 == true">
                <div class="flex flex-wrap mx-2 border-t"></div>
                    <div class="whitespace-pre-line text-left mt-2 ml-3 mr-3 pb-2">
                        <div class="space-y-2">
                            <div>• Noisy or disruptive conduct is not allowed.</div>
                            <div>• Do not talk to other jurors or be otherwise distracted during the proceedings.</div>
                            <div>• Do not interrupt the proceedings.</div> 
                            <div>• Clothing may be casual, but appropriate for the seriousness of the business of the court.</div>
                            <div>• Hats and caps must be removed before entering the courtroom.</div>
                            <div>• You may bring your cell phone with you but no other electronic devices. Turn off your cell phone. Specific rules regarding cell phone use will be explained by the jury coordinator.</div>
                            <div>• Neither computers nor hand-held devices are allowed. This prohibition covers use of these devices both inside and outside the courthouse as to matters covered by a trial.</div>
                            <div>• Newspapers, magazines, and books are OK to bring, but must be put away.</div>
                            <div>• Smoking is not allowed in the building or the grounds outside the building.</div>
                            <div>• Quiet and close attention to the proceedings is expected.</div>
                            <div>• Do not talk to others about the case.</div>
                            <div>• Jurors must get all of the information about the case from the trial itself.  Do not do further research, read media accounts, or look for other sources of information.  Consider only the evidence presented during trial.</div>
                            <div>• During deliberation, all jurors should be able to express their views and consider the viewpoints of other jurors.</div>
                            <div>• Be respectful of your fellow jurors' opinions and conduct yourself in a professional manner</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div class="pl-2 pr-2 pt-2 pb-2">
            <div class="bg-white shadow-md rounded-lg">
                <div @click="toggle3 == false ? toggle3 = true : toggle3 = false" class="flex justify-between pt-3 pb-3 pr-3 pl-3 text-lg font-semibold flex-row">
                    <div>Witnesses</div>
                    <div v-if="toggle3 == false" class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div v-if="toggle3 == true" class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div v-if="toggle3 == true">
                <div class="flex flex-wrap mx-2 border-t"></div>
                    <div class="whitespace-pre-line text-left mt-2 ml-3 mr-3 pb-2">
                        <div class="space-y-2">
                            <div>• Direct all remarks to the Judge.</div>
                            <div>• Be respectful to the opposing side.</div>
                            <div>• Do not cause interruptions.</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                toggle1: false,
                toggle2: false,
                toggle3: false,
            }
        }
    }
</script>

<style scoped>

</style>