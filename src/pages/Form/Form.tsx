import React from 'react';
import Card from '../../components/Card';
import DeskBox from '../../components/DeskBox';
import FieldGroup from '../../components/FieldGroup';
import SubmitButton from '../../components/SubmitButton';
import SubmitTextInput from '../../components/SubmitTextInput';
import TextInput from '../../components/TextInput';
import styles from './Form.module.css';

const Form = () => {
  const handleSubmit = (text: string) => console.log(text);

  return (
    <div className={styles.root}>
      <DeskBox className={styles['desk-box']}>
        <div className={styles['desk-box-content']}>
          <Card suit="C" value="4" />
        </div>
        <FieldGroup title="Add cards to the pile">
          <SubmitTextInput placeholder="Card name" buttonLabel="Add" onSubmit={handleSubmit} />
        </FieldGroup>
      </DeskBox>
      <div className={styles.footer}>
        <FieldGroup title="Rotation card">
          <div>
            <TextInput placeholder="Card name" />
            <SubmitButton className={styles.submit}>Submit deck</SubmitButton>
          </div>
        </FieldGroup>
      </div>
    </div>
  );
};
export default Form;
