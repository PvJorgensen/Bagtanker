import React from 'react';
import styles from './watchnav.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export const WatchNav = () => {
  const location = useLocation();

  const titles = {
    '/': 'Forside',
    '/Products': 'Produkter',
    '/ProductsDetails': 'Produkt Detaljer',
    '/News': 'Nyheder',
    '/Contact': 'Kontakt',
    '/Login': 'Login',
    '/LoggedIn': 'Logged Ind',
  };

  const secondTitles = {
    '1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59': 'Morgenbrød',
    '1fc2cb0b-33b8-11ef-a9aa-001dd8b71d59': 'Baguettes',
    '1fc2cb8f-33b8-11ef-a9aa-001dd8b71d59': 'Franskbrød',
    '1fc2cbec-33b8-11ef-a9aa-001dd8b71d59': 'Kager',
    '1fc2cc4a-33b8-11ef-a9aa-001dd8b71d59': 'Rugbrød',
    '1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59': 'Grovbrød',
    '1fc2ccee-33b8-11ef-a9aa-001dd8b71d59': 'Boller',
  };


  const pathnames = location.pathname.split('/').filter((x) => x);

  const currentTitle = titles[`/${pathnames[0]}`];
  const secondTitle = secondTitles[pathnames[1]];

  return (
    <div className={styles.watchNav}>
      <p>Du er her: 
        <NavLink to="/">Forside</NavLink> 
        {currentTitle && currentTitle !== 'Forside' && (
          <>
            {' / '}
            <NavLink to={`/${pathnames[0]}`}>{currentTitle}</NavLink>
          </>
        )}
        {secondTitle && (
          <>
            {' / '}
            <NavLink to={location.pathname}>{secondTitle}</NavLink>
          </>
        )}
      </p>
    </div>
  );
};
