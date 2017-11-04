import React from 'react';
import Login from '../login/Login';

export default function Header() {
  return (
    <div className="header" >
      <img src={require('../../assets/images/logo.png')} style={{ width: '40px', height: '38px', marginLeft: '2em' }} />
        <Login style={{
            width: '40px', height: '38px', marginRight: '3rem', float: 'right', padding: '0px'}}/>
    </div>
  );
}
