import React from 'react';
import styles from './Reservation.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Reservations = () => {
  return (
    <div >
        <Navbar/>
        
        <h1>RESERVATIONS DETAILS</h1>
        <div className={styles.container}>
            <p>We have just started using a new reservation software, Tock! Reservations are $15 a person for 3 hours of game time.</p>
            <a href="https://www.exploretock.com/sipnplay/">            
                <button >Reserve NOW!!!</button>
            </a>
        </div>

        <h1 className={styles.birthdayHeading}>BIRTHDAY PACKAGE</h1>
        <div className={styles.container2}>
            <div className={styles.subContainer2}>
                <h3>Renting Entire Backroom:</h3>
                <ul>
                    <li><strong>Price:</strong> $350 for 3 hours of game time exclusively for your party.</li>
                </ul>

            </div>
            <hr />

                <h3>Birthday Backroom Packages:</h3>
            <div className={styles.subContainer}>
                <div className={styles.textContainer}>
                    <h4>Birthday Basic Package:</h4>
                    <li><strong>Price:</strong> $550</li>
                    <li><strong>Includes:</strong> Exclusive use of the entire backroom, pizza, and soda for the entire party.</li>
                    <li><strong>Capacity:</strong> For ten people; each additional person costs +$30.</li>
                </div>
                <div className={styles.textContainer}>
                    <h4>Birthday Premium Package:</h4>
                    <li><strong>Price:</strong> $700</li>
                    <li><strong>Includes:</strong> Exclusive use of the entire backroom, pizza, soda, unlimited bubble tea, unlimited appetizers, and a Sip & Play goodie bag for each participant.</li>
                    <li><strong>Capacity:</strong> For ten people; each additional person costs +$45.</li>
                </div>

            </div>
        </div>

        <Footer/>
    </div>
  );
};

export default Reservations;
