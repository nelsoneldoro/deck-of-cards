import React from 'react';
import {Provider} from 'react-redux';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Deck from './Deck';
import {store} from '../../app/store';
import {renderWithRouterMatch} from '../../utils/router';
import {Routes} from '../../App';

import {listPile} from '../../services/deckApi';
import {mocked} from 'ts-jest/utils';

jest.mock('../../services/deckApi');
const listPileAxios = mocked(listPile, true);
listPileAxios
  .mockResolvedValueOnce({
    piles: {
      hand: {
        cards: [
          {
            code: '0D',
            image: 'https://deckofcardsapi.com/static/img/0D.png',
            images: {
              svg: 'https://deckofcardsapi.com/static/img/0D.svg',
              png: 'https://deckofcardsapi.com/static/img/0D.png',
            },
            value: '10',
            suit: 'DIAMONDS',
          },
          {
            code: '3C',
            image: 'https://deckofcardsapi.com/static/img/3C.png',
            images: {
              svg: 'https://deckofcardsapi.com/static/img/3C.svg',
              png: 'https://deckofcardsapi.com/static/img/3C.png',
            },
            value: '3',
            suit: 'CLUBS',
          },
        ],
      },
    },
  })
  .mockResolvedValueOnce({
    piles: {
      rotation: {
        cards: [
          {
            code: 'JH',
            image: 'https://deckofcardsapi.com/static/img/JH.png',
            images: {
              svg: 'https://deckofcardsapi.com/static/img/JH.svg',
              png: 'https://deckofcardsapi.com/static/img/JH.png',
            },
            value: 'JACK',
            suit: 'HEARTS',
          },
        ],
      },
    },
  });

describe('Deck', () => {
  test('get deck from route', async () => {
    listPileAxios('123', 'hand');
    listPileAxios('321', 'rotation');

    expect(listPile).toHaveBeenCalledTimes(2);
    renderWithRouterMatch(
      <Deck />,
      {
        path: Routes.deck.replace(':id', '123-321'),
        route: Routes.deck,
      },
      {wrapper: () => <Provider store={store} />},
    );
  });
});
