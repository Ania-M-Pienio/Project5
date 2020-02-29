import React from 'react';
import m8 from '../assets/BM8.png';

const Logo = props => {
  return (
  <div className="logo">
    <div className="logoBorder">
       <img src={m8} alt="Bride Mate Logo"></img>        
    </div>
  </div>
  );
};

export default Logo;