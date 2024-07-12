import React from 'react';
import styles from './Navbar.module.css';
import {Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.link}>
                <FontAwesomeIcon icon={faHome} className={styles.logoIcon} />
            </Link>
            <Link to="/reservations" className={styles.link}>RESERVATIONS</Link>
            <Link to="/event" className={styles.link}>EVENTS CALENDAR</Link>
            <Link to="/menu" className={styles.link}>MENU</Link>
        </div>
    );
};

export default Navbar;
