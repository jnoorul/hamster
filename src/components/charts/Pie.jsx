import React from 'react';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';


export default function Pie(props) {
  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: props.title,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        point: {
          events: {
            click() {
              alert(this.name);
            },
          },
        },
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'black',
          },
          connectorColor: 'silver',
        },
      },
    },
    series: props.series,
  };

  return (<ReactHighCharts config={config} />);
}


Pie.propTypes = {
  title: PropTypes.string,
  series: PropTypes.array,
};

