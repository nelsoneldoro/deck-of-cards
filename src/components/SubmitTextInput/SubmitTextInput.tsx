import React from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import styles from './SubmitTextInput.module.css';

interface Props {
  buttonLabel: string;
  placeholder?: string;
  onSubmit: (value: string) => void;
}

const SubmitTextInput = ({placeholder, buttonLabel, onSubmit}: Props) => {
  const [value, setValue] = React.useState('');
  const handleChange = React.useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setValue(evt.target.value);
    },
    [setValue],
  );

  const handleSubmit = React.useCallback(() => {
    onSubmit(value);
    setValue('');
  }, [value, onSubmit]);

  const handleEnter = React.useCallback(
    (evt: React.KeyboardEvent) => {
      if (evt.key === 'Enter') {
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  return (
    <div className={styles.root}>
      <TextInput
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
        onKeyDown={handleEnter}
      />
      <Button className={styles.button} onClick={handleSubmit}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default SubmitTextInput;
