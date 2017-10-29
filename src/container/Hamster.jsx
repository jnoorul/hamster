import React from 'react';
import { Grid } from 'semantic-ui-react';
import CustomerInfo from '../components/CustomerInfo';
import Portfolio from '../components/Portfolio';

export default function Hamster() {
  return (
    <div>
      <div className="header" style={{ color: 'white' }}>Hamster</div>
      <br />
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <CustomerInfo />
          </Grid.Column>
          <Grid.Column width={10}>
            <Portfolio />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);
}
