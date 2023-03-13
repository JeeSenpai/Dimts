<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'

// Fucntion for Doughtnut Chart
export default defineComponent({
  name: 'DonutChart',
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
</script>