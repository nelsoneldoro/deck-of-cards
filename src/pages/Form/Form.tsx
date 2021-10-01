import React from 'react';
import DeskBox from '../../components/DeskBox';
import FieldGroup from '../../components/FieldGroup';
import SubmitTextInput from '../../components/SubmitCardInput';
import {Card} from '../../models/Card';
import styles from './Form.module.css';
import {useHistory} from 'react-router-dom';
import {Routes} from '../../App';
import Footer from './Footer';
import CardList from '../../components/CardList';
import Page from '../../components/Page';
import {save} from './Footer/utils';

const useForm = () => {
  const history = useHistory();
  const [cards, setCards] = React.useState<Card[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmitDeck = React.useCallback(
    async (rotationCard: Card) => {
      const codes = cards.map((c) => c.code);

      try {
        setLoading(true);
        const {mainDeckId, rotationDeckId} = await save(codes, rotationCard.code);
        history.push(Routes.deck.replace(':id', `${mainDeckId}-${rotationDeckId}`));
      } catch {
        alert('Unable to submit cards');
      } finally {
        setLoading(false);
      }
    },
    [cards, history],
  );

  const handleAdd = React.useCallback(
    (cardCode: Card) => {
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
    <Page>
      <DeskBox className={styles['desk-box']}>
        <CardList cards={cards} />
        <FieldGroup title="Add cards to the pile">
          <SubmitTextInput buttonLabel="Add" onSubmit={handleAdd} />
        </FieldGroup>
      </DeskBox>
      <Footer loading={loading} hasCardAdded={!!cards.length} onSubmit={handleSubmitDeck} />
    </Page>
  );
};

export default Form;
