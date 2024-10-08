import { useState } from 'react';
import styles from './burgermenu.module.scss'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Providers/AuthProvider'; // Import your authentication provider or hook

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { loginData } = useAuth(); // Assuming `loginData` will be non-null if logged in

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgerMenu}>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <div className={`${styles.line} ${isOpen ? styles.line1Open : ''}`}></div>
                <div className={`${styles.line} ${isOpen ? styles.line2Open : ''}`}></div>
                <div className={`${styles.line} ${isOpen ? styles.line3Open : ''}`}></div>
            </div>
            <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <ul>
                    <li><NavLink to="/" onClick={toggleMenu}>Forside</NavLink></li>
                    <li><NavLink to="/Products" onClick={toggleMenu}>Produkter</NavLink></li>
                    <li><NavLink to="/News" onClick={toggleMenu}>Nyheder</NavLink></li>
                    <li><NavLink to="/Contact" onClick={toggleMenu}>Kontakt</NavLink></li>
                    <li><NavLink to="/Login" onClick={toggleMenu}>Login</NavLink></li>
                    {loginData && loginData.user && (
                        <li><NavLink to="/LoggedIn" onClick={toggleMenu}>Min side</NavLink></li>
                    )}
                </ul>
            </nav>
        </div>
    );
};
