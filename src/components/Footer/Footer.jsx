import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContact}>
        <p>Email: sipnplaynyc@gmail.com</p>
        <p>Phone Number: 718-971-1684</p>
        <p>©2020 by Sip & Play</p>
      </div>

      <button className={styles.discordButton}>
        JOIN DISCORD SERVER FOR LATEST UPDATES
      </button>
    </div>
  );
}

export default Footer;
