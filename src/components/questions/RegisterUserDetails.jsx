/* eslint-disable yoda */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Input, Label } from 'semantic-ui-react';
import ActionBar from '../home/ActionBar';

class RegisterUserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  getNext() {
    this.props.saveCustomerInfo(this.props.customerInfo);
    this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
  }

  getPrev() {
    this.props.getPreviousQuestion(this.props.qnNumber);
  }

  setUserId(event) {
    this.props.setUserId(event.target.value);
    // setTimeout(() => this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns),1000);
  }

  render() {
    const buttonStyle = {
      border: 'solid 1px steelblue',
      margin: '1.1rem',
      borderRadius: '5px',
      fontWeight: 'bolder',
      fontSize: '1.3rem',
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%', fontSize: '2.5rem' }}>
          Please create your account details
        </h1>
        <Grid columns={1} centered>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <Input
                label="User Name"
                onChange={this.setUserId}
                value={this.props.customerInfo.userId}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <Input type="password" label={<Label style={{ paddingLeft: '1.5rem' }}>Password</Label>} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <Input  type="number" label={<Label style={{ paddingLeft: '4.5rem' }}>+65</Label>} placeholder="mobile number" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ActionBar
          previous
          next
          nextButtonName="Proceed"
          getPrev={this.getPrev}
          getNext={this.getNext}
        />
      </div>
    );
  }
}

RegisterUserDetails.propTypes = {
  qnNumber: PropTypes.number.isRequired,
  totalQns: PropTypes.number.isRequired,
  customerInfo: PropTypes.shape({ userId:PropTypes.string}).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  getPreviousQuestion: PropTypes.func.isRequired,
  saveCustomerInfo: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
};

export default RegisterUserDetails;

