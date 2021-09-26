import React from 'react';
import SmallHeader from '../SmallHeader';
import styles from './FieldGroup.module.css';

interface Props {
  title: string;
  className?: string;
}
const FieldGroup: React.FC<Props> = ({className, title, children}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <SmallHeader className={styles.title}>{title}</SmallHeader>
      <div>{children}</div>
    </div>
  );
};

export default FieldGroup;
