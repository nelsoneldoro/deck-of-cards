import React from 'react';
import styles from './CardInfo.module.css';

export interface Props {
  className?: string;
  symbol: '♥' | '♦' | '♣' | '♠';
  value: 'A' | 'K' | 'Q' | 'J' | '10' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';
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
