import React from 'react';
import DeskBox from '../../components/DeskBox';
import {useParams} from 'react-router-dom';
import {sortCardsByRotation} from '../../utils/card';
import RotationCard from './RotationCard';
import CardList from '../../components/CardList';
import Footer from './Footer';
import Page from '../../components/Page';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {selectCards, selectOrder, selectRotationOder, fetch, setOrder} from '../../features/deck';

const Deck = () => {
  const cards = useAppSelector(selectCards);
  const order = useAppSelector(selectOrder);
  const rotationCard = useAppSelector(selectRotationOder);
  const dispatch = useAppDispatch();

  let {id} = useParams<{id: string}>();

  React.useEffect(() => {
    dispatch(fetch(id));
  }, [dispatch, id]);

  const handleSetOrder = React.useCallback(
    (order: 'input' | 'rotation') => {
      dispatch(setOrder(order));
    },
    [dispatch],
  );

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
      <Footer order={order} onSetOrder={handleSetOrder} />
    </Page>
  );
};

export default Deck;
