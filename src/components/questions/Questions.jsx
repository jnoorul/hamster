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
import Portfolio from './Portfolio';
import PortfolioNew from './PortfolioNew';
import AlertSettings from '../home/AlertSettings';
import ClosingPage from '../home/ClosingPage';
import HomePage from '../home/HomePage';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.getComponentToRender = this.getComponentToRender.bind(this);
    this.componentmapper = {
      byName: {
        0: WelcomePage,
        1: Age,
        2: InvestmentKnowledge,
        3: InvestmentExperience,
        4: InvestmentHorizon,
        5: ExpectedReturn,
        6: MarketFluctuation,
        7: CustomerProfiling,
        8: PortfolioNew,
        9: RegisterUserDetails,
        10: AlertSettings,
        11: ClosingPage,
        12: HomePage,
      },
    };
  }

  getComponentToRender() {
    return this.componentmapper.byName[this.props.qnNumber];
  }

  render() {
    const ComponentToRender = this.getComponentToRender();
    return (
      <div className="mainContainer">
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

