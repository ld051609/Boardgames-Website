// Homepage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Homepage.module.css';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Navbar />
            <div className={styles.heroSection}>

                <div className={styles.aboutSection}>
                    <div className={styles.textSection}>
                        <h2 className={styles.subHeading}>OUR STORY</h2>
                        <hr />
                        <p className={styles.paragraph}>
                            Founder, Jonathan Li, shares a passion for board games, boba, and delicious food,
                            so he combined them all to become Sip & Play, Park Slope’s first board game cafe.
                            It is a straightforward concept, come in with your friends and family to play any
                            board game from our library of 300+ games! We hope when you visit, you also enjoy
                            our coffee, espresso, boba, sandwiches, and snacks!
                        </p>
                    </div>
                    <img className={styles.image} src="/homepage-pic.jpg" alt="Sip & Play Cafe" />
                </div>
            </div>
            <div className={styles.timelineSection}>
                <h2 className={styles.timelineHeading}>OUR SERVICES</h2>
                <div className={styles.timeline}>
                    <Link to="/menu" className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.heading3}>Explore Our Menu</h3>
                            <p className={styles.subheading3}>Discover a variety of coffees, boba drinks, sandwiches, and snacks.</p>
                        </div>
                    </Link>
                    <Link to="/reservation" className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.heading3}>Reserve Your Table</h3>
                            <p className={styles.subheading3}>Book a table for your next game night hassle-free.</p>
                        </div>
                    </Link>
                    <Link to="/event" className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.heading3}>Stay Updated with Our Events</h3>
                            <p className={styles.subheading3}>Check out our upcoming shop events and game nights.</p>
                        </div>
                    </Link>
                    <Link to="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?usp=sharing" className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.heading3}>Discover Board Games</h3>
                            <p className={styles.subheading3}>An extensive collection of board games for all ages and interests.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.openingSub}>
                <h2 className={styles.openingHeading}>OPENING HOURS & LOCATION</h2>
                <hr className={styles.hrLine}/>
                <div className={styles.openingDes}>
                    <li><span className={styles.textEmphasis}>Monday - Thursday:</span> 11am - 11pm</li>
                    <li><span className={styles.textEmphasis}>Friday:</span> 11am - midnight</li>
                    <li><span className={styles.textEmphasis}>Saturday:</span> 11am - midnight</li>
                    <li><span className={styles.textEmphasis}>Sunday:</span> 10am - 11pm</li>
                    <p><span className={styles.textEmphasis}>Our kitchen closes 2.5-3 hours before we close!</span></p>
                </div>

            </div>
        <Footer />
        </div>
    );
};

export default Homepage;
