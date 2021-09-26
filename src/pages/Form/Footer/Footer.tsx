import React from 'react';
import CardTextInput, {useCardInput} from '../../../components/CardTextInput';
import FieldGroup from '../../../components/FieldGroup';
import SubmitButton from '../../../components/SubmitButton';
import {CardCode} from '../../../models/Card';

import styles from './Footer.module.css';

interface Props {
  loading: boolean;
  hasCardAdded: boolean;
  onSubmit: (rotationCode: CardCode) => void;
}
const Footer = ({loading, hasCardAdded, onSubmit}: Props) => {
  const {text, error, validateAndGet, setText} = useCardInput();

  const handleSubmitDeck = React.useCallback(() => {
    const rotationCard = validateAndGet();
    debugger;
    if (rotationCard) {
      onSubmit(rotationCard);
    }
  }, [onSubmit, validateAndGet]);

  const buttonLabel = React.useMemo(() => {
    return loading ? 'Loading...' : 'Submit deck';
  }, [loading]);

  return (
    <div className={styles.root}>
      <FieldGroup title="Rotation card">
        <CardTextInput error={error} value={text} onChange={setText} />
        <SubmitButton
          disabled={error || !hasCardAdded || loading}
          className={styles.submit}
          onClick={handleSubmitDeck}
        >
          {buttonLabel}
        </SubmitButton>
      </FieldGroup>
    </div>
  );
};

export default Footer;
