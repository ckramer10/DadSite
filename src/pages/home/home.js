import React, { useState } from 'react';
import styles from './home.module.scss';

import Banner from '../../components/banner/banner';

const Home = () => {
  return (
    <div className={styles.homepageContainer}>
      <Banner />
    </div>
  )
};

export default Home;
