import React from 'react';
import {CardSuitSymbol, CardValue} from '../../models/Card';
import styles from './CardInfo.module.css';

export interface Props {
  className?: string;
  symbol: CardSuitSymbol;
  value: CardValue;
}

const CardInfo = ({className, symbol, value}: Props) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.symbol}>{symbol}</span>
    </div>
  );
};

export default CardInfo;
