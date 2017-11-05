import React from 'react';
import PropTypes from 'prop-types';
// import AssetData from '../assets/AC';
import ReactHighCharts from 'react-highcharts';

class AssetDetails extends React.Component {
  constructor(props) {
    super(props);
  }

    getAssetAllocationSeriesBreakdown = () => {

        return [
            {
                name: 'Stocks',
                colorByPoint: true,
                data: [{
                    name: 'MSFT',
                    y: 56.33
                }, {
                    name: 'AAPL',
                    y: 10.03
                }, {
                    name: 'AMZ',
                    y: 24.38
                }, {
                    name: 'Others',
                    y: 4.77,
                    drilldown: 'Others'
                }]
            }
        ]
    };

    getAssetAllocationDrilldownBreakdown = () => {
        return {
            series: [
                {
                    name: 'Others',
                    id: 'Others',
                    data: [
                        [
                            'ABC',
                            1.2
                        ],
                        [
                            'CDE',
                            1.1
                        ],
                        [
                            'DEF',
                            1
                        ],
                        [
                            'TET',
                            .9
                        ]
                    ]
                }],
        }
    };



    render() {
        let yAxisLbl = `Total percent of ${this.props.assetType}`;
        if(this.props.assetType === undefined || this.props.assetType === null || this.props.assetType.length === 0) {
            yAxisLbl = 'Percentage of Total'
        }

    const config = {
      chart: {
        type: 'column',
          height: (9 / 16 * 40) + '%'
      },
      title: {
        text: 'Asset Breakdown',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: yAxisLbl,
        },

      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          pointWidth: 30,
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


      series: this.getAssetAllocationSeriesBreakdown(),
      drilldown: this.getAssetAllocationDrilldownBreakdown(),
    };

    return (<ReactHighCharts config={config} />);
  }
}

AssetDetails.propTypes = {
  assetType: PropTypes.string.isRequired,
};

export default AssetDetails;
