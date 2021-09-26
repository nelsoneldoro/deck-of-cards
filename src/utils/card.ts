import {CardCode} from '../models/Card';

export const cardSymbols = ['♥', '♦', '♣', '♠'] as const;
export const cartSuitsCodes = ['H', 'D', 'C', 'S'] as const;
export const cardValues = [
  '2',
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

export const rotateOrder = <V>(arr: V[], firstValue: V) => {
  const copy = [...arr];
  const valueIndex = copy.findIndex((n) => n === firstValue);
  copy.push(...copy.splice(0, valueIndex));
  return copy;
};

export const orderCards = (arr: CardCode[], rotationCard?: CardCode) => {
  if (!rotationCard) return arr;

  const {suitCode, value} = rotationCard;

  const suitCodesOrder = rotateOrder([...cartSuitsCodes], suitCode);
  const valuesOrder = rotateOrder([...cardValues], value);
  const orderRef = suitCodesOrder.reduce((acc, suitCode) => {
    const suitValues = valuesOrder.map((value) => `${value}${suitCode}` as const);
    return [...acc, ...suitValues];
  }, [] as CardCode['code'][]);

  return [...arr].sort(({code: codeA}, {code: codeB}) => {
    return orderRef.indexOf(codeA) - orderRef.indexOf(codeB);
  });
};
