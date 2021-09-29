import React from 'react';
import {CardCode} from '../../models/Card';
import Button from '../Button';
import CardTextInput, {useCardInput} from '../CardTextInput';
import styles from './SubmitCardInput.module.css';

interface Props {
  buttonLabel: string;
  onSubmit: (cardCode: CardCode) => void;
}

const SubmitCardInput = ({buttonLabel, onSubmit}: Props) => {
  const {text, error, setText, handleSubmit} = useCardInput(onSubmit);

  return (
    <div className={styles.root}>
      <CardTextInput
        className={styles.input}
        error={error}
        value={text}
        onChange={setText}
        onSubmit={handleSubmit}
      />
      <Button className={styles.button} onClick={handleSubmit}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default SubmitCardInput;
