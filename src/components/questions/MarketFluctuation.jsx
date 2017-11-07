import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class MarketFluctuation extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setReactionToFluctuations = this.setReactionToFluctuations.bind(this);
  }

  onComplete() {
    this.props.saveCustomerInfo(this.props.customerInfo);
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  setReactionToFluctuations(event) {
    this.props.setReactionToFluctuation(event.target.getAttribute('data-key'));
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
          If your investment value dropped by more than 20%, you would be:
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group fluid vertical>
              <Button
                data-key="nervous"
                style={buttonStyle}
                className={('nervous' === this.props.customerInfo.reactionToFluctuation) ? 'primary' : 'basic'}
                onClick={this.setReactionToFluctuations}
              >
                Very nervous
              </Button>
              <Button
                data-key="concerned"
                style={buttonStyle}
                className={('concerned' === this.props.customerInfo.reactionToFluctuation) ? 'primary' : 'basic'}
                onClick={this.setReactionToFluctuations}
              >
                Somewhat concerned
              </Button>
              <Button
                data-key="ignore"
                style={buttonStyle}
                className={('ignore' === this.props.customerInfo.reactionToFluctuation) ? 'primary' : 'basic'}
                onClick={this.setReactionToFluctuations}
              >
                Not worried - you are familiar with sharemarket fluctuations
              </Button>
          </Button.Group>
          </Grid.Row>
        </Grid>
        <ActionBar previous next getPrev={this.getPrev} getNext={this.onComplete} />
      </div>
    );
  }
}

MarketFluctuation.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({reactionToFluctuations: PropTypes.string}).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  saveCustomerInfo: PropTypes.func.isRequired,
  setReactionToFluctuation: PropTypes.func.isRequired,
};

export default MarketFluctuation;
