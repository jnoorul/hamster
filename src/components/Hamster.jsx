import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuestionsContainer from '../container/QuestionsContainer';
import Header from './home/Header';

const Hamster = class Hamster extends React.Component {

  componentDidMount() {
    this.props.loadCustomerDetails();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Header />
          <QuestionsContainer />
          <div className="footer" style={{ color: 'black' }}>@Copyrights Hamster</div>
        </div>
      </MuiThemeProvider>);
  }
};

Hamster.propTypes = {
  loadCustomerDetails: PropTypes.func.isRequired,
};

export default Hamster;
