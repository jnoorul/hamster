import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import WelcomePage from '../components/home/WelcomePage';

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
        <WelcomePage />
        <div className="footer" style={{ color: 'white' }}>Hamster</div>
      </div>);
  }

};

Hamster.propTypes = {
  customerName: PropTypes.string.isRequired,
  loadCustomerDetails: PropTypes.func.isRequired,
};

export default Hamster;
