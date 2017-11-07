import React from 'react';
import ReactHighcharts from 'react-highcharts';
import getConfig from './PieChartConfig';

export default class PieChart extends React.Component {
  render() {
    return (
      <ReactHighcharts config={getConfig()} />
    );
  }
}
