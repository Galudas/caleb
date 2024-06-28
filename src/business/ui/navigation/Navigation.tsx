import React from 'react';
import styles from './Navigation.module.css';
import { logoPath } from '../../../variables';
import TitleComponent from '../../../components/title/Title.component';

const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <div>
        <img src={logoPath} alt="" />
        <TitleComponent />
      </div>
    </div>
  );
};

export default Navigation;
