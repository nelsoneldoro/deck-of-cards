import React from 'react';
import Card, {CarProps} from '../../../components/Card';
import styles from './RotationCard.module.css';
const RotationCard = ({suitCode, value}: CarProps) => {
  return (
    <div>
      <h5 className={styles.title}>Rotation card</h5>
      <Card suitCode={suitCode} value={value} />
    </div>
  );
};

export default RotationCard;
