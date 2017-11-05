import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';

class InvestmentKnowledge extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.setKnowledge = this.setKnowledge.bind(this);
  }

  onComplete() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  setKnowledge(event) {
    this.props.setKnowledge(event.target.getAttribute('data-key'));
  }

  render() {
    const buttonStyle = { border: 'solid 1px steelblue', margin: '1.1rem', borderRadius: '5px', fontWeight: 'bolder' };

    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%' }}>
          Tell us about your investment knowledge
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group fluid vertical>
              <Button
                data-key="no"
                style={buttonStyle}
                className="primary"
                onClick={this.setKnowledge}
              >
                No knowledge – I know virtually nothing about investing
              </Button>
              <Button
                data-key="average"
                style={buttonStyle}
                className="basic"
                onClick={this.setKnowledge}
              >
                Somewhat knowledgeable - I have a fair understanding about investing
              </Button>
              <Button
                data-key="extensive"
                style={buttonStyle}
                className="basic"
                onClick={this.setKnowledge}
              >
                Highly knowledgeable - I have a very good understanding about investing
              </Button>
          </Button.Group>
          </Grid.Row>
        </Grid>
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

InvestmentKnowledge.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  setKnowledge: PropTypes.func.isRequired,
};

export default InvestmentKnowledge;
