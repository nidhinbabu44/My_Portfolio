import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';
import styles from "../styles/ContactMe.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_2j26xvv',
      'template_06a24cl',
      form.current,
      'ZwKjSyk_LyzvIVJ8h'
    ).then(
      () => {
        alert('Message Sent Successfully!');
        form.current.reset();
        setLoading(false);
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className={styles.contactContainer}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required rows="6" />
        
        <button type="submit" disabled={loading}>
          {loading ? (
            <CircularProgress 
              height={20}
              width={20}
              color="#fff"
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#ccc"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ContactMe;
