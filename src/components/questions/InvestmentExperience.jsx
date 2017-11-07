/* eslint-disable yoda */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class InvestmentExperience extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setExperience = this.setExperience.bind(this);
  }

  getNext() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  setExperience(event) {
    this.props.setExperience(event.target.getAttribute('data-key'));
    // setTimeout(() => this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns),1000);
  }

  render() {
    const buttonStyle = {
      border: 'solid 1px steelblue',
      margin: '1.1rem',
      borderRadius: '5px',
      fontWeight: 'bolder',
      fontSize: '1.3rem'
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%', fontSize: '2.5rem' }}>
          Tell us about your investment experience
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group fluid vertical>
              <Button
                data-key="none"
                style={buttonStyle}
                className={('none' === this.props.customerInfo.investmentExperience) ? 'primary' : 'basic'}
                onClick={this.setExperience}
              >
                None <span style={{ fontSize:'1rem' }}>
                &nbsp;&nbsp;-&nbsp;&nbsp;I am new to the area of investing
                </span>
              </Button>
              <Button
                data-key="average"
                style={buttonStyle}
                className={('average' === this.props.customerInfo.investmentExperience) ? 'primary' : 'basic'}
                onClick={this.setExperience}
              >
                Moderate Extensive <span style={{ fontSize:'1rem' }}>
                &nbsp;&nbsp;-&nbsp;&nbsp;I have some experience in investing in managed funds
                </span>
              </Button>
              <Button
                data-key="extensive"
                style={buttonStyle}
                className={('extensive' === this.props.customerInfo.investmentExperience) ? 'primary' : 'basic'}
                onClick={this.setExperience}
              >
                Extensive<span style={{ fontSize:'1rem' }}>
                &nbsp;&nbsp;-&nbsp;&nbsp;I have invested in a variety of vehicles including direct investments in stocks
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

InvestmentExperience.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({ investmentExperience:PropTypes.string.isRequired }),
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  setExperience: PropTypes.func.isRequired,
};

export default InvestmentExperience;
