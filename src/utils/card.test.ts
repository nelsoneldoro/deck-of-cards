import {getCardCode, sortCardsByRotation} from './card';
import each from 'jest-each';

each([
  [['AS', '2S', '3S', 'KS'], '2S', ['2S', 'AS', 'KS', '3S']],
  [['AS', '2S', '3S', 'KS'], '3S', ['3S', '2S', 'AS', 'KS']],
  [['AS', '2S', '3S', 'KS'], 'KS', ['KS', '3S', '2S', 'AS']],
  [['2C', 'AC', 'QC', '0C', '8C', '6C', '4C'], '6S', ['6C', '4C', '2C', 'AC', 'QC', '0C', '8C']],
  [['7D', '4C', 'AS', 'JC', 'AH'], '6S', ['AS', 'AH', '7D', '4C', 'JC']],
]).test('test sort by rotation', (codes, rotationCode, expected) => {
  const cards = codes.map(getCardCode);
  const rotationCard = getCardCode(rotationCode);

  const sorted = sortCardsByRotation(cards, rotationCard);

  //get card codes
  const sortedCodes = sorted.map((s) => s.code);
  expect(sortedCodes).toEqual(expected);
});
