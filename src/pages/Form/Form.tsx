import React from 'react';
import DeskBox from '../../components/DeskBox/DeskBox';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.root}>
      <DeskBox className={styles['desk-box']}>
        <p>New Deck</p>
      </DeskBox>
    </div>
  );
};

export default Form;
