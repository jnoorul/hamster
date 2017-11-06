import React from 'react';
import PropTypes from 'prop-types';
import WelcomePage from '../home/WelcomePage';
import Age from './Age';
import InvestmentKnowledge from './InvestmentKnowledge';
import InvestmentExperience from './InvestmentExperience';
import InvestmentHorizon from './InvestmentHorizon';
import MarketFluctuation from './MarketFluctuation';
import Portfolio from '../Portfolio';

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
        5: MarketFluctuation,
        6: Portfolio,
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

