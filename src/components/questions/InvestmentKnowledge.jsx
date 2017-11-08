import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class InvestmentKnowledge extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setKnowledge = this.setKnowledge.bind(this);
  }

  getNext() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  setKnowledge(event) {
    this.props.setKnowledge(event.target.getAttribute('data-key'));
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
          Tell me about your investment knowledge
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group fluid vertical>
              <Button
                data-key="none"
                style={buttonStyle}
                className={('none' === this.props.customerInfo.investmentKnowledge) ? 'primary' : 'basic'}
                onClick={this.setKnowledge}
              >
                No knowledge
                &nbsp;&nbsp;-&nbsp;&nbsp;I know virtually nothing about investing

              </Button>
              <Button
                data-key="average"
                style={buttonStyle}
                className={('average' === this.props.customerInfo.investmentKnowledge) ? 'primary' : 'basic'}
                onClick={this.setKnowledge}
              >
                Somewhat knowledgeable
                &nbsp;&nbsp;-&nbsp;&nbsp;I have a fair understanding about investing

              </Button>
              <Button
                data-key="extensive"
                style={buttonStyle}
                className={('extensive' === this.props.customerInfo.investmentKnowledge) ? 'primary' : 'basic'}
                onClick={this.setKnowledge}
              >
                Highly knowledgeable
                &nbsp;&nbsp;-&nbsp;&nbsp;I have a very good understanding about investing

              </Button>
          </Button.Group>
          </Grid.Row>
        </Grid>
        <ActionBar previous next getPrev={this.getPrev} getNext={this.getNext} />
      </div>
    );
  }
}

InvestmentKnowledge.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({investmentKnowledge: PropTypes.string}).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  setKnowledge: PropTypes.func.isRequired,
};

export default InvestmentKnowledge;
