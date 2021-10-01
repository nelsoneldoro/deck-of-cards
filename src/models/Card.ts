import type {cardSymbols, cartSuitsCodes, cardValues} from '../utils/card';

export type CardSuitSymbol = typeof cardSymbols[number];
export type CartSuitCode = typeof cartSuitsCodes[number];
export type CardValue = typeof cardValues[number];

export class Card {
  public suitCode: CartSuitCode;
  public value: CardValue;

  static create(code: `${CardValue}${CartSuitCode}`) {
    const chars = code.split('');
    const value = chars[0] as Card['value'];
    const suitCode = chars[1] as Card['suitCode'];
    return new Card({value, suitCode});
  }

  constructor(props: {suitCode: CartSuitCode; value: CardValue}) {
    this.value = props.value;
    this.suitCode = props.suitCode;
  }

  get code(): `${CardValue}${CartSuitCode}` {
    return `${this.value}${this.suitCode}`;
  }
}
