import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class ExpectedReturn extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setExpectedReturn = this.setExpectedReturn.bind(this);
  }

  getNext() {
    // this.props.saveCustomerInfo(this.props.customerInfo);
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  setExpectedReturn(event) {
    this.props.setExpectedReturn(event.target.getAttribute('data-key'));
    // setTimeout(() => this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns),1000);
  }

  render() {
    const buttonStyle = {
      border: 'solid 1px steelblue',
      margin: '1.1rem',
      borderRadius: '5px',
      fontWeight: 'bolder',
      fontSize: '1.3rem',
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%', fontSize: '2.5rem' }}>
          Your attitude towards risk and return,
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group vertical>
              <Button
                data-key="conservative"
                style={buttonStyle}
                className={('conservative' === this.props.customerInfo.expectedReturn) ? 'primary' : 'basic'}
                onClick={this.setExpectedReturn}
              >
                Very conservative<span style={{ fontSize:'1rem' }}>
                &nbsp;&nbsp;-&nbsp;&nbsp;you are not much of a risk taker and accept lower returns
                </span>
              </Button>
              <Button
                data-key="moderate"
                style={buttonStyle}
                className={('moderate' === this.props.customerInfo.expectedReturn) ? 'primary' : 'basic'}
                onClick={this.setExpectedReturn}
              >
                Moderate<span style={{ fontSize:'1rem' }}>
                &nbsp;&nbsp;-&nbsp;&nbsp;You are willing to take moderate risk to improve returns
                </span>
              </Button>
              <Button
                data-key="aggressive"
                style={buttonStyle}
                className={('aggressive' === this.props.customerInfo.expectedReturn) ? 'primary' : 'basic'}
                onClick={this.setExpectedReturn}
              >
                Aggressive<span style={{ fontSize:'1rem' }}>
                &nbsp;&nbsp;-&nbsp;&nbsp;You are willing to take a high level of risk to maximise returns
                </span>
              </Button>
            </Button.Group>
          </Grid.Row>
        </Grid>
        <ActionBar previous next getPrev={this.getPrev} getNext={this.getNext} />
      </div>
    );
  }
}

ExpectedReturn.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({ expectedReturn: PropTypes.string }).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  setExpectedReturn: PropTypes.func.isRequired,
};

export default ExpectedReturn;
