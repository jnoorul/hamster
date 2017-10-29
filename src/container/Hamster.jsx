import React from 'react';
import { Grid } from 'semantic-ui-react';
import CustomerInfo from '../components/CustomerInfo';
import Portfolio from '../components/Portfolio';


const styles = {
  mainStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  customer: {
    flex: '1',
  },
  portfolio: {
    flex: '2',
  },
};


export default function Hamster() {
  return (
    <div>
      <div className="header" style={{ color: 'white' }}>Hamster</div>
      <br />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CustomerInfo />
          </Grid.Column>
          <Grid.Column width={12}>
            <Portfolio />
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>);
}
