import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        return state + action.payload; // payload => parameter yang dikirim
      } else {
        return state + 1;
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        return state - action.payload;
      } else {
        return state - 1;
      }
    }
  },
  // agak error
  selectors: {
    getDoubleCounter(state) {
      return state * 2;
    }
    // getCounter(state, value) {
    //   return state * value;
    // }
  }
});

export const { increment, decrement } = counterSlice.actions;
export const { getDoubleCounter } = counterSlice.selectors;

//mencoba mmebuat selector secara manual
export const getCounter = (state, value) => state.counter * value;
