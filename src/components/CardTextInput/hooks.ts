import React from 'react';
import {CardCode} from '../../models/Card';
import {cardValues, cartSuitsCodes} from '../../utils/card';

export const useCardInput = (onSubmit: (cardCode: CardCode) => void) => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setError(false);
  }, [text]);

  const validate = React.useCallback(() => {
    if (text.length === 2) {
      const chars = text.split('');
      const value = chars[0] as CardCode['value'];
      const suitCode = chars[1] as CardCode['suitCode'];
      if (cardValues.includes(value) && cartSuitsCodes.includes(suitCode)) {
        setError(false);
        return true;
      }
    }
    setError(true);
    return false;
  }, [text]);

  const handleSubmit = React.useCallback(() => {
    if (validate()) {
      const chars = text.split('');
      const value = chars[0] as CardCode['value'];
      const suitCode = chars[1] as CardCode['suitCode'];

      onSubmit({value, suitCode});
      setText('');
    }
    setError(true);
  }, [text, validate, onSubmit]);

  return {error, text, setText, validate, handleSubmit};
};
