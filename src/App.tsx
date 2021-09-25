import React from 'react';
import styles from './App.module.css'; // Import css modules stylesheet as styles
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Form from './pages/Form';
import Deck from './pages/Deck';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route exact path="/deck/new">
            <Form />
          </Route>
          <Route exact path="/deck/:id">
            <Deck />
          </Route>
          <Redirect exact from="/" to={'/deck/new'} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
