import React from 'react';
import Card from '../../components/Card';
import DeskBox from '../../components/DeskBox';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.root}>
      <DeskBox className={styles['desk-box']}>
        <Card value={'4'} suit="C" />
        <Card value={'A'} suit="D" />
        <Card value={'A'} suit="H" />
        <Card value={'A'} suit="S" />
        <Card value={'A'} suit="S" />
        <Card value={'A'} suit="S" />
        <Card value={'A'} suit="S" />
        <Card value={'A'} suit="S" />
        <Card value={'A'} suit="S" />
      </DeskBox>
    </div>
  );
};

export default Form;
