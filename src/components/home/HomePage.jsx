import React from 'react';
import { Table, Icon, Grid, Dimmer, Loader, Label } from 'semantic-ui-react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  static asMoney(x) {
    if (typeof x !== 'number') {
      x = parseInt(x);
    }
    x= Math.round(x);
    x = Math.abs(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  static calculateReturn(from, to) {
    let original;
    let final;
    if (typeof from !== 'number') {
      original = parseInt(from);
    }
    if (typeof from !== 'number') {
      final = parseInt(to);
    }
    const difference = final - original;
    const perc = (difference / from) * 100;
    return Math.round(perc);
  }

  render() {
    const initialInvestment = this.props.customerInfo.initialInvestmentAmount;
    const position = this.props.customerInfo.position;
    const transactions = this.props.customerInfo.transactions;
    const { getPositionStatus, getTransactionStatus } = this.props.uiState;

    if (getTransactionStatus === 'inprogress' || getPositionStatus === 'inprogress') {
      return (
        <Grid style={{ marginTop: '10rem' }}>
          <Grid.Row>
            <Dimmer active={(getTransactionStatus === 'inprogress')} inverted>
              <Loader inverted>Loading profile ...</Loader>
            </Dimmer>
          </Grid.Row>
        </Grid>);
    }

    if (getTransactionStatus === 'failure' || getPositionStatus === 'failure') {
      return (
        <Grid style={{ marginTop: '10rem' }}>
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
                  <Table.HeaderCell style={{height: '8rem', backgroundColor: 'floralwhite'}}>{HomePage.asMoney(initialInvestment)}</Table.HeaderCell>
                  <Table.HeaderCell style={{height: '8rem', backgroundColor: 'floralwhite'}} >{HomePage.asMoney(position)}</Table.HeaderCell>
                  <Table.HeaderCell style={{height: '8rem', backgroundColor: 'floralwhite'}} >
                    {HomePage.asMoney(position - initialInvestment)}
                    </Table.HeaderCell>
                </Table.Row>
              </Table>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ marginTop: '3rem' }}>
            <Grid.Column width={12}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell style={{ backgroundColor: 'lightblue'}} colSpan='3'>Recent Transactions</Table.HeaderCell>
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
                    <Table.HeaderCell >Amount</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    transactions.slice(1,4).map((row) => {
                      return(
                      <Table.Row>
                        <Table.Cell>{row.ticker}</Table.Cell>
                        <Table.Cell>{row.BuySell}</Table.Cell>
                        <Table.Cell textAlign='right'>{row.numberOfUnits}</Table.Cell>
                        <Table.Cell textAlign='right'>{row.unitPrice}</Table.Cell>
                        <Table.Cell textAlign='right'>{HomePage.asMoney(row.amount)}</Table.Cell>
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

