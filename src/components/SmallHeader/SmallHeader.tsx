import React from 'react';
import styles from './SmallHeader.module.css';

const SmallHeader = (props: React.HTMLAttributes<HTMLHeadElement>) => {
  const {className, children, ...otherProps} = props;
  return (
    <h5 className={`${styles.root} ${className}`} {...otherProps}>
      {children}
    </h5>
  );
};

export default SmallHeader;
