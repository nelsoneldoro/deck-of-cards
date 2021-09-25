import React from 'react';
import styles from './TextInput.module.css';

const TextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const {className, ...otherProps} = props;
  return <input type="text" className={`${styles.root} ${className}`} {...otherProps} />;
};

export default TextInput;
