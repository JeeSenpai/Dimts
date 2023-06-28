<template>
    <div class="checkFade animated">
        <div class="mr-3 bg-white rounded-lg">
            <div class="flex ml-3 text-base font-semibold flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="inline w-6 h-5 mr-1 mt-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
              </svg>
              <div class="mt-6">
                Predicted Years of Imprisonment Per Case
              </div>
              <div class="mt-4">
                <select v-model="selectedCluster" @change="selectCluster()" class="ml-3.5 px-2 py-2.5 w-[13rem] text-xs rounded-lg bg-gray-100 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]">
                    <option value="1">By Case Status</option>
                    <option value="2">By Case Level</option>
                </select>
              </div>
              <div class="mt-4">
                <input 
                    v-model="searchText"
                    @keyup="filteredDots()"
                    type="text"
                    placeholder="Search"
                    class=" ml-5 mr-5 px-2 py-2.5 w-[92%] text-xs rounded-lg bg-gray-100 border-0 shadow-lg focus:border-[#BF40BF] focus:ring-[#BF40BF]"/>
                </div>
            </div>
            <canvas
                ref="myChart">
            </canvas>
        </div>
        <button type="button" id="button" data-bs-toggle="modal" data-bs-target="#staticBackdropCaseDetails" class="hidden bg-transparent mr-2.5 py-1.5"></button>
        <div>
            <CaseDetails
            ref="CaseDetails"
            />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Chart from 'chart.js';
import CaseDetails from '../Modals/CaseDetailsDialog.vue';

export default {
    components: {
        Chart,
        CaseDetails
    },
    data(){
        return {
            token: localStorage.getItem("dimts_token"),
            data: null,
            searchText: null,
            selectedCluster: 1,
            chartData: null,
            chartOptions: null,
            backendUrl: this.$store.state.serverUrl
        }
    },
    methods: {
        // Plot Clustering through case status
        plotDBSCAN(dataPoints, dataPoints2) {
            
            this.chartData = {
            datasets: [
                {
                    label: 'Active Criminal Cases',
                    data: dataPoints,
                    backgroundColor: 'rgb(191 64 191)',
                    borderColor: 'rgb(191 64 191)',
                    hoverBackgroundColor: 'rgb(191 64 191)',
                    hoverBorderColor: 'rgb(191 64 191)',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1
                },
                {
                    label: 'Docket Criminal Cases',
                    data: dataPoints2,
                    backgroundColor: 'rgb(156 163 175)',
                    borderColor: 'rgb(156 163 175)',
                    hoverBackgroundColor: 'rgb(156 163 175)',
                    hoverBorderColor: 'rgb(156 163 175)',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
               ],
            };

            this.chartOptions = {
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
                            max: 50,
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
                            max: 50,
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
                            var level = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].level;
                            var label = level < 6 ? case_no + " - " +  case_title +  ' ( Level ' + level + ' )' : case_no + " - " +  case_title + ' ( Life Imprisonment )' ;
                            return label
                        }
                    }
                },
                onClick: function(event, elements) {
                    if (elements.length > 0) {
                        var ref = this.$refs.CaseDetails;
                        var datasetIndex = elements[0]._datasetIndex;
                        var index = elements[0]._index;
                        var dataset = myChart.data.datasets[datasetIndex];
                        var data = dataset.data[index].id;
                        // Add your onclick code here
                        axios.get( this.backendUrl + '/cases/' + data, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                            ref.initializeView(res.data)
                            document.getElementById('button').click()
                        })
                    }
                }.bind(this)
            };

            const ctx = this.$refs.myChart.getContext('2d');
                const myChart = new Chart(ctx, {
                type: 'scatter',
                data: this.chartData,
                options: this.chartOptions,
            });
        },
        
        // Plot Clustering through level
        plotDBSCANLevel(dataPoints1, dataPoints2, dataPoints3, dataPoints4, dataPoints5, dataPoints6) {
            
            this.chartData = {
            datasets: [
                {
                    label: 'Level 1',
                    data: dataPoints1,
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    hoverBackgroundColor: 'orange',
                    hoverBorderColor: 'orange',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1
                },
                {
                    label: 'Level 2',
                    data: dataPoints2,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    hoverBackgroundColor: 'green',
                    hoverBorderColor: 'green',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
                {
                    label: 'Level 3',
                    data: dataPoints3,
                    backgroundColor: '#ffd700',
                    borderColor: '#ffd700',
                    hoverBackgroundColor: '#ffd700',
                    hoverBorderColor: '#ffd700',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
                {
                    label: 'Level 4',
                    data: dataPoints4,
                    backgroundColor: '#4b0082',
                    borderColor: '#4b0082',
                    hoverBackgroundColor: '#4b0082',
                    hoverBorderColor: '#4b0082',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
                {
                    label: 'Level 5',
                    data: dataPoints5,
                    backgroundColor: '#f08080',
                    borderColor: '#f08080',
                    hoverBackgroundColor: '#f08080',
                    hoverBorderColor: '#f08080',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
                {
                    label: 'Life Imprisonment',
                    data: dataPoints6,
                    backgroundColor: '#c71585',
                    borderColor: '#c71585',
                    hoverBackgroundColor: '#c71585',
                    hoverBorderColor: '#c71585',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hitRadius: 1,
                },
               ],
            };

            this.chartOptions = {
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
                            max: 50,
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
                            max: 50,
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
                            var level = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].level;
                            var label = level < 6 ? case_no + " - " +  case_title +  ' ( Level ' + level + ' )' : case_no + " - " +  case_title + ' ( Life Imprisonment )' ;
                            return label
                        }
                    }
                },
                onClick: function(event, elements) {
                    if (elements.length > 0) {
                        var ref = this.$refs.CaseDetails;
                        var datasetIndex = elements[0]._datasetIndex;
                        var index = elements[0]._index;
                        var dataset = myChart.data.datasets[datasetIndex];
                        var data = dataset.data[index].id;
                        // Add your onclick code here
                        axios.get( this.backendUrl + '/cases/' + data, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                            ref.initializeView(res.data)
                            document.getElementById('button').click()
                        })
                    }
                }.bind(this)
            };

            const ctx = this.$refs.myChart.getContext('2d');
                const myChart = new Chart(ctx, {
                type: 'scatter',
                data: this.chartData,
                options: this.chartOptions,
            });
        },
        
        setDataPointByCaseStatus(){
            let dataPoints = [];
            let dataPoints2 = [];

            axios.get(this.$store.state.serverUrl + '/cases/findAllActiveCasesClusters', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res1)=>{
                    for (let i = 0; i < res1.data.length; i++) {
                        let obj = {
                            x: null,
                            y: null,
                            id: null,
                            case_no: null,
                            case_title: null,
                            level: null
                        }
                        obj.x=res1.data[i].point_x
                        obj.y=res1.data[i].point_y
                        obj.id = res1.data[i].id
                        obj.case_no = res1.data[i].case_no
                        obj.case_title = res1.data[i].case_title
                        obj.level = res1.data[i].level
                        dataPoints.push(obj)
                    }

                    axios.get(this.$store.state.serverUrl + '/cases/findAllDocketCasesClusters', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res2)=>{
                                for (let i = 0; i < res2.data.length; i++) {
                                let obj = {
                                    x: null,
                                    y: null,
                                    id: null,
                                    case_no: null,
                                    case_title: null,
                                    level: null,
                                }
                                obj.x=res2.data[i].point_x
                                obj.y=res2.data[i].point_y
                                obj.id = res2.data[i].id
                                obj.case_no = res2.data[i].case_no
                                obj.case_title = res2.data[i].case_title
                                obj.level = res2.data[i].level
                                dataPoints2.push(obj)
                              }
                            
                            this.plotDBSCAN(dataPoints, dataPoints2);
                    });
            });
        },

        setDataPointByLevel(){
            let dataPoints1 = [];
            let dataPoints2 = [];
            let dataPoints3 = [];
            let dataPoints4 = [];
            let dataPoints5 = [];
            let dataPoints6 = [];

            axios.get(this.$store.state.serverUrl + '/cases/findAllLevelClusters', {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                                for (let i = 0; i < res.data.length; i++) {
                                let obj = {
                                    x: null,
                                    y: null,
                                    id: null,
                                    case_no: null,
                                    case_title: null,
                                    level: null,
                                }
                                obj.x=res.data[i].point_x
                                obj.y=res.data[i].point_y
                                obj.id = res.data[i].id
                                obj.case_no = res.data[i].case_no
                                obj.case_title = res.data[i].case_title
                                obj.level = res.data[i].level
                                
                                switch (obj.level) {
                                case 1:
                                    dataPoints1.push(obj)
                                    break;
                                case 2:
                                    dataPoints2.push(obj)
                                    break; 
                                case 3:
                                    dataPoints3.push(obj)
                                    break; 
                                case 4:
                                    dataPoints4.push(obj)
                                    break; 
                                case 5:
                                    dataPoints5.push(obj)
                                    break;
                                case 6:
                                    dataPoints6.push(obj)
                                    break;
                                }

                              }
                            //const cluster1 = this.dbscan(dataPoints, epsilon, minPts)
                            //const cluster2 = this.dbscan(dataPoints2, epsilon, minPts)
                            this.plotDBSCANLevel(dataPoints1, dataPoints2, dataPoints3, dataPoints4, dataPoints5, dataPoints6);
                            
                    });

        },
        filteredDots() {
        if (this.searchText == "" || !this.searchText) {
            this.selectCluster()
        }

        else if (this.selectedCluster == 1) {

        let filteredDataPoints = [];
        let filteredDataPoints2 = [];

        axios.get(this.$store.state.serverUrl + '/cases/findAllActiveCasesClusters', { headers: { Authorization: `Bearer  ${this.token}` } })
            .then((res1) => {
            for (let i = 0; i < res1.data.length; i++) {
                if (res1.data[i].case_no.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    res1.data[i].case_title.toLowerCase().includes(this.searchText.toLowerCase())) {
                let obj = {
                    x: res1.data[i].point_x,
                    y: res1.data[i].point_y,
                    id: res1.data[i].id,
                    case_no: res1.data[i].case_no,
                    case_title: res1.data[i].case_title,
                    level: res1.data[i].level
                };
                filteredDataPoints.push(obj);
                }
                }
            

            axios.get(this.$store.state.serverUrl + '/cases/findAllDocketCasesClusters', { headers: { Authorization: `Bearer  ${this.token}` } })
            .then((res2) => {
                for (let i = 0; i < res2.data.length; i++) {
                    if (res2.data[i].case_no.toLowerCase().includes(this.searchText.toLowerCase()) ||
                        res2.data[i].case_title.toLowerCase().includes(this.searchText.toLowerCase())) {
                    let obj = {
                        x: res2.data[i].point_x,
                        y: res2.data[i].point_y,
                        id: res2.data[i].id,
                        case_no: res2.data[i].case_no,
                        case_title: res2.data[i].case_title,
                        level: res2.data[i].level
                    };
                    filteredDataPoints2.push(obj);
                    }
                }
                this.plotDBSCAN(filteredDataPoints, filteredDataPoints2);
              });
           });
        }

        else if (this.selectedCluster == 2) {
            let filteredDataPoints1 = [];
            let filteredDataPoints2 = [];
            let filteredDataPoints3 = [];
            let filteredDataPoints4 = [];
            let filteredDataPoints5 = [];
            let filteredDataPoints6 = [];

            axios.get(this.$store.state.serverUrl + '/cases/findAllLevelClusters', { headers: { Authorization: `Bearer  ${this.token}` } })
                .then((res) => {
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].case_no.toLowerCase().includes(this.searchText.toLowerCase()) ||
                            res.data[i].case_title.toLowerCase().includes(this.searchText.toLowerCase())) {
                        let obj = {
                            x: res.data[i].point_x,
                            y: res.data[i].point_y,
                            id: res.data[i].id,
                            case_no: res.data[i].case_no,
                            case_title: res.data[i].case_title,
                            level: res.data[i].level
                        };
                        switch (obj.level) {
                            case 1:
                                filteredDataPoints1.push(obj)
                                break;
                            case 2:
                                filteredDataPoints2.push(obj)
                                break; 
                            case 3:
                                filteredDataPoints3.push(obj)
                                break; 
                            case 4:
                                filteredDataPoints4.push(obj)
                                break; 
                            case 5:
                                filteredDataPoints5.push(obj)
                                break;
                            case 6:
                                filteredDataPoints6.push(obj)
                                break;
                          }
                        }
                    }
                    this.plotDBSCANLevel(filteredDataPoints1, filteredDataPoints2, filteredDataPoints3, filteredDataPoints4, filteredDataPoints5, filteredDataPoints6)
                });
            }
        },
        selectCluster(){
            if(this.selectedCluster == 1){
                this.setDataPointByCaseStatus()
            }
            else{
                this.setDataPointByLevel()
            }
        }
    },
    mounted() {
        this.setDataPointByCaseStatus()
    },
}
</script>
<style>

</style>