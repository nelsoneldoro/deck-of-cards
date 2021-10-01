import React from 'react';
import Card from '../../components/Card';
import {Card as CardModel} from '../../models/Card';
import styles from './CardList.module.css';

interface Props {
  cards: CardModel[];
}
const CardList = ({cards}: Props) => {
  return (
    <div className={styles.root}>
      {cards.map((card) => (
        <Card key={card.code} suitCode={card.suitCode} value={card.value} />
      ))}
    </div>
  );
};

export default CardList;
