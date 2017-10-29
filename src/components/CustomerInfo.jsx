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

  onAgeChange(value) {
    this.setState({age: value});
  }

  onInvestmentAmountChange(value) {
    this.setState({investmentAmount: value});
  }

  onInvestmentHorizonChange(value) {
    this.setState({investmentHorizon: value});
  }

  onRiskAppetiteChange(value) {
    this.setState({riskAppetite: value});
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
        <Label basic style={{fontSize: '1.1rem', border: '0'}}>Age</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.age}</Label>
        <Slider marks={age} step={1} min={20} max={100} value={this.state.age} onChange={this.onAgeChange} />
        <br /><br />
        <Label basic style={{fontSize: '1.1rem', border: '0'}}>Investment Amount in USD</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.investmentAmount}</Label>
        <Slider marks={investmentAmount} step={10} value={this.state.investmentAmount} onChange={this.onInvestmentAmountChange}/>
        <br /><br />
        <Label basic style={{fontSize: '1.1rem', border: '0'}}>Investment Horizon in Years</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.investmentHorizon}</Label>
        <Slider marks={investmentHorizon} min={0} max={20} step={1} value={this.state.investmentHorizon} onChange={this.onInvestmentHorizonChange} />
        <br /><br />
        <Label basic style={{fontSize: '1.1rem', border: '0'}}>Risk Appetite</Label>
        <Label style={{fontSize: '1.1rem', border: 0}} color="teal">{this.state.riskAppetite}</Label>
        <Slider marks={riskAppetite} step={1} min={1} max={10} value={this.state.riskAppetite} onChange={this.onRiskAppetiteChange} />
        <br /><br />
        <Label basic as="a">Tell us more</Label>
      </div>
    );
  }
}

export default CustomerInfo;
