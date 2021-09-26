import {CardCode} from '../models/Card';

const createDeckExample = {success: true, deck_id: 'sru8ag0necv3', remaining: 52, shuffled: false};

export function create(cardCodes: CardCode[]) {
  const codes = cardCodes.map((c) => c.code);
  const cards = codes.join(',');
  return fetch(`https://deckofcardsapi.com/api/deck/new?cards=${cards}`).then(
    (res) => res.json() as Promise<typeof createDeckExample>,
  );
}

export function draw(id: string, count: number) {
  return fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`).then(
    (res) => res.json() as Promise<typeof createDeckExample>,
  );
}
