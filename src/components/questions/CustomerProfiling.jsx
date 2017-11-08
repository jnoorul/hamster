import React from 'react';
import PropTypes from 'prop-types';
import { Button, Progress } from 'semantic-ui-react';
import roboThinkImg from '../../assets/images/robo-think.gif';
import ActionBar from '../home/ActionBar';

class CustomerProfiling extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
  }

  getNext() {
    // this.props.getPortfolioInfo(this.props.customerInfo.totalRiskScore);
    this.props.getDetailedPortfolioInfo(this.props.customerInfo);
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }


  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  render() {
    if (this.props.uiState.getRiskScoreStatus === 'inprogress') {
      return (
        <div>
          <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
            Customer Profiling is in progress...
          </h1>
          <img className="roboImage" style={{ height: '250px', width: '180px' }} src={roboThinkImg} alt="image not available" />
        </div>);
    }

    if (this.props.uiState.getRiskScoreStatus === 'failure') {
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

    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
          Customer Profiling successfuly completed. <br />
          Your Risk Score is {this.props.customerInfo.totalRiskScore * 2} / 100
        </h1>
        <Progress
          percent={this.props.customerInfo.totalRiskScore * 2}
          size="medium"
          color="green"
          progress
          style={{ width: '40%', margin: 'auto' }}
        />
        <ActionBar previous next nextButtonName="Create Portfolio" getPrev={this.getPrev} getNext={this.getNext} />
      </div>
    );
  }
}

CustomerProfiling.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  uiState: PropTypes.shape({ getRiskScoreStatus: PropTypes.string, err: PropTypes.object }).isRequired,
  customerInfo: PropTypes.shape({ totalRiskScore: PropTypes.number }).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  getPortfolioInfo: PropTypes.func.isRequired,
  getDetailedPortfolioInfo: PropTypes.func.isRequired,
};

export default CustomerProfiling;
