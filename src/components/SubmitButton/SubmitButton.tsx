import React from 'react';
import Button from '../Button';
import styles from './SubmitButton.module.css';

const SubmitButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const {className, ...otherProps} = props;
  return <Button className={`${styles.root} ${className}`} {...otherProps} />;
};

export default SubmitButton;
