import React, { createContext, useReducer } from 'react';
import fetchJSON from './utils/fetchJSON';
import pinLenCheck from './utils/pinLenCheck';

const initialState = {
  input: {},
  errors: '',
  loading: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ENTER':
        if (Object.keys(state.input).length === 0) {
          return { ...state, errors: 'Error', loading: false };
        } else if (state.fetch !== null) {
          const data = fetchJSON(state.fetch, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          });
          return {};
        } else {
          return { ...state, errors: null, loading: false };
        }
      case 'RESET':
        return {
          input: action.payload,
        };
      case 'SET_CARD':
        return { ...state, input: action.payload[0] };
      case 'SET_URLS':
        return {
          ...state,
          push: action.payload.push,
          fetch: action.payload.fetch,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
      case 'SET_PIN':
        return {
          ...state,
          input: action.payload,
        };
      case 'SET_NUMBER':
        if (Array.isArray(state.input)) {
          console.log(pinLenCheck(state.input, action.payload));
          return {
            ...state,
            input: pinLenCheck(state.input, action.payload),
          };
        } else {
          return {
            ...state,
            number: action.payload,
          };
        }
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
