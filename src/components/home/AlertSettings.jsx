import React from 'react';
import PropTypes from 'prop-types';
import { Label, Segment, Grid, Dropdown, Button, Dimmer, Loader } from 'semantic-ui-react';

class AlertSettings extends React.Component {
  constructor(props) {
    super(props);
    this.setAlertVia = this.setAlertVia.bind(this);
    this.setAlertPortfolioAbove = this.setAlertPortfolioAbove.bind(this);
    this.setAlertPortfolioBelow = this.setAlertPortfolioBelow.bind(this);
    this.setAlertInstrumentAbove = this.setAlertInstrumentAbove.bind(this);
    this.setAlertInstrumentBelow = this.setAlertInstrumentBelow.bind(this);
    this.saveAlertSettings = this.saveAlertSettings.bind(this);
  }
  setAlertVia(event, data) {
    this.props.setAlertVia(data.value);
  }
  setAlertPortfolioAbove(event, data) {
    this.props.setAlertPortfolioAbove(data.value);
  }
  setAlertPortfolioBelow(event, data) {
    this.props.setAlertPortfolioBelow(data.value);
  }
  setAlertInstrumentAbove(event, data) {
    this.props.setAlertInstrumentAbove(data.value);
  }
  setAlertInstrumentBelow(event, data) {
    this.props.setAlertInstrumentBelow(data.value);
  }

  saveAlertSettings() {
    const alertInfo = Object.assign({}, this.props.alertSettings, {cif: 199, portfolioId: 1 });
    this.props.saveAlertSettings(alertInfo);
  }

  render(){
    const { saveAlertStatus } = this.props.uiState;

    const alertViaOptions = [
      { key: 'sms', text: 'SMS', value: 'sms' },
      { key: 'email', text: 'Email', value: 'email' },
    ];

    const alertThresoldOptions = [
      { key: '10', text: '10%', value: '10' },
      { key: '20', text: '20%', value: '20' },
      { key: '40', text: '40%', value: '40' },
      { key: '75', text: '75%', value: '75' },
    ];

    return (
      <div>
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column width={7}>
              <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '15%' }}>
                Configure Alert Settings
              </h1>
              <Segment>
                <Grid columns={2} style={{ fontSize: '1.2rem' }}>
                  <Grid.Row centered>
                    <Grid.Column width={10} >
                      <Label size="large" basic style={{ border: '0', float: 'right' }}>Alert me via</Label>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Dropdown
                        placeholder="Select"
                        fluid
                        selection
                        options={alertViaOptions}
                        value={this.props.alertSettings.alertVia}
                        onChange={this.setAlertVia}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={10}>
                      <Label size="large" basic style={{ border: '0', float: 'right' }}>Portfolio values goes above</Label>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Dropdown
                        placeholder="Select"
                        fluid
                        selection
                        value={this.props.alertSettings.portfolioAbove}
                        options={alertThresoldOptions}
                        onChange={this.setAlertPortfolioAbove}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={10}>
                      <Label size="large" basic style={{ border: '0', float: 'right' }}>Portfolio values goes below</Label>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Dropdown
                        placeholder="Select"
                        fluid
                        selection
                        value={this.props.alertSettings.portfolioBelow}
                        options={alertThresoldOptions}
                        onChange={this.setAlertPortfolioBelow}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={10}>
                      <Label size="large"  basic style={{ border: '0', float: 'right' }}>Profit for a instrument goes above</Label>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Dropdown
                        placeholder="Select"
                        fluid
                        selection
                        value={this.props.alertSettings.instrumentAbove}
                        options={alertThresoldOptions}
                        onChange={this.setAlertInstrumentAbove}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={10}>
                      <Label size="large"  basic style={{ border: '0', float: 'right' }}>Loss for a instrument goes above</Label>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Dropdown
                        placeholder="Select"
                        fluid
                        selection
                        value={this.props.alertSettings.instrumentBelow}
                        options={alertThresoldOptions}
                        onChange={this.setAlertInstrumentBelow}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Dimmer active={(saveAlertStatus==='inprogress')} inverted>
                      <Loader inverted>Saving...</Loader>
                    </Dimmer>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Label
                      basic
                      style={{ display: (saveAlertStatus === 'success') ? 'inline' : 'none' }}
                    >
                      Alerts settings are saved successfully
                    </Label>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Label
                      basic
                      style={{ display: (saveAlertStatus === 'failure') ? 'inline' : 'none' }}
                      color="red"
                    >
                      Unable to save your alert settings. Please try again.
                    </Label>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column>
                      <Button basic style={{float: 'right', width: '6rem'}}>Cancel</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button
                        primary
                        style={{float: 'left', width: '6rem'}}
                        onClick={this.saveAlertSettings}
                      >
                        Save
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>);
  }
}

AlertSettings.propTypes = {
  setAlertVia: PropTypes.func.isRequired,
  setAlertPortfolioAbove: PropTypes.func.isRequired,
  setAlertPortfolioBelow: PropTypes.func.isRequired,
  setAlertInstrumentAbove: PropTypes.func.isRequired,
  setAlertInstrumentBelow: PropTypes.func.isRequired,
  saveAlertSettings: PropTypes.func.isRequired,
  uiState: PropTypes.shape({ saveAlertStatus: PropTypes.string }),
  alertSettings: PropTypes.shape({
    alertVia: PropTypes.string,
    portfolioAbove: PropTypes.number,
    portfolioBelow: PropTypes.number,
    instrumentAbove: PropTypes.number,
    instrumentBelow: PropTypes.number,
  }).isRequired,
};

export default AlertSettings;
