Vue.component('trace-config',{
  props: ["trace"],
  template: '#trace-config-template'
});

Vue.component("scatter", {
  props: ["chart"],
  template: '<div :ref="chart.uuid"></div>',
   mounted() {
    Plotly.plot(
      this.$refs[this.chart.uuid], 
      this.chart.traces, 
      this.chart.layout
    );
  },
  watch: {
    chart: {
      handler: function() {
        Plotly.react(
          this.$refs[this.chart.uuid],
          this.chart.traces,
          this.chart.layout
        );
      },
      deep: true
    }
  }
});

Vue.component("tableplt", {
  props: ["table"],
  template: '<div :ref="table.uuid"></div>',
   mounted() {
    Plotly.plot(
      this.$refs[this.table.uuid], 
      this.table.data
    );
  },
  watch: {
    table: {
      handler: function() {
      	console.log('changing table');
        Plotly.react(
          this.$refs[this.table.uuid],
          this.table.data
        );
      },
      deep: true
    }
  }	
})