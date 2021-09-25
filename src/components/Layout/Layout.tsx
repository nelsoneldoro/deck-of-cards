import React from 'react';
import styles from './Layout.module.css';
const Layout: React.FC = ({children}) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.header}>Deck of cards</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
