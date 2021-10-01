import {Card} from '../../../models/Card';
import {PileType} from '../../../models/Pile';
import {addToPile, create as createDeck, drawAll as drawAllDeck} from '../../../services/deckApi';

const savePile = async (pile: PileType, codes: Card['code'][]) => {
  const {deck_id} = await createDeck(codes);
  await drawAllDeck(deck_id);
  await addToPile(deck_id, pile, codes);

  return deck_id;
};

export const save = (codes: Card['code'][], rotationCode: Card['code']) =>
  Promise.all([savePile(PileType.hand, codes), savePile(PileType.rotation, [rotationCode])]).then(
    (r) => {
      const [mainDeckId, rotationDeckId] = r;
      return {mainDeckId, rotationDeckId};
    },
  );
