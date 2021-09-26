import React from 'react';
import styles from './FieldGroup.module.css';

interface Props {
  title: string;
  className?: string;
}
const FieldGroup: React.FC<Props> = ({className, title, children}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <h5 className={styles.title}>{title}</h5>
      <div>{children}</div>
    </div>
  );
};

export default FieldGroup;
