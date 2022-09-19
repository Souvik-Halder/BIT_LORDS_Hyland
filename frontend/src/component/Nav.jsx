import React from 'react';
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>Data Visualization and Prediction</h1>
      {/* <button> */}
      <Link className={styles.link} to={'/'}>
        All Companies
      </Link>
      {/* </button> */}
      {/* <button> */}
      <Link className={styles.link} to={'/individual'}>
        Individual Company
      </Link>
      {/* </button> */}
    </nav>
  );
};

export default Nav;
