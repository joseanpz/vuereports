Vue.prototype.$eventhub = new Vue();



var app = new Vue({
  el: "#app",
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.addData();
    }
  },
  methods: {
    addData: function() {
      this.chart.layout.datarevision = new Date().getTime();
      this.chart.traces[0].y.push(Math.random());
    }
  },
  data() { 
    return {
      chart: {
        uuid: "123",
        uuid2: "1234",
        uuid3: "12345",
        uuid4: "123456",
        uuid5: "1234567",
        uuid6: "123457",
        layout: { 
          title:'reactive charts',
          xaxis: {
            title: { 
              text: 'xaxis title'
            }
          },
          yaxis: {
            title: { 
              text: 'yaxis title'
            }
          }
        },
        traces: [
          {
            y: [],
            line: {
              color: "#5e9e7e",
              width: 4,
              shape: "line"
            }
          }
        ]
      },
      scatterChart: {
        uuid: "321",
        layout: {
          xaxis: {
            range: [ 0.75, 5.25 ]
          },
          yaxis: {
            range: [0, 8]
          },
          title:'Data Labels Hover',
          barmode: 'group'
        },
        traces: [
          {
            x: [1, 2, 3, 4, 5],
            y: [1, 6, 3, 6, 1],
            mode: 'markers',
            type: 'scatter',
            name: 'Team A',
            text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
            marker: { color: 'rgba(0,0,100,1)', size: 12 },
            line: { width: 4, dash: 'solid', shape: 'linear' }
          },
          {
            x: [1, 2, 3, 4, 5],
            y: [3, 1, 4, 2, 5],
            mode: 'markers',
            type: 'scatter',
            name: 'Team A',
            text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
            marker: { color: 'rgba(100,0,0,1)', size: 12 },
            line: { width: 4, dash: 'solid', shape: 'linear' }
          },
          {
            x: [1.5, 2.5, 3.5, 4.5, 5.5],
            y: [4, 1, 7, 1, 4],
            mode: 'markers',
            type: 'scatter',
            name: 'Team B',
            text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
            marker: { color: 'rgba(115,115,0,1)', size: 12 },
            line: { width: 4, dash: 'solid', shape: 'linear' }
          },

        ]
      },
      tablep: {
        uuid: "5432",
        data: [
          {
            type: 'table',
            header: {
              values: [["EXPENSES"], ["Q1"], ["Q2"], ["Q3"], ["Q4"]],
              align: "center",
              line: {width: 1, color: 'black'},
              fill: {color: "grey"},
              font: {family: "Arial", size: 12, color: "white"}
            },
            cells: {
              values: [
                ['Salaries', 'Office', 'Merchandise', 'Legal', 'TOTAL'],
                [1200000, 20000, 80000, 2000, 12120000],
                [1300000, 20000, 70000, 2000, 130902000],
                [1300000, 20000, 120000, 2000, 131222000],
                [1400000, 20000, 90000, 2000, 14102000]
              ],
              align: "center",
              line: {color: "black", width: 1},
              font: {family: "Arial", size: 11, color: ["black"]}
            }
          }
        ]
      }
    }
    
  }  
});
