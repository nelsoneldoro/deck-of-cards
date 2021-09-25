import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'; // Import css modules stylesheet as styles

function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
