import React from 'react';
import Button from '../../../components/Button';
import PageFooter from '../../../components/PageFooter';
import SmallHeader from '../../../components/SmallHeader';
import classnames from 'classnames';

import styles from './Footer.module.css';

type OrderType = 'input' | 'rotation';

interface Props {
  order: OrderType;
  onSetOrder: (order: OrderType) => void;
}
const Footer = ({order, onSetOrder}: Props) => {
  const handleSetOrder = React.useCallback(
    (order: OrderType) => () => {
      onSetOrder(order);
    },
    [onSetOrder],
  );
  return (
    <PageFooter className={styles.root}>
      <SmallHeader className={styles.title}>Sort cards by</SmallHeader>
      <Button
        active={order === 'input'}
        className={classnames(styles.button, styles.inputOrder)}
        onClick={handleSetOrder('input')}
      >
        Input order
      </Button>
      <Button
        active={order === 'rotation'}
        className={classnames(styles.button, styles.rotationOrder)}
        onClick={handleSetOrder('rotation')}
      >
        Rotation order
      </Button>
    </PageFooter>
  );
};

export default Footer;
