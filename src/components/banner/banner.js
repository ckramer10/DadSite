import React from "react";
import styles from './banner.module.scss';

const Banner = () => {
    return(
      <div className={styles.bannerContainer}>
          <div className={styles.contentContainer}>
              <div className={styles.textContainer}>
                  <h1 className={styles.name}>Peter Kramer</h1>
                  <h3 className={styles.occupation}>Furniture Maker</h3>
                  <h3 className={styles.location}>Amissville, Virginia</h3>
              </div>
          </div>
      </div>
    );
};

export default Banner;