<template>
    <div class="checkFade animated">
        <div class="mr-3 bg-white rounded-lg">
            <div class="flex ml-3 text-base font-semibold flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1 mt-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
              </svg>
              <div class="mt-3.5">
                DBSCAN Clustering
              </div>
                
            </div>
            <canvas
            ref="myChart">
            </canvas>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
import Chart from 'chart.js';
export default {
    components: {
        Chart
    },
    data(){
        return {
            token: localStorage.getItem("access_token"),
        }
    },
    methods: {
        plotDBSCAN(dataPoints, dataPoints2) {
            const ctx = this.$refs.myChart.getContext('2d');

            const chartData = {
            datasets: [
                {
                    label: 'Active Criminal Cases',
                    data: dataPoints,
                    backgroundColor: 'rgb(191 64 191)',
                    borderColor: 'rgb(191 64 191)',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
                {
                    label: 'Docket Criminal Cases',
                    data: dataPoints2,
                    backgroundColor: 'rgb(156 163 175)',
                    borderColor: 'rgb(156 163 175)',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
            ],
            };

            const chartOptions = {

                layout: {
                    padding: {
                        left: 10,
                        right: 30,
                        top: 20,
                        bottom: 10
                    }
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom',
                        ticks: {
                            beginAtZero: true,
                            max: 30,
                            stepSize: 10
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            max: 40,
                            stepSize: 10
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var case_no = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].case_no;
                            var case_title = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].case_title;
                            var label = case_no+ '\n' +case_title ;
                            return label
                        }
                    }
        }
            };

            const myChart = new Chart(ctx, {
            type: 'scatter',
            data: chartData,
            options: chartOptions,
            });
        },
    },
    mounted() {
        let dataPoints = [];
        let dataPoints2 = [];
        axios.get(this.$store.state.serverUrl + '/cases/findAllActiveCasesClusters', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res1)=>{
                for (let i = 0; i < res1.data.length; i++) {
                    let obj = {
                        x: null,
                        y: null,
                        case_no: null,
                        case_title: null
                    }
                    obj.x=parseFloat(res1.data[i].point_x)
                    obj.y=parseFloat(res1.data[i].point_y)
                    obj.case_no = res1.data[i].case_no
                    obj.case_title = res1.data[i].case_title
                    dataPoints.push(obj)
                }
                console.log(dataPoints)

                axios.get(this.$store.state.serverUrl + '/cases/findAllDocketCasesClusters', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res2)=>{
                        this.plotDBSCAN(dataPoints, dataPoints2);
                });
        });
        
  

        // {  x: 12.2, y: 25.3 ,customLabel: 'Custom Label 2'},
        //     { x: 5.1, y: 16.2 ,customLabel: 'Custom Label 2'}
        //     // ... more data points ...

  
},
    
}
</script>
<style>

</style>