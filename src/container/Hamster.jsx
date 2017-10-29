import React from 'react';
import CustomerQuestion from '../components/CustomerQuestions';
import Portfolio from '../components/Portfolio';

const styles = {
  mainStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  customer: {
    flex: '1',
  },
  portfolio: {
    flex: '2',
  },
};


export default function Hamster() {
  return (<div>
    <div className="header" style={{ color: 'white' }}>Hamster</div>
    <br />
    <div id="container" style={styles.mainStyle}>
      <CustomerQuestion style={styles.customer} />
      <Portfolio style={styles.portfolio} />
    </div>
  </div>);
}
