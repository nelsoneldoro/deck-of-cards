import React from 'react';
import Card from '../../components/Card';
import CardTextInput, {useCardInput} from '../../components/CardTextInput';
import DeskBox from '../../components/DeskBox';
import FieldGroup from '../../components/FieldGroup';
import SubmitButton from '../../components/SubmitButton';
import SubmitTextInput from '../../components/SubmitCardInput';
import {CardCode} from '../../models/Card';
import {createDeck} from '../../services/deckApi';
import styles from './Form.module.css';
import {useHistory} from 'react-router-dom';
import {Routes} from '../../App';

const Form = () => {
  const history = useHistory();
  const [cards, setCards] = React.useState<CardCode[]>([]);

  const {
    text,
    error,
    validateAndGet: validateAndGetRotation,
    setText,
    handleSubmit,
  } = useCardInput();

  const handleSubmitDeck = () => {
    const rotationCard = validateAndGetRotation();
    if (rotationCard) {
      createDeck(cards).then((r) => {
        history.push(Routes.deck.replace(':id', `${r.deck_id}-${rotationCard.code}`));
      });
    }
  };

  const handleAdd = (cardCode: CardCode) => {
    setCards([...cards, cardCode]);
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
      <div className={styles.footer}>
        <FieldGroup title="Rotation card">
          <CardTextInput error={error} value={text} onChange={setText} onSubmit={handleSubmit} />
          <SubmitButton
            disabled={error || !cards.length}
            className={styles.submit}
            onClick={handleSubmitDeck}
          >
            Submit deck
          </SubmitButton>
        </FieldGroup>
      </div>
    </div>
  );
};

export default Form;
