import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class AgeQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.setAge = this.setAge.bind(this);
  }

  onComplete() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  setAge(event) {
    this.props.setAge(event.target.value);
  }

  render() {
    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>I am
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
            style={{ width: '10rem' }}
          />
        </h1>
        <ActionBar next getNext={this.onComplete} />
      </div>
    );
  }
}

AgeQuestion.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({ age: PropTypes.number }).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  setAge: PropTypes.func.isRequired,
};

export default AgeQuestion;
