import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";

class EChartOne extends Component {
  getOption = () => {
    return {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius: 0,
        padding: 10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12
        }
      },
      legend: {
        data: [ {
          value: 15,
          name: ''
        }, {
          value: 20,
          name: ''
        }, {
          value: 30,
          name: ''
        }, {
          value: 35,
          name: ''
        }]
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#a8a9bd', '#9395b9', '#656790', '#3e406e'],
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 15,
          name: ''
        }, {
          value: 20,
          name: ''
        }, {
          value: 30,
          name: ''
        }, {
          value: 35,
          name: ''
        }]
      }
      ]
    };
  };
  render() {
    return <ReactEcharts option={this.getOption()} style={{ height: "400px" }} />;
  }
}

export default EChartOne;