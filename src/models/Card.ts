import type {cardSymbols, cartSuitsCodes, cardValues} from '../utils/card';

export type CardSuitSymbol = typeof cardSymbols[number];
export type CartSuitCode = typeof cartSuitsCodes[number];
export type CardValue = typeof cardValues[number];
export type CardCode = `${CardValue}${CartSuitCode}`;
