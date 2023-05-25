<template>
<div>
  <div class="checkFade animated overflow-x-hidden -ml-2">
    <div class="flex flex-row space-x-2 ml-2">
            <div class="w-1/3 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-row justify-between">
                          <div class="text-gray-900 font-bold text-left text-md mt-2">
                            Criminal Cases
                            <div class="font-bold text-5xl mt-14">{{ criminalCases }}</div>
                          </div>
                          <div>
                            <canvas width="140" height="140"
                                  ref="myChart1">
                            </canvas>
                          </div>
                    </div> 
                </div>
            </div>
            <div class="w-1/3 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-row justify-between">
                          <div class="text-gray-900 font-bold text-left text-md mt-2">
                            Civil Cases
                            <div class="font-bold text-5xl mt-14">{{ civilCases }}</div>
                          </div>
                          <div>
                            <canvas width="140" height="140"
                                  ref="myChart2">
                            </canvas>
                          </div>
                    </div> 
                </div>
            </div>
            <div class="w-1/3 h-38 item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4 flex flex-row justify-between">
                      <div class="text-gray-900 font-bold text-left text-md mt-2">
                        Docket Cases
                        <div class="font-bold text-5xl mt-14">{{ docketCases }}</div>
                      </div>
                          <div>
                            <canvas width="140" height="140"
                                  ref="myChart3">
                            </canvas>
                          </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="flex flex-row space-x-2 ml-2 mt-2">
            <div class="w-full h-[400px] item-center lg:flex">
                <div class=" w-full -ml-2 h-38 item-center lg:flex">
                    <div class="shadow-lg w-full bg-white rounded-lg p-4">
                            <canvas
                                  ref="myChart4">
                            </canvas>
                    </div> 
                </div>
              </div>
        </div>
      </div>
</div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js';
export default {
    name: "Dashboard",
    components: {
        Chart
    },
    data() {
        return {
             token: localStorage.getItem("dimts_token"),
             totalCases: null,
             criminalCases: null,
             civilCases: null,
             docketCases: null,
             
        }
    },
    methods: {
        // Function for determining if theres and active semester
        init(){
            
            let option = {
              legend: {
                display: false,
              },
              responsive: true
            }

            axios.get(this.$store.state.serverUrl + '/cases/countCases/' + 0, {headers: {Authorization: `Bearer  ${this.token}`}}).then((totalCase)=>{
                this.totalCases = totalCase.data[0].caseCount

                                  let criminalData = {
                                    labels: [
                                        'Criminal Cases',
                                        'Total Cases'
                                    ],
                                    datasets: [
                                        {
                                          backgroundColor: ['#ff7518', '#D3D3D3'],
                                          data: [this.criminalCases, this.totalCases]
                                        }
                                    ],    
                                  };


                                  let civilData = {
                                      labels: [
                                          'Civil Cases',
                                          'Total Cases'
                                      ],
                                      datasets: [
                                          {
                                            backgroundColor: ['#36A2EB', '#D3D3D3'],
                                            data: [this.civilCases, this.totalCases]
                                          }
                                      ],    
                                  };
                                  
                                  let docketData = {
                                        labels: [
                                            'Docket Cases',
                                            'Total Cases'
                                        ],
                                        datasets: [
                                            {
                                              backgroundColor: ['#ff3232', '#D3D3D3'],
                                              data: [this.docketCases, this.totalCases]
                                            }
                                        ],    
                                    };

                                    let monthData = {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                        datasets: [
                                          {
                                            label: 'Cases',
                                            backgroundColor: 'rgba(191, 64, 191, 0.4)',
                                            borderColor: 'rgb(191 64 191)',
                                            borderWidth: 1,
                                            data: [0, 0, 0, 0, this.totalCases, 0, 0, 0, 0, 0, 0, 0]
                                          }
                                        ]
                                  }

                                  const ctx4 = this.$refs.myChart4.getContext('2d');
                                      new Chart(ctx4, {
                                      type: 'bar',
                                      data: monthData,
                                      options: {
                                        responsive: true,
                                        maintainAspectRatio: false
                                      }
                                  });

                                    const ctx2 = this.$refs.myChart2.getContext('2d');
                                      new Chart(ctx2, {
                                      type: 'doughnut',
                                      data: civilData,
                                      options: option,
                                  });

                                    const ctx1 = this.$refs.myChart1.getContext('2d');
                                      new Chart(ctx1, {
                                      type: 'doughnut',
                                      data: criminalData,
                                      options: option,
                                  });

                                  const ctx3 = this.$refs.myChart3.getContext('2d');
                                        new Chart(ctx3, {
                                        type: 'doughnut',
                                        data: docketData,
                                        options: option,
                                  });
                });

        },

        // Function for format date from 2022-01-01 to string
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
          },
    },

    beforeMount(){
      axios.get(this.$store.state.serverUrl + '/cases/countCasesByCaseType/' + 1, {headers: {Authorization: `Bearer  ${this.token}`}}).then((criminal)=>{
                    this.criminalCases = criminal.data[0].caseCount
            });

            axios.get(this.$store.state.serverUrl + '/cases/countCasesByCaseType/' + 2, {headers: {Authorization: `Bearer  ${this.token}`}}).then((civil)=>{
                    this.civilCases = civil.data[0].caseCount
            });

            axios.get(this.$store.state.serverUrl + '/cases/countDocketCase/' + 0, {headers: {Authorization: `Bearer  ${this.token}`}}).then((docket)=>{
                    this.docketCases = docket.data[0].caseCount
            });
    },
    mounted(){
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