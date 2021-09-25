import React from 'react';
import styles from './Button.module.css';

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const {className, ...otherProps} = props;
  return <button className={`${styles.root} ${className}`} {...otherProps} />;
};

export default Button;
