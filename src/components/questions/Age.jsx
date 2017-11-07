import React from 'react';
import PropTypes from 'prop-types';
import ActionBar from '../home/ActionBar';

class AgeQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.setAge = this.setAge.bind(this);
    this.setInitialInvestmentAmount = this.setInitialInvestmentAmount.bind(this);
    this.setName = this.setName.bind(this);
  }

  getNext() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  setAge(event) {
    this.props.setAge(event.target.value);
  }

  setInitialInvestmentAmount(event) {
    this.props.setInitialInvestmentAmount(event.target.value);
  }

  setName(event) {
    this.props.setName(event.target.value);
  }

  render() {
    return (
      <div>

        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
          My name is
          <input
            type="text"
            className="underlineTextBox"
            style={{ width: '10rem' }}
            onChange={this.setName}
            value={this.props.customerInfo.name}
          />, I am
          <input
            type="text"
            min="20"
            max="100"
            className="underlineTextBox"
            onChange={this.setAge}
            value={this.props.customerInfo.age}
          />
          years old. <br /> My Initial investment amount in USD
          <input
            type="text"
            min="20"
            max="100"
            className="underlineTextBox"
            onChange={this.setInitialInvestmentAmount}
            value={this.props.customerInfo.initialInvestmentAmount}
            style={{ width: '10rem' }}
          />
        </h1>
        <ActionBar next getNext={this.getNext} />
      </div>
    );
  }
}

AgeQuestion.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({
    age: PropTypes.number,
    initialInvestmentAmount: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  setAge: PropTypes.func.isRequired,
  setInitialInvestmentAmount: PropTypes.func.isRequired,
};

export default AgeQuestion;
