import React from 'react';
import { Label } from 'semantic-ui-react';
import { Slider } from 'antd';

class CustomerQuestion extends React.Component {
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
    return (
      <div className="customerQuestion">
        <Label basic>I am
          <input
            type="text"
            style={{
              display: 'inline',
              border: '0px',
              borderBottom: 'solid 1px grey',
              margin: '1rem',
            }}
          />
           years old
        </Label>
        <div style={{ width: '60%' }}><Slider marks={age} step={1} /></div>
        <Label basic>My initial investment amount will be
          <input
            type="text"
            style={{
              display: 'inline',
              border: '0px',
              borderBottom: 'solid 1px grey',
              margin: '1rem',
            }}
          />
          USD(millions)
        </Label>
        <div style={{ width: '60%' }}><Slider marks={investmentAmount} step={10} /></div>
      </div>
    );
  }
}

export default CustomerQuestion;
