import React from 'react';
import DeskBox from '../../components/DeskBox';
import {useParams} from 'react-router-dom';
import {listPile} from '../../services/deckApi';
import {PileType} from '../../models/Pile';
import {CardCode} from '../../models/Card';
import {getCardCode, sortCardsByRotation} from '../../utils/card';
import RotationCard from './RotationCard';
import CardList from '../../components/CardList';
import Footer from './Footer';
import Page from '../../components/Page';
const Deck = () => {
  let {id} = useParams<{id: string}>();
  const [rotationCard, setRotationCard] = React.useState<CardCode>();
  const [cards, setCards] = React.useState<CardCode[]>([]);
  const [order, setOrder] = React.useState<'input' | 'rotation'>('input');

  React.useEffect(() => {
    let isCancelled = false;
    const [mainDeck, rotationDeck] = id.split('-');
    listPile(mainDeck, PileType.hand).then((r) => {
      const _cards = r?.piles?.[PileType.hand]?.cards || [];
      const cardCodes = _cards.map((_c) => getCardCode(_c.code));
      if (!isCancelled) setCards(cardCodes);
    });
    listPile(rotationDeck, PileType.rotation).then((r) => {
      const code = r?.piles?.[PileType.rotation]?.cards?.[0]?.code;
      if (code) {
        const cardCode = getCardCode(code);
        if (!isCancelled) setRotationCard(cardCode);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [id]);

  const orderedCards = React.useMemo(() => {
    return order === 'rotation' && rotationCard ? sortCardsByRotation(cards, rotationCard) : cards;
  }, [order, rotationCard, cards]);

  return (
    <Page>
      <DeskBox>
        <CardList cards={orderedCards} />
        {rotationCard && (
          <RotationCard suitCode={rotationCard.suitCode} value={rotationCard.value} />
        )}
      </DeskBox>
      <Footer order={order} onSetOrder={setOrder} />
    </Page>
  );
};

export default Deck;
