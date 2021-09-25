import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Form from './pages/Form';
import Deck from './pages/Deck';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/deck/new">
            <Form />
          </Route>
          <Route exact path="/deck/:id">
            <Deck />
          </Route>
          <Redirect exact from="/" to={'/deck/new'} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
