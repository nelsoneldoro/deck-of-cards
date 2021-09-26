import React from 'react';
import DeskBox from '../../components/DeskBox';
import {useParams} from 'react-router-dom';
import {listPile} from '../../services/deckApi';
import {PileType} from '../../models/Pile';
import {CardCode} from '../../models/Card';
import {getCardCode} from '../../utils/card';
import RotationCard from './RotationCard';
import CardList from '../../components/CardList';
const Deck = () => {
  let {id} = useParams<{id: string}>();
  const [rotationCard, setRotationCard] = React.useState<CardCode>();
  const [cards, setCards] = React.useState<CardCode[]>([]);

  React.useEffect(() => {
    const [mainDeck, rotationDeck] = id.split('-');
    listPile(mainDeck, PileType.hand).then((r) => {
      const _cards = r?.piles?.[PileType.hand]?.cards || [];
      const cardCodes = _cards.map((_c) => getCardCode(_c.code));
      setCards(cardCodes);
    });
    listPile(rotationDeck, PileType.rotation).then((r) => {
      const code = r?.piles?.[PileType.rotation]?.cards?.[0]?.code;
      if (code) {
        const cardCode = getCardCode(code);
        setRotationCard(cardCode);
      }
    });
  }, [id]);

  return (
    <div>
      <DeskBox>
        <CardList cards={cards} />
        {rotationCard && (
          <RotationCard suitCode={rotationCard.suitCode} value={rotationCard.value} />
        )}
      </DeskBox>
    </div>
  );
};

export default Deck;
