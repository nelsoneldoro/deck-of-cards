import {Card} from '../models/Card';

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

export const suitToSymbol = (suitCode: Card['suitCode']) => {
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

const rotateOrder = <V>(arr: V[], firstValue: V) => {
  const copy = [...arr];
  const valueIndex = copy.findIndex((n) => n === firstValue);
  copy.push(...copy.splice(0, valueIndex));
  return copy;
};

export const sortCardsByRotation = (arr: Card[], rotationCard: Card) => {
  const {suitCode, value} = rotationCard;

  const suitCodesOrder = rotateOrder([...cartSuitsCodes], suitCode);
  const valuesOrder = rotateOrder([...cardValues], value);
  const orderRef = suitCodesOrder.reduce((acc, suitCode) => {
    const suitValues = valuesOrder.map((value) => `${value}${suitCode}` as const);
    return [...acc, ...suitValues];
  }, [] as Card['code'][]);

  return [...arr].sort(({code: codeA}, {code: codeB}) => {
    return orderRef.indexOf(codeA) - orderRef.indexOf(codeB);
  });
};
