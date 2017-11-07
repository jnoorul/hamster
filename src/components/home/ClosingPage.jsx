import React from 'react';
import PropTypes from 'prop-types';
import { Label, Grid, Button, Dimmer, Loader } from 'semantic-ui-react';

class ClosingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { saveAlertStatus } = this.props.uiState;

    return (
      <Grid>
        <Grid.Row>
          <Dimmer active={(saveAlertStatus === 'inprogress')} inverted>
            <Loader inverted>Saving...</Loader>
          </Dimmer>
        </Grid.Row>
        <Grid.Row centered>
          <h3
            basic
            style={{display: (saveAlertStatus === 'success') ? 'inline' : 'none'}}
          >
            Thank you!!
            <br/> <br/> <br/>
            Your portfolio is created with initial
            investment amount of US$ {this.props.customerInfo.initialInvestmentAmount}
            <br/> <br/> <br/>
            You will get SMS / Email confirmation once the trades in your portfolio
            are executed in the market.
            <br/> <br/> <br/>
          </h3>
        </Grid.Row>
        <Grid.Row centered>
          <Label
            basic
            style={{display: (saveAlertStatus === 'failure') ? 'inline' : 'none'}}
            color="red"
          >
            Unable to save your alert settings. Please try again.
          </Label>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Button basic style={{float: 'right', width: '10rem'}}>Logout</Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              primary
              style={{float: 'left', width: '10rem'}}
              onClick={this.saveAlertSettings}
            >
              Home Page
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ClosingPage.propTypes = {
  uiState: PropTypes.shape({ saveAlertStatus: PropTypes.string }).isRequired,
  customerInfo: PropTypes.shape({
    initialInvestmentAmount: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ClosingPage;
