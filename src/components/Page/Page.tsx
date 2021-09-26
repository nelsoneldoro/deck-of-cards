import React from 'react';

import styles from './Page.module.css';

interface Props {}
const Page: React.FC<Props> = ({children}) => {
  return <div className={styles.root}>{children}</div>;
};

export default Page;
