import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../app/store';
import {CardCode} from '../models/Card';
import {PileType} from '../models/Pile';
import {listPile} from '../services/deckApi';
import {getCardCode} from '../utils/card';

export interface DeckState {
  cards: CardCode[];
  rotationCard: CardCode | undefined;
  order: 'input' | 'rotation';
}

const initialState: DeckState = {
  rotationCard: undefined,
  cards: [],
  order: 'input',
};

export const listPileAsync = createAsyncThunk(
  'deck/listPile',
  async (args: {deckId: string; pile: PileType}) => {
    const response = await listPile(args.deckId, args.pile);
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const counterSlice = createSlice({
  name: 'deck',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setOrder: (state, action: PayloadAction<DeckState['order']>) => {
      state.order = action.payload;
    },
    setCards: (state, action: PayloadAction<DeckState['cards']>) => {
      state.cards = action.payload;
    },
    setRotationCard: (state, action: PayloadAction<DeckState['rotationCard']>) => {
      state.rotationCard = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(listPileAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(listPileAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //     })
  //     .addCase(listPileAsync.rejected, (state, action) => {
  //       state.status = 'failed';
  //     });
  // },
});

export const {setOrder, setCards, setRotationCard} = counterSlice.actions;

export const selectOrder = (state: RootState) => state.deck.order;
export const selectCards = (state: RootState) => state.deck.cards;
export const selectRotationOder = (state: RootState) => state.deck.rotationCard;

export const fetch =
  (id: string): AppThunk =>
  (dispatch, getState) => {
    const [mainDeck, rotationDeck] = id.split('-');

    listPile(mainDeck, PileType.hand).then((r) => {
      const _cards = r?.piles?.[PileType.hand]?.cards || [];
      const cardCodes = _cards.map((_c) => getCardCode(_c.code));
      dispatch(setCards(cardCodes));
    });
    listPile(rotationDeck, PileType.rotation).then((r) => {
      const code = r?.piles?.[PileType.rotation]?.cards?.[0]?.code;
      if (code) {
        const cardCode = getCardCode(code);
        dispatch(setRotationCard(cardCode));
      }
    });
  };

export default counterSlice.reducer;
