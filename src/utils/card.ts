import {CardCode} from '../models/Card';

export const cardSymbols = ['♥', '♦', '♣', '♠'] as const;
export const cartSuitsCodes = ['H', 'D', 'C', 'S'] as const;
export const cardValues = [
  'A',
  'K',
  'Q',
  'J',
  '0',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
] as const;

export const getCardCode = (value: CardCode['value'], suitCode: CardCode['suitCode']) =>
  `${value}${suitCode}` as const;
