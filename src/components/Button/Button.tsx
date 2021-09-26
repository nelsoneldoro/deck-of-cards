import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
const Button = (props: Props) => {
  const {className, active, ...otherProps} = props;
  return (
    <button
      className={classNames(styles.root, {[styles.active]: active}, className)}
      {...otherProps}
    />
  );
};

export default Button;
