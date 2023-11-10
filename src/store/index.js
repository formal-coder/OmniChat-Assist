import {configureStore, createSlice} from '@reduxjs/toolkit';
import {database} from '../utils/firebase';
import {ref, set} from 'firebase/database';

const initialState = {user: 'default', userData: [], isFetchingData: false};

const db = database;

const chatScreenSlice = createSlice({
  name: 'chatscreen',
  initialState: initialState,
  reducers: {
    addResponse(state, action) {
      // console.log(state);
      let resObj = [action.payload, ...state.userData];
      set(ref(db, `/${state.user}`), {
        userData: resObj,
      });
      return {...state, userData: resObj};
    },
    removeResponse(state, action) {
      let resObj = state.userData.filter(item => {
        return item.id !== action.payload;
      });
      set(ref(db, `/${state.user}`), {
        userData: resObj,
      });
      return {...state, userData: resObj};
    },
    editResponse(state, action) {
      let resObj = state.userData.forEach(item => {
        if (item.id === action.payload.id) {
          item.You = action.payload.You;
          item.Bing = action.payload.Bing;
          item.Model = action.payload.Model;
        }
        set(ref(db, `/${state.user}`), {
          userData: resObj,
        });
        return {...state, userData: resObj};
      });
    },
    getResponsesFromDatabase(state, action) {
      return {...state, userData: action.payload};
    },
    getUserData(state, action) {
      return {...state, isFetchingData: action.payload};
    },
    setUser(state, action) {
      return {...state, user: action.payload};
    },
  },
});

export const store = configureStore((reducer = chatScreenSlice));

export const responseActions = chatScreenSlice.actions;
