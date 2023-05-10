<template>
<div>
  <div class="checkFade animated flex">
    <div class="flex-col -ml-2 w-full max-h-screen">
    <div class="flex flex-row">
      <div class="relative w-4/5 bg-white overflow-x-auto shadow-md sm:rounded-md">
        <div class="w-full">
            <div class="flex mt-4 ml-3 text-sm font-semibold flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
              </svg>
                
            </div>
            <div class="mt-3 flex flex-wrap mx-2 border-t"/>
            <div class="p-3 flex flex-row h-60">
                  <div class="block p-2 mr-2 w-full bg-white rounded-lg border border-gray-200 shadow-md">
                      <h5 class="mb-2 text-sm text-left font-bold tracking-tight text-gray-900"></h5>
                      <div class="text-sm text-left text-gray-700">
                        <p></p>
                      </div>
                  </div>
            </div>
        </div>
      </div> 
      <div class="w-1/3 ml-2 min-h-5 bg-white overflow-x-hidden shadow-md sm:rounded-md">
          <div class="w-full">
                  <div class="px-3 pt-4 pb-10 text-center">
                    <div> 
                        <div class="text-sm font-semibold text-left">
                           <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="purple" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                        </div>
                    </div>
                    <div class="mt-3 flex flex-wrap border-t"/>

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
import BarChart from '../Charts/BarChart.vue';
import DonutChart from '../Charts/DonutChart.vue';

export default {

    name: "Dashboard",
    components: { BarChart, DonutChart },
    data() {
        return {
             token: localStorage.getItem("access_token"),
             scheduleData: [],

             semester: null,
             schoolYear: null,
             semesterName: null,
             schoolYearName: null,

             currentUser: null,
             subjectLoad: [],
            
            // Data for Bar Graph
            barChartData: {
             datasets: [
                {
                  label: 'User submitted files',
                  data: [ 50, 10, 35, 5],
                  backgroundColor: [ '#006400', '#ffe135', '#228b22', '#ff0000']
                }
              ],

              // These labels appear in the legend and in the tooltips when hovering different arcs
              labels: [ '1st Sem - Before Deadline', '1st Sem - For Approval', '1st Sem - Approved', '1st Sem - Returned'  ]
             },
             barChartOptions: {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          min: 0,
                          max: 80,
                          beginAtZero: true,
                          callback: function (value) {
                             return ((value / this.max) * 100).toFixed(0) + "%"; 
                          },
                          stepSize: 10,
                        },
                      },
                    ],
                  },
             },

              // Data for Doughtnut Chart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              piechartData: {
                datasets: [
                  {
                    data: [1, 2, 3, 4, 5],
                    backgroundColor: ['#4B0082', '#1E90FF', '#8B4513', '#87CEEB', '#808080']
                  }
                ],
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: ['IC', 'ITEd', 'ILEGG', 'IAAS', 'IAdS']
              },
              piechartOptions: {
                responsive: true,
                legend:{
                labels:{
                   boxWidth: 8,
                   usePointStyle: true,
                 }
                }
              }
        };
    },

    methods: {
        // Function for determining if theres and active semester
        init(){
              
        },

        // Function for format date from 2022-01-01 to string
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
          },
    },

    created(){
       this.init();
    }
    
}

</script>

<style scope>

     .modalHead {
         background-color: #105005;
    }

    .minheight {
      min-height: 87vh;
    }

</style>