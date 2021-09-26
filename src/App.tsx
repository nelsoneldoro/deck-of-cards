import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Form from './pages/Form';
import Deck from './pages/Deck';
import Layout from './components/Layout';

export enum Routes {
  root = '/',
  new = '/deck/new',
  deck = '/deck/:id',
}

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={Routes.new}>
            <Form />
          </Route>
          <Route exact path={Routes.deck}>
            <Deck />
          </Route>
          <Redirect exact from={Routes.root} to={Routes.new} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
