import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
export class ApexFromFlask extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Prediction",
              data:this.props.dataarr,
              color: '#ff0000',
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
              categories:this.props.dayarr,
              labels: {
                formatter: function(value) {
                  return value;   
            }
          }
              
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
      <div>{this.props.dayarr}</div>
        <ReactApexChart options={this.state.options} series={
        this.state.series} type="area" height={350}/></div>
    )
  }
}

export default ApexFromFlask