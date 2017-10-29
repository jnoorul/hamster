import React from 'react';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';


export default function Column(props) {
  const config = {
    chart: {
      type: 'column',
    },
    title: {
      text: props.title,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'Stocks',
    },
    yAxis: {
      title: {
        text: 'Percentage of Stock',
      },

    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',

        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
    series: props.series,
  };

  return (<ReactHighCharts config={config} />);
}


Column.propTypes = {
  title: PropTypes.string,
  series: PropTypes.array,
};

