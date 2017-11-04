import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import CustomerInfo from '../components/CustomerInfo';
import Portfolio from '../components/Portfolio';

const Hamster = class Hamster extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCustomerDetails();
  }

  render() {
    return (
      <div>
        <div className="header" style={{ color: 'white' }}>Hamster</div>
        <div>{this.props.customerName}</div>
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <CustomerInfo />
            </Grid.Column>
            <Grid.Column width={11}>
              <Portfolio />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>);
  }

};

Hamster.propTypes = {
  customerName: PropTypes.string.isRequired,
  loadCustomerDetails: PropTypes.func.isRequired,
};

export default Hamster;
