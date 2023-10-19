import React from 'react';
import fix from "./fix.png";
import './App.css';

function Fix() {
  return (
    <div>
      <a href="tel:+33557049228"><img src={fix} alt="fix" className='fix'/></a>
    </div>
  );
}

export default Fix;
