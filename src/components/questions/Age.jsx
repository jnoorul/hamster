import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';

class AgeQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    this.props.complete(this.props.qnNumber, this.props.totalQns);

  }
  render() {
    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>I am
          <input type="text" min="20" max="100" className="underlineTextBox" />
          years old. <br /> My Initial investment amount in USD
          <input type="text" min="20" max="100" className="underlineTextBox" style={{ width: '10rem' }} />
        </h1>
        <Button.Group style={{ position: 'absolute', right: '6rem' }}>
          <Button labelPosition="left" icon="left chevron" content="Previous" />
          <Button
            color="teal"
            onClick={this.onComplete}
            labelPosition="right"
            icon="right chevron"
            content="Next"
          />
        </Button.Group>
      </div>
    );
  }
}

AgeQuestion.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  complete: PropTypes.func.isRequired,
};

export default AgeQuestion;
