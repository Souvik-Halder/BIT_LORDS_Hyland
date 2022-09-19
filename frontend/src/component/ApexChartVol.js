import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import PieChart from './PieChart';

export class ApexChartVol extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Volume',
          data: this.props.volarr,
        }
      ],
      options: {
        chart: {
          redrawOnParentResize: true,
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'center',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.props.datearr,     
               range: 28,
          zoom: {
            enabled: true,
          },
          labels: {
            formatter: function(value) {
              return value.toFixed(2)    
        }
      }
        },
      },
    };
  }

 newvolarr=[]

  dayset = () => {
    this.newvolarr = [];
    this.newdatearr = [];
   
    for (let index = 0; index < 30; index++) {
      this.newdatearr.push(this.props.datearr[index]);
      this.newvolarr.push(this.props.volarr[index])
    }
    this.setState({
      series: [
        {
          name: 'Volume',
          data: this.newvolarr,
        }
      ],
      options: {
        chart: {
          redrawOnParentResize: true,
          height: 350,
          type: 'line',
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'center',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.newdatearr,
        },
      },
    });
  };

  alldayset = () => {
    this.newdatearr = [];
    this.newvolarr=[]

    this.setState({
      series: [
        {
          name: 'Volume',
          data: this.props.volarr,
        },
        {
          name: 'Close',
          data: this.props.closearr,
          color: '#ff0000',
        },
      ],
      options: {
        chart: {
          redrawOnParentResize: true,
          height: 350,
          type: 'line',
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'center',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.props.datearr,
        },
      },
    });
  };

  sixtydayset = () => {
    this.newclosearr = [];
    this.newvolarr=[]
    for (let index = 0; index < 60; index++) {
      this.newdatearr.push(this.props.datearr[index]);
      this.newvolarr.push(this.props.volarr[index]);
     
    }
    this.setState({
      series: [
        {
          name: 'Volume',
          data: this.newvolarr,
        }
      ],
      options: {
        chart: {
          redrawOnParentResize: true,
          height: 350,
          type: 'line',
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'center',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.newdatearr,
        },
      },
    });
  };
  nintydayset = () => {
    this.newclosearr = [];
    this.newvolarr=[]
    for (let index = 0; index < 90; index++) {
      this.newdatearr.push(this.props.datearr[index]);
      this.newvolarr.push(this.props.volarr[index]);
      
    }
    this.setState({
      series: [
        {
          name: 'Volume',
          data: this.newvolarr,
        }
      ],
      options: {
        chart: {
          redrawOnParentResize: true,
          height: 350,
          type: 'line',
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'center',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.newdatearr,
        },
      },
    });
  };

  render() {
    return (
      <>
      
        <button onClick={this.dayset}>Fetch Data</button>
        <div>
          <button onClick={this.dayset}>30 days</button>
          <button onClick={this.sixtydayset}>60 days</button>
          <button onClick={this.nintydayset}>90 days</button>
          <button onClick={this.alldayset}>All Days</button>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type='area'
            height={350}
          />

          {/* <PieChart/> */}
        </div>
      </>
    );
  }
}

export default ApexChartVol;
