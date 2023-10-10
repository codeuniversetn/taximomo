import {useRef} from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

const Mail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ajp86ca', 'template_be0scbj', form.current, 'm0aLF_5B8qQXtmz_q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <>
            <div className='container_form'>
                <form ref={form} onSubmit={sendEmail} className='form_control'>
                    <h2 className='title_contact'>Contactez Nous</h2>
                    <input type="text" placeholder='Nom*' name='user-name' required/>
                    <input type="text" placeholder='Telephone*' name='user-tel' required/>
                    <input type="email" placeholder='Email*' name='user_email' required/>
                    <input type="text" placeholder='Adresse de prise en charge*' name='adrs-prise' required/>
                    <input type="date" placeholder='Date de prise en charge*' name='date-prise' required/>
                    <input type="time" placeholder='heure de prise en charge*' name='time-prise' required/>
                    <input type="text" placeholder='Destination*' name='desti' required/>
                    <button type='submit' className='btn'>Envoyer</button>
                </form>
            </div>
        </>
    );
}

export default Mail;
