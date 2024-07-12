import React from 'react';
import styles from './Events.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Events = () => {
  return (
    <div>
    <Navbar />
      <h1 className={styles.title}>UPCOMING EVENTS</h1>
      <div className={styles.eventTimeline}>
        
        <div className={styles.event}>
          <h2 className={styles.eventHeading}>Collector Booster boxes</h2>
          <p className={styles.eventSubheading}>Super excited for Modern Horizons 3! We'll be hosting pre-release all weekend including Monday as usual! Here are also our pre-order prices for members and non-members for boxes</p>
          <ul>
            <li>Members: $395</li>
            <li>Non-members: $420 <a href="https://square.link/u/a6g387wk" className={styles.preorderLink}>Pre-order link</a></li>
          </ul>
        </div>

        <div className={styles.event}>
          <h2 className={styles.eventHeading}>Play booster boxes</h2>

          <ul>
            <li>Members: $255</li>
            <li>Non-members: $270 <a href="https://square.link/u/NnaDbp02" className={styles.preorderLink}>Pre-order link</a></li>
          </ul>
        </div>

        <div className={styles.event}>
          <h2 className={styles.eventHeading}>6/7 6pm</h2>
          <p>Join us for the pre-release event at 6pm on June 7th! Register <a href="https://square.link/u/RmvUCh2J">here</a>.</p>
        </div>

        <div className={styles.event}>
          <h2 className={styles.eventHeading}>6/8 11am</h2>
          <p>Pre-release event at 11am on June 8th. Register <a href="https://square.link/u/qzq0q6Fq">here</a>.</p>
        </div>

        <div className={styles.event}>
          <h2 className={styles.eventHeading}>6/8 5pm</h2>
          <p>Another session of the pre-release event at 5pm on June 8th. Register <a href="https://square.link/u/RwGxiNnW">here</a>.</p>
        </div>

        <div className={styles.event}>
          <h2 className={styles.eventHeading}>6/10 6pm</h2>
          <p>Final pre-release event on June 10th at 6pm. Register <a href="https://square.link/u/q111picV">here</a>.</p>
        </div>
        
      </div>

      <div className={styles.blockContainer}>
        <div className={styles.block1}>
            <h1 className={styles.blockHeading}>Top 8 Prizes & Participation Promo</h1>
            <ul>
                <li>Top 8 receive store credit and promos.</li>
                <li>First 32 registrants get a Springleaf Drum.</li>
                <li>Prizing structure is attendance-based.</li>
            </ul>
        </div>
        <div className={styles.block2}>
            <h1 className={styles.blockHeading}>Competitive Event Details</h1>
            <ul>
                <li>Competitive REL event.</li>
                <li>Staffed by a Level 2 Judge and a Store Tournament Organizer.</li>
                <li>Decklists required.</li>
                <li>Top 8 prizing may change if less than 32 players attend.</li>
            </ul>
        </div>

        <div className={styles.block3}>
            <h1 className={styles.blockHeading}>Example Prizing Structure for 32 Players</h1>
            <ul> 
                <li><strong>1st Place:</strong> $250 Travel Stipend + Foil Goblin Guide + Non-Foil Goblin Guide + Regional Championship Invitation.</li>
                <li><strong>2nd Place:</strong> $200 Store Credit + Non-Foil Goblin Guide.</li>
                <li><strong>3rd & 4th Place:</strong> $125 Store Credit + Non-Foil Goblin Guide.</li>
                <li><strong>5th - 8th Place:</strong> $75 Store Credit + Non-Foil Goblin Guide.</li>

            </ul>
        </div>
      </div>

      <h1 className={styles.title}>WEEKLY EVENTS</h1>
      <div className={styles.eventTimeline}>
        
        <div className={styles.event}>
          <h2 className={styles.eventHeading}>Wednesdays @ 6pm Indoors: Commander Night</h2>
          <p className={styles.weeklySub}><strong>$10</strong> entry (includes raffle for packs and Secret Lair cards)</p>
        </div>

        <div className={styles.event}>
          <h2 className={styles.eventHeading}>Thursdays: Modern @ 7pm</h2>
          <p className={styles.weeklySub}><strong>$15</strong> entry fee</p>
        </div>

        <div className={styles.event}>
          <h2 className={styles.weeklySub}>Flesh and Blood @ 7pm</h2>
        </div>

        <div className={styles.event}>
          <h2 className={styles.weeklySub}>Saturdays: Draft @ 10:15am</h2>
          <p><strong>$25</strong> entry fee</p>
        </div>

        <div className={styles.event}>
          <h2 className={styles.weeklySub}>Saturday Lorcana @ 11am</h2>
        </div>


        
      </div>
     <Footer />
    </div>
  )
}

export default Events;
