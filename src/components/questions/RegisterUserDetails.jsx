/* eslint-disable yoda */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Input, Label } from 'semantic-ui-react';

class RegisterUserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  getNext() {
    this.props.saveCustomerInfo(this.props.customerInfo);
    setTimeout(() => {
      this.props.getNextQuestion(this.props.qnNumber, this.props.totalQns);
    }, 1000);
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
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', paddingTop: '13%', fontSize: '2.5rem' }}>
          Please register your account details
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
              <Input label="Password" />
            </Grid.Column>
          </Grid.Row>
        </Grid>/
        <Button.Group className="buttonGrpPrevNext" style={{marginTop:'2rem'}}>
          <Button
            labelPosition="left"
            icon="left chevron"
            content="Previous"
            onClick={this.getPrev}
          />
          <Button
            color="teal"
            onClick={this.getNext}
            labelPosition="right"
            icon="right chevron"
            content="Next"
          />
        </Button.Group>
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
