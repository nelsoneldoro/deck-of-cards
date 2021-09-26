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

export const getCode = (value: CardCode['value'], suitCode: CardCode['suitCode']) =>
  `${value}${suitCode}` as const;

export const getCardCode = (code: CardCode['code']) => {
  const chars = code.split('');
  const value = chars[0] as CardCode['value'];
  const suitCode = chars[1] as CardCode['suitCode'];
  return {code, suitCode, value} as CardCode;
};

export const suitToSymbol = (suitCode: CardCode['suitCode']) => {
  switch (suitCode) {
    case 'H':
      return '♥' as const;
    case 'D':
      return '♦' as const;
    case 'C':
      return '♣' as const;
    case 'S':
      return '♠' as const;
  }
};
