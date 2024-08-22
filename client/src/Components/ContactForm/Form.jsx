import React, { useState } from 'react';
import styles from './form.module.scss';
import map from '../../assets/Images/map/map.png';
import { NavLink } from 'react-router-dom';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name) {
      validationErrors.name = 'Navn er påkrævet';
    }
    if (!email) {
      validationErrors.email = 'Email er påkrævet';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Ugyldig email';
    }
    if (!message) {
      validationErrors.message = 'Besked er påkrævet';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form or do something else
      console.log('Form submitted', { name, email, message });
      setErrors({});
    }
  };

  return (
    <>
      <h2>Kontakt os</h2>
      <div className={styles.formWrapper}>
        <section className={styles.formBox}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Indtast dit navn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <input
              type="email"
              placeholder="Indtast din email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <textarea
              placeholder="Skriv en besked"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}

            <div className={styles.btnContainer}>
              <button type="submit">SEND</button>
            </div>
          </form>
        </section>
        <section className={styles.imgContainer}>
          <NavLink to="https://www.google.com/maps/place/%C3%98ster+Uttrup+Vej+1,+9000+Aalborg/@57.0479261,9.9648879,17z/data=!3m1!4b1!4m6!3m5!1s0x464932b6a2b7696b:0x861634f2bf524040!8m2!3d57.0479232!4d9.9674628!16s%2Fg%2F11cpl6g6xw?entry=ttu">
            <img src={map} alt="Google Maps link" />
          </NavLink>
        </section>
      </div>
    </>
  );
};
