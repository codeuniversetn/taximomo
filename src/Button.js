import React from 'react';
import { FaEnvelope} from "react-icons/fa";
import './App.css';

function EmailButton() {
  return (
    <div>
      <FaEnvelope className='mail'/>
    </div>
  );
}

export default EmailButton;
