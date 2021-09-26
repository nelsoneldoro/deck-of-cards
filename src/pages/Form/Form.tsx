import React from 'react';
import DeskBox from '../../components/DeskBox';
import FieldGroup from '../../components/FieldGroup';
import SubmitTextInput from '../../components/SubmitCardInput';
import {CardCode} from '../../models/Card';
import {addToPile, create as createDeck, drawAll as drawAllDeck} from '../../services/deckApi';
import styles from './Form.module.css';
import {useHistory} from 'react-router-dom';
import {Routes} from '../../App';
import Footer from './Footer';
import {PileType} from '../../models/Pile';
import CardList from '../../components/CardList';

const savePile = async (pile: PileType, codes: CardCode['code'][]) => {
  const {deck_id} = await createDeck(codes);
  await drawAllDeck(deck_id);
  await addToPile(deck_id, pile, codes);

  return deck_id;
};

const useForm = () => {
  const history = useHistory();
  const [cards, setCards] = React.useState<CardCode[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmitDeck = React.useCallback(
    (rotationCard: CardCode) => {
      const codes = cards.map((c) => c.code);

      setLoading(true);
      Promise.all([
        savePile(PileType.hand, codes),
        savePile(PileType.rotation, [rotationCard.code]),
      ])
        .then((r) => {
          const [mainDeckId, rotationDeckId] = r;
          history.push(Routes.deck.replace(':id', `${mainDeckId}-${rotationDeckId}`));
        })
        .finally(() => setLoading(false));
    },
    [cards, history],
  );

  const handleAdd = React.useCallback(
    (cardCode: CardCode) => {
      if (cards.length <= 10 && cards.every((c) => c.code !== cardCode.code))
        setCards([...cards, cardCode]);
    },
    [cards],
  );
  return {loading, cards, handleAdd, handleSubmitDeck};
};

const Form = () => {
  const {loading, cards, handleSubmitDeck, handleAdd} = useForm();

  return (
    <div className={styles.root}>
      <DeskBox className={styles['desk-box']}>
        <CardList cards={cards} />
        <FieldGroup title="Add cards to the pile">
          <SubmitTextInput buttonLabel="Add" onSubmit={handleAdd} />
        </FieldGroup>
      </DeskBox>
      <Footer loading={loading} hasCardAdded={!!cards.length} onSubmit={handleSubmitDeck} />
    </div>
  );
};

export default Form;
