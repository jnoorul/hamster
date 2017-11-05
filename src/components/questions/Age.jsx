import React from 'react';

class AgeQuestion extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h1 style={{ textAlign: 'center', lineHeight: '6rem', padding: '21%' }}>I am
          <input type="text" min="20" max="100" className="underlineTextBox" />
          years old and about USD
          <input type="text" min="20" max="100" className="underlineTextBox" style={{ width: '10rem' }} />
          available to invest through Credit Suisse.
        </h1>
      </div>
    );
  }
}

export default AgeQuestion;
