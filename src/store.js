import React, { createContext, useReducer } from 'react';
import NumpadReducer from './reducers/NumpadReducer';

const initialState = {
  input: {},
  errors: '',
  loading: false,
  firstUpdate: true
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NumpadReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
