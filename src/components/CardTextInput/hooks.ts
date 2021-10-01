import React from 'react';
import {Card} from '../../models/Card';
import {cardValues, cartSuitsCodes} from '../../utils/card';

export const useCardInput = (onSubmit?: (cardCode: Card) => void) => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setError(false);
  }, [text]);

  const validateAndGet = React.useCallback(() => {
    if (text.length === 2) {
      const chars = text.split('');
      const value = chars[0] as Card['value'];
      const suitCode = chars[1] as Card['suitCode'];
      if (cardValues.includes(value) && cartSuitsCodes.includes(suitCode)) {
        setError(false);
        const chars = text.split('');
        const value = chars[0] as Card['value'];
        const suitCode = chars[1] as Card['suitCode'];
        const cardCode = new Card({value, suitCode});

        return cardCode;
      }
    }
    setError(true);
    return null;
  }, [text]);

  const handleSubmit = React.useCallback(() => {
    const card = validateAndGet();
    if (card) {
      onSubmit?.(card);
      setText('');
    }
    setError(true);
  }, [validateAndGet, onSubmit]);

  return {error, text, setText, validateAndGet, handleSubmit};
};
