import React from 'react';
import { Header } from 'semantic-ui-react';

import roboImage from '../../assets/images/robots.jpg';


export default function WelcomePage() {
  return (
    <div className="welcomePage">
      <img className="roboImage" src={roboImage} alt="image not available" />
      <Header as="h2" textAlign="center" style={{ backgroundColor: 'white', color: 'black' }}>
        Your Friendly Adviser
      </Header>
    </div>
  );
}
