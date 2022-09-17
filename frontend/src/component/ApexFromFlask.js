import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
export class ApexFromFlask extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Open",
              data:this.props.dataarr
          }],
          options: {
            chart: {
              redrawOnParentResize: true,
              height: 350,
              type: 'line',
              zoom: {
                enabled: true
              },  
             
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'center'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5,
                
              },
            },
            xaxis: {
              categories: ["1","3","5","6"]
            }
          },
        
        
        };
      }
  fetch=()=>{

  }
  render() {
    return (
        
        
      <div>
        <button onClick={fetch}>fetch</button>
        {this.props.dataarr}
        <ReactApexChart options={this.state.options} series={
        this.state.series} type="area" height={350}/></div>
    )
  }
}

export default ApexFromFlask