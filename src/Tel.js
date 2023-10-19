import React from 'react';
import {FaPhoneAlt } from "react-icons/fa";
import './App.css';

function Tel() {
  return (
    <div>
      <a href="tel:+33635337224"><FaPhoneAlt className='tel'/></a>
    </div>
  );
}

export default Tel;
