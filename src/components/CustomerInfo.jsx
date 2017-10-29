import React from 'react';
import { Label } from 'semantic-ui-react';
import { Slider } from 'antd';

class CustomerInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const age = {
      0: '20',
      50: '60',
      100: '100',
    };

    const investmentAmount = {
      0: '0m',
      50: '50m',
      100: '100m',
    };

    const investmentHorizon = {
      0: '0',
      50: '10',
      100: '20',
    };

    const riskAppetite = {
      0: 'Low',
      50: 'Medium',
      100: 'High',
    };


    return (
      <div className="customerQuestion">
        <Label basic>Age</Label>
        <Slider marks={age} step={1} />
        <br /><br />
        <Label basic>Investment Amount in USD(millions)</Label>
        <Slider marks={investmentAmount} step={10} />
        <br /><br />
        <Label basic>Investment Horizon in Years</Label>
        <Slider marks={investmentHorizon} step={10} />
        <br /><br />
        <Label basic>Risk Appetite</Label>
        <Slider marks={riskAppetite} step={10} />
        <br /><br />
        <Label as="a">Tell us more</Label>
      </div>
    );
  }
}

export default CustomerInfo;
