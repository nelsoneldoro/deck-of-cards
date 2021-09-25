import React from 'react';
import styles from './Card.module.css';
import CardInfo, {Props as CardInfoProps} from './CardInfo';

interface Props {
  suit: 'H' | 'D' | 'C' | 'S';
  value: CardInfoProps['value'];
}

const suitToSymbol = (suit: Props['suit']) => {
  switch (suit) {
    case 'H':
      return '♥' as const;
    case 'D':
      return '♦' as const;
    case 'C':
      return '♣' as const;
    case 'S':
      return '♠' as const;
  }
};

const suitToStyleClass = (suit: Props['suit']) => {
  switch (suit) {
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

const Card = ({suit, value}: Props) => {
  const [symbol, suitClass] = React.useMemo(() => {
    return [suitToSymbol(suit), suitToStyleClass(suit)];
  }, [suit]);

  return (
    <div className={`${styles.root} ${suitClass}`}>
      <CardInfo value={value} symbol={symbol} className={styles.header} />
      <span className={styles['main-symbol']}>{symbol}</span>
      <CardInfo value={value} symbol={symbol} className={styles.footer} />
    </div>
  );
};

export default Card;
