import React from 'react';
import Card from '../../components/Card';
import CardTextInput, {useCardInput} from '../../components/CardTextInput';
import DeskBox from '../../components/DeskBox';
import FieldGroup from '../../components/FieldGroup';
import SubmitButton from '../../components/SubmitButton';
import SubmitTextInput from '../../components/SubmitCardInput';
import {CardCode} from '../../models/Card';
import styles from './Form.module.css';

const Form = () => {
  const [cards, setCards] = React.useState<CardCode[]>([]);

  const handleAddRotationCard = (cardCode: CardCode) => {
    console.log('rotation', cardCode);
  };
  const {text, error, validate, setText, handleSubmit} = useCardInput(handleAddRotationCard);

  const handleSubmitDeck = () => {
    validate();
    console.log('submit deck');
  };

  const handleAdd = (cardCode: CardCode) => {
    setCards([...cards, cardCode]);
  };

  return (
    <div className={styles.root}>
      <DeskBox className={styles['desk-box']}>
        <div className={styles['desk-box-content']}>
          {cards.map((card) => (
            <Card key={`${card.value}${card.suitCode}`} suit={card.suitCode} value={card.value} />
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
