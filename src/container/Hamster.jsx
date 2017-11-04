import React from 'react';
import PropTypes from 'prop-types';
import WelcomePage from '../components/home/WelcomePage';
import Header from '../components/home/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Hamster = class Hamster extends React.Component {

  componentDidMount() {
    this.props.loadCustomerDetails();
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
              <Header/>
            <WelcomePage />
            <div className="footer" style={{ color: 'black' }}>@Copyrights Hamster</div>
          </div>
        </MuiThemeProvider>);
  }
};

Hamster.propTypes = {
  customerName: PropTypes.string.isRequired,
  loadCustomerDetails: PropTypes.func.isRequired,
};

export default Hamster;
