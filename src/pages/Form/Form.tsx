import React from 'react';
import Card from '../../components/Card';
import DeskBox from '../../components/DeskBox';
import FieldGroup from '../../components/FieldGroup';
import SubmitTextInput from '../../components/SubmitCardInput';
import {CardCode} from '../../models/Card';
import {createDeck} from '../../services/deckApi';
import styles from './Form.module.css';
import {useHistory} from 'react-router-dom';
import {Routes} from '../../App';
import Footer from './Footer';

const Form = () => {
  const history = useHistory();
  const [cards, setCards] = React.useState<CardCode[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmitDeck = (rotationCard: CardCode) => {
    setLoading(true);
    createDeck(cards)
      .then((r) => {
        history.push(Routes.deck.replace(':id', `${r.deck_id}-${rotationCard.code}`));
      })
      .catch(() => alert('Unable to save deck'))
      .finally(() => setLoading(false));
  };

  const handleAdd = (cardCode: CardCode) => {
    if (cards.every((c) => c.code !== cardCode.code)) setCards([...cards, cardCode]);
  };

  return (
    <div className={styles.root}>
      <DeskBox className={styles['desk-box']}>
        <div className={styles['desk-box-content']}>
          {cards.map((card) => (
            <Card key={card.code} suit={card.suitCode} value={card.value} />
          ))}
        </div>
        <FieldGroup title="Add cards to the pile">
          <SubmitTextInput buttonLabel="Add" onSubmit={handleAdd} />
        </FieldGroup>
      </DeskBox>
      <Footer loading={loading} hasCardAdded={!!cards.length} onSubmit={handleSubmitDeck} />
    </div>
  );
};

export default Form;
