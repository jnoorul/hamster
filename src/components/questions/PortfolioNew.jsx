import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import PortfolioDivision from '../../assets/PortfolioBreakdown'
import { Slider } from 'antd';
import ReactHighCharts from 'react-highcharts';
import AssetDetails from '../AssetDetails'
import roboThinkImg from '../../assets/images/robo-think.gif';
import ActionBar from '../home/ActionBar';
import PieChart from '../charts/PieChart';
import Pie from "../charts/Pie";
import getPieConfig from '../charts/PieChartConfig';
import getBarConfig from '../charts/BarChartConfig';
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(ReactHighCharts.Highcharts);


class PortfolioNew extends React.Component {
  constructor(props) {
    super(props);
    this.setAssetType = this.setAssetType.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  setAssetType = (e) => {
      this.props.setAssetType(e.point.name)
  };

  getNext() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

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

  getAssetAllocationSeriesBreakdown() {
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

    const pieConfig = getPieConfig({data: this.getPortfolioDetails(), onClick: this.setAssetType});
    const barConfig = getBarConfig({data: this.getAssetAllocationSeriesBreakdown(), onClick: this.setAssetType});

    const marks = {
      0: 'Low',
      50: 'Medium',
      100: 'High',
    };

    return (
      <div>
        <Grid>
          <Grid.Row columns={2} centered>
            <Grid.Column width={8}>
              <div className="portfolioPieContainer">
                <ReactHighCharts config={pieConfig}/>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="portfolioBarContainer">
                <ReactHighCharts config={barConfig}/>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h4>Adjust your risk profile</h4>
              <Slider marks={marks} step={10} defaultValue={50} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ActionBar previous nextButtonName="Create Account" next getPrev={this.getPrev} getNext={this.getNext} />
     </div>
  )
  }
}

export default PortfolioNew;