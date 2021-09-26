import React from 'react';
import classNames from 'classnames';

import styles from './PageFooter.module.css';

interface Props {
  className?: string;
}
const PageFooter: React.FC<Props> = ({className, children}) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};

export default PageFooter;
