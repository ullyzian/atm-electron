import React, { useContext, useEffect } from 'react';
import { store } from '../../store';
import { PinCode } from 'baseui/pin-code';
import PinStyle from '../Styles/PinStyle';
import API_BASE_URL from '../../utils/constants';

import './Pin.scss';

export default function Pin() {
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: ['', '', '', ''] });
    dispatch({
      type: 'SET_URLS',
      payload: { push: '/menu', fetch: `${API_BASE_URL}/pin` },
    });
  }, [dispatch]);

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
    </div>
  );
}
