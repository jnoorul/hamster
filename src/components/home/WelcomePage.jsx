import React from 'react';
import {Header, Button, Grid} from 'semantic-ui-react';


import roboImage from '../../assets/images/robots.jpg';


export default function WelcomePage() {
  return (
    <div className="welcomePage">
      <Grid columns={3} style={{ margin: '0' }}>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <img className="roboImage" src={roboImage} alt="image not available"/>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2" textAlign="center" style={{backgroundColor: 'white', color: 'black'}}>
              Your Friendly Investment Adviser
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={3}>
            <Button size="large" primary style={{ margin: 'auto', width: '90%' }}> Get Started </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
