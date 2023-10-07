import React from 'react';
import { FaEnvelope} from "react-icons/fa";
import './App.css';

function EmailButton() {
  const recipientEmail = 'taxi.momo.bordeaux@gmail.com';

  const handleClick = () => {
    const subject = '𝗥𝗲𝘀𝗲𝗿𝘃𝗮𝘁𝗶𝗼𝗻 𝗣𝗼𝘂𝗿 𝗠𝗼𝗺𝗼 𝗧𝗮𝘅𝗶'; // Sujet de l'e-mail (facultatif)
    const body = '𝐃𝐚𝐭𝐞 𝐝𝐞 𝐩𝐫𝐢𝐬𝐞 𝐞𝐧 𝐜𝐡𝐚𝐫𝐠𝐞 :\n𝐇𝐞𝐮𝐫𝐞 :\n𝐃𝐞𝐩𝐚𝐫𝐭 :\n𝐃𝐞𝐬𝐭𝐢𝐧𝐚𝐭𝐢𝐨𝐧 :\n𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐭𝐞𝐥 :'; // Texte pré-rempli dans le corps de l'e-mail
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir Gmail dans une nouvelle fenêtre ou un nouvel onglet
    window.open(mailtoLink, '_blank');
  };

  return (
    <div>
      <FaEnvelope  onClick={handleClick} className='mail'/>
    </div>
  );
}

export default EmailButton;
