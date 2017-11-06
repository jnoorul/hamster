/* eslint-disable yoda */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';

class InvestmentExperience extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.setExperience = this.setExperience.bind(this);
  }

  onComplete() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
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
      <div className="mainContent">
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
                Virtually none - I am new to the area of investing
              </Button>
              <Button
                data-key="moderate"
                style={buttonStyle}
                className={('moderate' === this.props.customerInfo.investmentExperience) ? 'primary' : 'basic'}
                onClick={this.setExperience}
              >
                Moderate - I have some experience in investing in managed funds
              </Button>
              <Button
                data-key="extensive"
                style={buttonStyle}
                className={('extensive' === this.props.customerInfo.investmentExperience) ? 'primary' : 'basic'}
                onClick={this.setExperience}
              >
                Extensive - I have invested in a variety of vehicles including direct
                investments in stocks
            </Button>
          </Button.Group>
          </Grid.Row>
        </Grid>
        <Button.Group className="buttonGrpPrevNext" style={{marginTop:'2rem'}}>
          <Button labelPosition="left" icon="left chevron" content="Previous"/>
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

InvestmentExperience.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({ investmentExperience:PropTypes.string.isRequired }),
  getNextQuestion: PropTypes.func.isRequired,
  setExperience: PropTypes.func.isRequired,
};

export default InvestmentExperience;
