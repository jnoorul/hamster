import React from 'react';
import PropTypes from 'prop-types';
import WelcomePage from '../home/WelcomePage';
import Age from './Age';
import InvestmentKnowledge from './InvestmentKnowledge';
import InvestmentExperience from './InvestmentExperience';
import NumberOfYears from './NumberOfYears';

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
        4: NumberOfYears,
        5: WelcomePage,
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
        <ComponentToRender
          qnNumber={this.props.qnNumber}
          totalQns={this.props.totalQns}
          complete={this.props.getNextQuestion}
        />
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

