import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Grid } from 'semantic-ui-react';

class InvestmentExperience extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    this.props.complete(this.props.qnNumber, this.props.totalQns);

  }
  render() {
    const buttonStyle = {
      border: 'solid 1px steelblue',
      margin: '1.1rem',
      borderRadius: '5px',
      fontWeight: 'bolder',
    };

    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%' }}>
          Tell us about your investment experience
        </h1>
        <Grid columns={1}>
          <Grid.Row width={16} centered>
            <Button.Group fluid vertical>
              <Button style={buttonStyle} className="primary">
                Virtually none - I am new to the area of investing
              </Button>
              <Button style={buttonStyle} className="basic">
                Moderate - I have some experience in investing in managed funds
              </Button>
              <Button style={buttonStyle} className="basic">
                Extensive - I have invested in a variety of vehicles including direct
                investments in stocks
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

InvestmentExperience.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  complete: PropTypes.func.isRequired,
};

export default InvestmentExperience;
