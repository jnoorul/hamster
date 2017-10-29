import React from 'react';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';
import HighchartsDrilldown from 'highcharts-drilldown';

HighchartsDrilldown(ReactHighCharts.Highcharts);

export default function Column(props) {
  const config = {
    chart: {
      type: 'column',
    },
    title: {
      text: props.title,
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: `Total percent of ${props.assetClass}`,
      },

    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
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
    drilldown: props.drilldown,
  };

  return (<ReactHighCharts config={config} />);
}


Column.propTypes = {
  title: PropTypes.string,
  series: PropTypes.array,
  drilldown: PropTypes.any,
};

