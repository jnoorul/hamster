import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class InvestmentHorizon extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setInvestmentHorizon = this.setInvestmentHorizon.bind(this);
  }

  getNext() {
    // this.props.saveCustomerInfo(this.props.customerInfo);
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  setInvestmentHorizon(event) {
    this.props.setInvestmentHorizon(event.target.getAttribute('data-key'));
    // setTimeout(() => this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns),1000);
  }

  render() {
    const buttonStyle = {
      border: 'solid 1px steelblue',
      margin: '1.1rem',
      borderRadius: '5px',
      fontWeight: 'bolder',
      width: '25rem',
      fontSize: '1.3rem'
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%', fontSize: '2.5rem' }}>
          How long do you plan to keep your money invested for?
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group vertical>
              <Button
                data-key="0-5"
                style={buttonStyle}
                className={('0-5' === this.props.customerInfo.investmentHorizon) ? 'primary' : 'basic'}
                onClick={this.setInvestmentHorizon}
              >
                Less than 5 years &nbsp;&nbsp;&nbsp; <span style={{ fontSize: '0.8rem', fontWeight: '900' }}>(&lt; 2022)</span>
              </Button>
              <Button
                data-key="5-10"
                style={buttonStyle}
                className={('5-10' === this.props.customerInfo.investmentHorizon) ? 'primary' : 'basic'}
                onClick={this.setInvestmentHorizon}
              >
                5 to 10 years &nbsp;&nbsp;&nbsp; <span style={{ fontSize: '0.8rem', fontWeight: '900' }}>(&gt; 2022 &lt; 2027)</span>
              </Button>
              <Button
                data-key="10-200"
                style={buttonStyle}
                className={('10-200' === this.props.customerInfo.investmentHorizon) ? 'primary' : 'basic'}
                onClick={this.setInvestmentHorizon}
              >
                More than 10 years &nbsp;&nbsp;&nbsp;<span style={{ fontSize: '0.8rem', fontWeight: '900' }}>(&gt; 2027)</span>
              </Button>
            </Button.Group>
          </Grid.Row>
        </Grid>
        <ActionBar previous next getPrev={this.getPrev} getNext={this.getNext} />
      </div>
    );
  }
}

InvestmentHorizon.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({investmentHorizon: PropTypes.string}).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  setInvestmentHorizon: PropTypes.func.isRequired,
};

export default InvestmentHorizon;
