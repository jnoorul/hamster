import React from 'react';
import PropTypes from 'prop-types';
import WelcomePage from '../home/WelcomePage';
import Age from './Age';
import InvestmentKnowledge from './InvestmentKnowledge';
import InvestmentExperience from './InvestmentExperience';
import InvestmentHorizon from './InvestmentHorizon';
import ExpectedReturn from './ExpectedReturn';
import MarketFluctuation from './MarketFluctuation';
import CustomerProfiling from './CustomerProfiling';
import RegisterUserDetails from './RegisterUserDetails';
import Portfolio from '../Portfolio';
import AlertSettings from '../home/AlertSettings';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.getComponentToRender = this.getComponentToRender.bind(this);
    this.componentmapper = {
      byName: {
        0: AlertSettings,
        1: Age,
        2: InvestmentKnowledge,
        3: InvestmentExperience,
        4: InvestmentHorizon,
        5: ExpectedReturn,
        6: MarketFluctuation,
        7: CustomerProfiling,
        8: Portfolio,
        9: RegisterUserDetails,
      },
    };
  }

  getComponentToRender() {
    return this.componentmapper.byName[this.props.qnNumber];
  }

  render() {
    const ComponentToRender = this.getComponentToRender();
    return (
      <div>
        <ComponentToRender {...this.props} />
      </div>
    );
  }
}

Questions.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

export default Questions;

