import React from 'react';
import styles from './DeskBox.module.css';

interface Props {
  className?: string;
}
const DeskBox: React.FC<Props> = ({className, children}) => {
  return (
    <div data-testid="desk" className={`${styles.root} ${className}`}>
      {children}
    </div>
  );
};

export default DeskBox;
