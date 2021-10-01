import React from 'react';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';

type Param = {
  path?: string;
  route?: string;
  history?: ReturnType<typeof createMemoryHistory>;
};

export function renderWithRouterMatch(
  ui: JSX.Element,
  {path = '/', route = '/', history = createMemoryHistory({initialEntries: [route]})}: Param = {},
  options?: Parameters<typeof render>[1],
) {
  return render(
    <Router history={history}>
      <Route exact path={path}>
        {ui}
      </Route>
    </Router>,
    options,
  );
}
