import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';

class NumberOfYears extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);

  }
  render() {
    const buttonStyle = {
      border: 'solid 1px steelblue',
      margin: '1.1rem',
      borderRadius: '5px',
      fontWeight: 'bolder',
      width: '25rem',
    };

    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%' }}>
          How long do you plan to keep your money invested for?
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group vertical>
              <Button style={buttonStyle} className="primary">
                Less than 5 years
              </Button>
              <Button style={buttonStyle} className="basic">
                5 to 10 years
              </Button>
              <Button style={buttonStyle} className="basic">
                More than 10 years
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

NumberOfYears.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

export default NumberOfYears;
