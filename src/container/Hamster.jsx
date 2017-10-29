import React from 'react';
import CustomerQuestion from '../components/CustomerQuestions';
import Portfolio from '../components/Portfolio';

const styles = {
  floatRight: {
    display: 'flex',
  },
};


export default function Hamster() {
  return (<div>
    <div className="header" style={{ color: 'white' }}>Hamster</div>
    <br />
    <div id="container" style={styles.floatRight}>
    <CustomerQuestion />
    <Portfolio  />
    </div>
  </div>);
}
