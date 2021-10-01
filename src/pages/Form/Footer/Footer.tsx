import React from 'react';
import CardTextInput, {useCardInput} from '../../../components/CardTextInput';
import FieldGroup from '../../../components/FieldGroup';
import PageFooter from '../../../components/PageFooter';
import SubmitButton from '../../../components/SubmitButton';
import {Card} from '../../../models/Card';

import styles from './Footer.module.css';

interface Props {
  loading: boolean;
  hasCardAdded: boolean;
  onSubmit: (rotationCard: Card) => void;
}
const Footer = ({loading, hasCardAdded, onSubmit}: Props) => {
  const {text, error, validateAndGet, setText} = useCardInput();

  const handleSubmitDeck = React.useCallback(() => {
    const rotationCard = validateAndGet();
    if (rotationCard) {
      onSubmit(rotationCard);
    }
  }, [onSubmit, validateAndGet]);

  const buttonLabel = React.useMemo(() => {
    return loading ? 'Loading...' : 'Submit deck';
  }, [loading]);

  return (
    <PageFooter>
      <FieldGroup title="Rotation card">
        <CardTextInput error={error} value={text} onChange={setText} onSubmit={handleSubmitDeck} />
        <SubmitButton
          disabled={error || !hasCardAdded || loading}
          className={styles.submit}
          onClick={handleSubmitDeck}
        >
          {buttonLabel}
        </SubmitButton>
      </FieldGroup>
    </PageFooter>
  );
};

export default Footer;
