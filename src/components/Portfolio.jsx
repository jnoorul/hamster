import React from 'react';
import PortfolioDivision from '../assets/PortfolioBreakdown'
import ReactHighCharts from 'react-highcharts';
import AssetDetails from './AssetDetails'


class Portfolio extends React.Component {
    constructor(props) {
        super(props);

     this.setAssetType = this.setAssetType.bind(this);

    }

    setAssetType = (e) => {
        this.props.setAssetType(e.point.name)
    }

    getPortfolioDetails = () => {

        var data = [
            {
                name: 'Assets',
                data: []
            }];

        var fakeData = PortfolioDivision[0];

        var startIndex = 0
        for(let assetType in fakeData){
            if(startIndex === 0){
                data[0].data.push({
                    name: assetType,
                    y: fakeData[assetType],
                    sliced: true,
                    selected: true,
                })
            }
            else {
                data[0].data.push({
                    name: assetType,
                    y: fakeData[assetType]
                })
            }
            startIndex++
        }


        return data;
    };







    render() {

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: (9 / 16 * 48) + '%' // 16:9 ratio
            },
            title: {
                text: "Suggested Portfolio",
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
                            click: this.setAssetType
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
            series: this.getPortfolioDetails()
        };


        return (
            <div style={{ borderLeft: 'solid 1px rgba(0,0,0,0.1)' }}>
                <ReactHighCharts config={config} style={{height:"20%"}}/>
                <AssetDetails {...this.props} />
            </div>
            /*<Pie title="Portfolio Details by Asset Type" series={this.getPortfolioDetails()} />
                <Column title="Stocks Breakdown" assetClass="Stock" series={this.getAssetAllocationSeriesBreakdown()} drilldown={this.getAssetAllocationDrilldownBreakdown()} />
             </div>*/
           )
    }
}

export default Portfolio