import {CardCode} from '../models/Card';
import {PileType} from '../models/Pile';

const cardExample = {
  code: 'AH' as CardCode['code'],
  image: 'https://deckofcardsapi.com/static/img/AH.png',
  images: {
    svg: 'https://deckofcardsapi.com/static/img/AH.svg',
    png: 'https://deckofcardsapi.com/static/img/AH.png',
  },
  value: 'ACE',
  suit: 'HEARTS',
};

type Card = typeof cardExample;

const createDeckExample = {success: true, deck_id: 'sru8ag0necv3', remaining: 52, shuffled: false};
type CreateDeck = typeof createDeckExample;

const drawAllExample = {
  success: true,
  deck_id: 'fmujfhs9xruv',
  cards: [cardExample],
  remaining: 0,
};
type DrawAll = typeof drawAllExample;

const apiUrl = 'https://deckofcardsapi.com/api/deck';

export function create(codes: CardCode['code'][]) {
  const cards = codes.join(',');
  return fetch(`${apiUrl}/new?cards=${cards}`).then((res) => res.json() as Promise<CreateDeck>);
}

export function drawAll(id: string) {
  return fetch(`${apiUrl}/${id}/draw/?count=52`).then((res) => res.json() as Promise<DrawAll>);
}

export function addToPile(deckId: string, pile: string, codes: CardCode['code'][]) {
  const cards = codes.join(',');
  return fetch(`${apiUrl}/${deckId}/pile/${pile}/add/?cards=${cards}`).then((res) => res.json());
}

type ListPile = {
  piles: Record<PileType, {cards: Card[]}>;
};

export function listPile(deckId: string, pile: string) {
  return fetch(`${apiUrl}/${deckId}/pile/${pile}/list/`).then(
    (res) => res.json() as Promise<ListPile>,
  );
}
