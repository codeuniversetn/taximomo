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
                    <input type="text" placeholder='Nom et Prenom' name='user_name' required/>
                    <input type="email" placeholder='Email' name='user_email' required/>
                    <input type="number" placeholder='Telephone' name='user-tel' required/>
                    <textarea name='message' className='message' placeholder='Entrez votre texte ici...' required></textarea>
                    <button type='submit' className='btn'>Envoyer</button>
                </form>
            </div>
        </>
    );
}

export default Mail;
