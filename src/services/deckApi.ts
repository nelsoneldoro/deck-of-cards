import {CardCode} from '../models/Card';

const createDeckExample = {success: true, deck_id: 'sru8ag0necv3', remaining: 52, shuffled: false};
const drawAllExample = {
  success: false,
  deck_id: 'fmujfhs9xruv',
  cards: [
    {
      code: 'QD',
      image: 'https://deckofcardsapi.com/static/img/QD.png',
      images: {
        svg: 'https://deckofcardsapi.com/static/img/QD.svg',
        png: 'https://deckofcardsapi.com/static/img/QD.png',
      },
      value: 'QUEEN',
      suit: 'DIAMONDS',
    },
  ],
  remaining: 0,
  error: 'Not enough cards remaining to draw 53 additional',
};

export function create(codes: CardCode['code'][]) {
  const cards = codes.join(',');
  return fetch(`https://deckofcardsapi.com/api/deck/new?cards=${cards}`).then(
    (res) => res.json() as Promise<typeof createDeckExample>,
  );
}

export function drawAll(id: string) {
  return fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`).then(
    (res) => res.json() as Promise<typeof drawAllExample>,
  );
}

export function addToPile(deckId: string, pile: string, codes: CardCode['code'][]) {
  const cards = codes.join(',');
  return fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pile}/add/?cards=${cards}`,
  ).then((res) => res.json());
}
