import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    followerCount: 100500,
    buttonClicked: false,
  },
  reducers: {
    followClicked: (state) => {
      state.followerCount += state.buttonClicked ? -1 : 1;
      state.buttonClicked = !state.buttonClicked;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cardSlice.reducer);

export const { followClicked } = cardSlice.actions;
export default persistedReducer;
