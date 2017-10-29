import React from 'react';
import { Label } from 'semantic-ui-react';
import { Slider } from 'antd';

class CustomerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {age:40, investmentAmount: 60, investmentHorizon: 7, riskAppetite: 7};
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onInvestmentAmountChange = this.onInvestmentAmountChange.bind(this);
    this.onInvestmentHorizonChange = this.onInvestmentHorizonChange.bind(this);
    this.onRiskAppetiteChange = this.onRiskAppetiteChange.bind(this);
  }

  onAgeChange(event) {
    this.setState({age: event.target.value});
  }

  onInvestmentAmountChange(event) {
    this.setState({investmentAmount: event.target.value});
  }

  onInvestmentHorizonChange(event) {
    this.setState({investmentHorizon: event.target.value});
  }

  onRiskAppetiteChange(event) {
    this.setState({riskAppetite: event.target.value});
  }

  render() {
    const age = {
      20: '20',
      60: '60',
      100: '100',
    };

    const investmentAmount = {
      0: '0m',
      50: '50m',
      100: '100m',
    };

    const investmentHorizon = {
      0: '0',
      10: '10',
      20: '20',
    };

    const riskAppetite = {
      1: 'Low',
      5: 'Medium',
      10: 'High',
    };


    return (
      <div className="customerInfo">
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Age</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.age}</Label>
        <br /><br />
        <div id="slidecontainer">
          <input type="range" min="1" max="100" value={this.state.age} className="slider" id="myRange" onInput={this.onAgeChange} />
        </div>
        <br /><br />
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Investment Amount in USD</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.investmentAmount}m</Label>
        <br /><br />
        <div id="slidecontainer">
          <input type="range" min="1" max="100" value={this.state.investmentAmount} className="slider" id="myRange" onInput={this.onInvestmentAmountChange} />
        </div>
        <br /><br />
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Investment Horizon in Years</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.investmentHorizon}</Label>
        <br /><br />
        <div id="slidecontainer">
          <input type="range" min="1" max="100" value={this.state.investmentHorizon} className="slider" id="myRange" onInput={this.onInvestmentHorizonChange} />
        </div>
        <br /><br />
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Risk Appetite</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.riskAppetite}</Label>
        <br /><br />
        <div id="slidecontainer">
          <input type="range" min="1" max="100" value={this.state.riskAppetite} className="slider" id="myRange" onInput={this.onRiskAppetiteChange} />
        </div>
        <br /><br />
        <Label basic as="a">Tell us more</Label>
      </div>
    );
  }
}

export default CustomerInfo;
