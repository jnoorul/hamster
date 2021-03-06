import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Grid } from 'semantic-ui-react';


import roboImage from '../../assets/images/robots.jpg';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  render() {
    return (
      <div>
        <Grid columns={3} style={{ margin: '0' }}>
          <Grid.Row>
            <Grid.Column width={0} />
            <Grid.Column width={16}>
              <img className="roboImage" src={roboImage} alt="image not available" />
            </Grid.Column>
            <Grid.Column width={0} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
            <Header as="h2" textAlign="center" style={{ backgroundColor: 'white', color: 'black' }}>
                Your Friendly Investment Adviser
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <h4>Setup your portfolio in less than 5 minutes.</h4>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={3}>
              <Button
                size="large"
                onClick={this.onComplete}
                primary
                style={{ margin: 'auto', width: '90%' }}
              >
                Get Started
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

WelcomePage.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

export default WelcomePage;

