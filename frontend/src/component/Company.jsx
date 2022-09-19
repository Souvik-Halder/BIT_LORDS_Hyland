import React from 'react';
import styles from '../styles/company.module.css';
import DataFetch from './DataFetch';
import DataFetch2 from './DataFetch2';
import PieChart from './PieChart';

const Company = () => {
  return (
    <>
      {/* <div className={styles.cards}>
        <div className={styles.card}>Information</div>
        <div className={styles.card}>Information</div>
        <div className={styles.card}>Information</div>
        <div className={styles.card}>Information</div>
      </div> */}
      <section>
        <h1>Individual Visualization</h1>
        <div className={styles.graph}>
          <PieChart />
          <PieChart />
          <div className={styles.linegraph}>
            <DataFetch />
          </div>
        </div>
      </section>
      <section>
        <h1>Prediction Model of TCS</h1>
        <div className={styles.graph}>
        
          <div className={styles.linegraph}>
            <DataFetch2 />
          </div>
        </div>
      </section>
      {/* <section>
        <h1>HEADING 3</h1>
        <div className={styles.graph}>
          <PieChart />
          <PieChart />
          <div className={styles.linegraph}>
            <DataFetch />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Company;
