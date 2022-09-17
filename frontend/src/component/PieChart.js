import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
export class PieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [13963759, 1972493, 16272, 2788112, 3563646],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Infosys', 'TCS', 'Samsung', 'Autodesk', 'Cognizant'],
            responsive: [{
              breakpoint: 200,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
        };
      }
  render() {
    return (
  <div >
    <ReactApexChart series={this.state.series} options={this.state.options} type="pie" width={380}/>
  </div>
    )
  }
}

export default PieChart