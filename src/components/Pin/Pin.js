import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { store } from '../../store';
import { PinCode } from 'baseui/pin-code';
import PinStyle from '../Styles/PinStyle';
import fetchJSON from '../../utils/fetchJSON';
import API_BASE_URL from '../../utils/constants';

import './Pin.scss';

export default function Pin() {
  const { dispatch, state } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    if (state.firstUpdate) {
      dispatch({ type: 'RESET', payload: ['', '', '', ''] });
      dispatch({ type: 'FIRST_UPDATE' });
    } else {
      fetchJSON(`${API_BASE_URL}/api/auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          card: localStorage.getItem('card'),
          pin: state.input.reduce((a, b) => a + b, ''),
        }),
      }).then((response) => {
        if (response.token) {
          dispatch({ type: 'SET_ERROR', payload: null });
          localStorage.setItem('token', response.token);
          history.push('/menu');
        } else {
          dispatch({ type: 'SET_ERROR', payload: response.detail });
        }
      });
    }
  }, [state.entered]);

  return (
    <div className="pin-page">
      <div className="title">Enter pin</div>
      <PinCode
        values={Array.isArray(state.input) ? state.input : ['', '', '', '']}
        onChange={({ values }) => {
          dispatch({ type: 'SET_PIN', payload: values });
        }}
        overrides={PinStyle}
      />
      <div className="error">{state.errors}</div>
    </div>
  );
}
