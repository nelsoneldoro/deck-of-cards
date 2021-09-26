import React from 'react';
import {suitToSymbol} from '../../utils/card';
import styles from './Card.module.css';
import CardInfo, {Props as CardInfoProps} from './CardInfo';

export interface CarProps {
  suitCode: 'H' | 'D' | 'C' | 'S';
  value: CardInfoProps['value'];
}

const suitToStyleClass = (suitCode: CarProps['suitCode']) => {
  switch (suitCode) {
    case 'H':
      return styles.hearts;
    case 'D':
      return styles.diamonds;
    case 'C':
      return styles.clubs;
    case 'S':
      return styles.spaces;
  }
};

const Card = ({suitCode, value}: CarProps) => {
  const [symbol, suitClass] = React.useMemo(() => {
    return [suitToSymbol(suitCode), suitToStyleClass(suitCode)];
  }, [suitCode]);

  return (
    <div data-testid="card" title={`${value}${suitCode}`} className={`${styles.root} ${suitClass}`}>
      <CardInfo value={value} symbol={symbol} className={styles.header} />
      <span className={styles['main-symbol']}>{symbol}</span>
      <CardInfo value={value} symbol={symbol} className={styles.footer} />
    </div>
  );
};

export default Card;
