import React from 'react';
import TextInput from '../TextInput';
import styles from './CardTextInput.module.css';

export interface CardTextInputProps {
  value: string;
  className?: string;
  error?: boolean;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

const CardTextInput = ({value, className, error, onChange, onSubmit}: CardTextInputProps) => {
  const handleEnter = React.useCallback(
    (evt: React.KeyboardEvent) => {
      if (evt.key === 'Enter') {
        onSubmit?.();
      }
    },
    [onSubmit],
  );

  const handleChange = React.useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      onChange(evt.target.value.toUpperCase().substr(0, 2));
    },
    [onChange],
  );

  return (
    <div className={styles.root}>
      <TextInput
        className={className}
        value={value}
        placeholder="Card name"
        maxLength={2}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      {error && <span className={styles.error}>Invalid card</span>}
    </div>
  );
};

export default CardTextInput;
