import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';

class CustomerProfiling extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.getPrev = this.getPrev.bind(this);
  }

  onComplete() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }


  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  render() {
    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
          Customer Profiling successfuly completed. <br />
          Your Risk Score is {this.props.customerInfo.totalRiskScore} / 50
        </h1>
        <Button.Group className="buttonGrpPrevNext" style={{ marginTop: '2rem' }}>
          <Button
            labelPosition="left"
            icon="left chevron"
            content="Previous"
            onClick={this.getPrev}
          />
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

CustomerProfiling.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({ totalRiskScore: PropTypes.number }).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
};

export default CustomerProfiling;
