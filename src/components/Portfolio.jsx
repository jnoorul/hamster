import React from 'react';
import { Button } from 'semantic-ui-react';
import PortfolioDivision from '../assets/PortfolioBreakdown'
import ReactHighCharts from 'react-highcharts';
import AssetDetails from './AssetDetails'
import roboThinkImg from '../assets/images/robo-think.gif';


class Portfolio extends React.Component {
    constructor(props) {
        super(props);

     this.setAssetType = this.setAssetType.bind(this);
     this.getPrev = this.getPrev.bind(this);

    }

    setAssetType = (e) => {
        this.props.setAssetType(e.point.name)
    };

    getPrev() {
      this.props.getPreviousQuestion(this.props.qnNumber);
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

      if (this.props.uiState.getPortfolioStatus === 'inprogress') {
        return (
          <div className="mainContent">
              <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
                  Portfolio construction is in progress...
              </h1>
              <img className="roboImage" style={{ height: '250px', width: '180px' }} src={roboThinkImg} alt="image not available" />
          </div>);
      }

      if (this.props.uiState.getPortfolioStatus === 'failure') {
        return (
          <div className="mainContent">
              <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
                  OOPS! Something went wrong!!
              </h1>
            {/* <Label basic>{this.props.uiState.err}</Label> */}
              <Button.Group className="buttonGrpPrevNext" style={{ marginTop: '2rem' }}>
                  <Button
                    labelPosition="left"
                    icon="left chevron"
                    content="Previous"
                    onClick={this.getPrev}
                  />
              </Button.Group>
          </div>);
      }

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