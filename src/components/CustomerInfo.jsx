import React from 'react';
import {Label} from 'semantic-ui-react';

class CustomerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {age: 40, investmentAmount: 60, investmentHorizon: 7, riskAppetite: 7};
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
    return (
      <div className="customerInfo">
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Age</Label>
        <Label style={{fontSize: '1.1rem', border: 0, color: 'darkgreen'}} basic>{this.state.age}</Label>
        <br/>
        <div id="slidecontainer">
          <input type="range" min="20" max="100" value={this.state.age} className="slider" id="myRange"
                 onInput={this.onAgeChange}/>
          <div className="min">20</div>
          <div className="max">100</div>
        </div>
        <br/><br/>
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Investment Amount in USD</Label>
        <Label style={{fontSize: '1.1rem', border: 0, color: 'darkgreen'}} basic>{this.state.investmentAmount}m</Label>
        <br/>
        <div id="slidecontainer">
          <input type="range" min="1" max="100" value={this.state.investmentAmount} className="slider" id="myRange"
                 onInput={this.onInvestmentAmountChange}/>
          <div className="min">1m</div>
          <div className="max">100m</div>
        </div>
        <br/><br/>
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Investment Horizon in Years</Label>
        <Label style={{fontSize: '1.1rem', border: 0, color: 'darkgreen'}} basic>{this.state.investmentHorizon}</Label>
        <br/>
        <div id="slidecontainer">
          <input type="range" min="1" max="20" value={this.state.investmentHorizon} className="slider" id="myRange"
                 onInput={this.onInvestmentHorizonChange}/>
          <div className="min">1</div>
          <div className="max">20</div>
        </div>
        <br/><br/>
        <Label basic style={{fontSize: '1.1rem', border: '0', paddingLeft: '0'}}>Risk Appetite</Label>
        <Label style={{fontSize: '1.1rem', border: 0, color: 'darkgreen'}} basic>{this.state.riskAppetite}</Label>
        <br/>
        <div id="slidecontainer">
          <input type="range" min="1" max="10" value={this.state.riskAppetite} className="slider" id="myRange"
                 onInput={this.onRiskAppetiteChange}/>
          <div className="min">Low</div>
          <div className="max">High</div>
        </div>
        <br/><br/>
        <Label basic as="a">Tell us more</Label>
      </div>
    );
  }
}

export default CustomerInfo;
