import React from 'react';
import Card, {CarProps} from '../../../components/Card';
import SmallHeader from '../../../components/SmallHeader';
import styles from './RotationCard.module.css';
const RotationCard = ({suitCode, value}: CarProps) => {
  return (
    <div>
      <SmallHeader className={styles.title}>Rotation card</SmallHeader>
      <Card suitCode={suitCode} value={value} />
    </div>
  );
};

export default RotationCard;
