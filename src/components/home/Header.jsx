import React from 'react';


export default function Header() {
  return (
    <div className="header" >
      <img src={require('../../assets/images/logo.png')} style={{width: "40px", height: "38px", marginLeft: "2em"}}/>
        <img src={require('../../assets/images/login.png')} style={{width: "40px", height: "38px", float:"right"}}/>
    </div>
  );
}
