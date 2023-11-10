import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatScreenSlice = createSlice({
  name: "chatscreen",
  initialState: initialState,
  reducers: {
    addResponse(state, action) {
      // console.log(state);
      return [action.payload, ...state];
    },
    removeResponse(state, action) {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    editResponse(state, action) {
      return state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.You = action.payload.You;
          item.Bing = action.payload.Bing;
        }
      });
    },
  },
});

export const store = configureStore((reducer = chatScreenSlice));

export const responseActions = chatScreenSlice.actions;
