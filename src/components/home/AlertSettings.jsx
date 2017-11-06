import React from 'react';
import PropTypes from 'prop-types';
import { Label, Segment, Grid, Dropdown, Button } from 'semantic-ui-react';

class AlertSettings extends React.Component {
  constructor(props) {
    super(props);
  }
  setAlert(event) {

  }
  render(){
    const alertViaOptions = [
      { key: 'sms', text: 'SMS', value: 'SMS' },
      { key: 'email', text: 'Email', value: 'Email' },
    ];

    const alertThresoldOptions = [
      { key: '10', text: '10%', value: '10' },
      { key: '20', text: '20%', value: '20' },
      { key: '40', text: '40%', value: '40' },
      { key: '75', text: '75%', value: '75' },
    ];

    return (
      <div className="mainContent">
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
                        options={alertThresoldOptions}
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
                        options={alertThresoldOptions}
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
                        options={alertThresoldOptions}
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
                        options={alertThresoldOptions}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column>
                      <Button basic style={{float: 'right', width: '6rem'}}>Cancel</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button primary style={{float: 'left', width: '6rem'}}>Save</Button>
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

export default AlertSettings;