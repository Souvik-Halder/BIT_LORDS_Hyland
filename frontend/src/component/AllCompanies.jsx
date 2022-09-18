import React from 'react';
import styles from '../styles/company.module.css';
import DataFetch from './DataFetch';
import PieChart from './PieChart';

const AllCompanies = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>Information</div>
        <div className={styles.card}>Information</div>
        <div className={styles.card}>Information</div>
        <div className={styles.card}>Information</div>
      </div>
      <section>
        <h1>COMPANY 1</h1>
        <div className={styles.graph}>
          <PieChart />
          <PieChart />
          <div className={styles.linegraph}>
            <DataFetch />
          </div>
        </div>
      </section>
      <section>
        <h1>COMPANY 2</h1>
        <div className={styles.graph}>
          <PieChart />
          <PieChart />
          <div className={styles.linegraph}>
            <DataFetch />
          </div>
        </div>
      </section>
      <section>
        <h1>COMPANY 3</h1>
        <div className={styles.graph}>
          <PieChart />
          <PieChart />
          <div className={styles.linegraph}>
            <DataFetch />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCompanies;
