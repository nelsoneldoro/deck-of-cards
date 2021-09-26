import {CardCode} from '../../../models/Card';
import {PileType} from '../../../models/Pile';
import {addToPile, create as createDeck, drawAll as drawAllDeck} from '../../../services/deckApi';

const savePile = async (pile: PileType, codes: CardCode['code'][]) => {
  const {deck_id} = await createDeck(codes);
  await drawAllDeck(deck_id);
  await addToPile(deck_id, pile, codes);

  return deck_id;
};

export const save = (codes: CardCode['code'][], rotationCode: CardCode['code']) =>
  Promise.all([savePile(PileType.hand, codes), savePile(PileType.rotation, [rotationCode])]).then(
    (r) => {
      const [mainDeckId, rotationDeckId] = r;
      return {mainDeckId, rotationDeckId};
    },
  );
