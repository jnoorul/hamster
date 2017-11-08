import React from 'react';
import { Table, Icon, Grid, Dimmer, Loader, Label } from 'semantic-ui-react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const initialInvestment = this.props.customerInfo.initialInvestmentAmount;
    const position = this.props.customerInfo.position;
    const transactions = this.props.customerInfo.transactions;
    const { getPositionStatus, getTransactionStatus } = this.props.uiState;

    if (getTransactionStatus === 'inprogress') {
      return (
        <Grid>
          <Grid.Row>
            <Dimmer active={(getTransactionStatus === 'inprogress')} inverted>
              <Loader inverted>Saving...</Loader>
            </Dimmer>
          </Grid.Row>
        </Grid>);
    }

    if (getTransactionStatus === 'failure') {
      return (
        <Grid>
          <Grid.Row centered>
            <Label
              basic
              style={{display: (getTransactionStatus === 'failure') ? 'inline' : 'none'}}
              color="red"
            >
              OOPS!Something went wrong when creating your account. Please try again!
            </Label>
          </Grid.Row>
        </Grid>);
    }

    return (
      <div>
        <Grid>
          <Grid.Row centered style={{ marginTop: '3rem' }}>
            <Grid.Column width={12}>
              <h3>Welcome Mr {this.props.customerInfo.name}</h3>
              <Table celled textAlign="center" style={{fontSize: '1.3rem'}}>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell >Invested Amount</Table.HeaderCell>
                      <Table.HeaderCell >Current Value</Table.HeaderCell>
                      <Table.HeaderCell >Profit / Loss</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Row style={{ padding: '5rem'}}>
                  <Table.HeaderCell style={{height: '8rem', backgroundColor: 'floralwhite'}}>{initialInvestment}</Table.HeaderCell>
                  <Table.HeaderCell style={{height: '8rem', backgroundColor: 'floralwhite'}} >{position}</Table.HeaderCell>
                  <Table.HeaderCell style={{height: '8rem', backgroundColor: 'floralwhite'}} >20%</Table.HeaderCell>
                </Table.Row>
              </Table>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ marginTop: '5rem' }}>
            <Grid.Column width={12}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='3'>Recent Transactions</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              </Table>
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell >Ticker</Table.HeaderCell>
                    <Table.HeaderCell >Buy / Sell</Table.HeaderCell>
                    <Table.HeaderCell >Quantity</Table.HeaderCell>
                    <Table.HeaderCell >Price</Table.HeaderCell>
                    <Table.HeaderCell >Total Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    transactions.map((row) => {
                      return(
                      <Table.Row>
                        <Table.Cell>{row.ticker}</Table.Cell>
                        <Table.Cell>{row.BuySell}</Table.Cell>
                        <Table.Cell textAlign='right'>{row.numberOfUnits}</Table.Cell>
                        <Table.Cell textAlign='right'>{row.unitPrice}</Table.Cell>
                        <Table.Cell textAlign='right'>{row.amount}</Table.Cell>
                      </Table.Row>
                      )
                    })
                  }
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

