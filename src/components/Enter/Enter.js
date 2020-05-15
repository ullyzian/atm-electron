import React, { useContext, useEffect } from 'react';
import { store } from '../../store';
import { Select } from 'baseui/select';
import './Enter.scss';

export default function Enter() {
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    dispatch({
      type: 'SET_URLS',
      payload: { push: '/pin', fetch: null },
    });
  }, [dispatch]);

  return (
    <div className="start-page">
      <div className="title">Please Enter your card</div>
      <div className="form-select">
        <Select
          options={[
            { label: '4321 4321 4321 4321', id: '4321432143214321' },
            { label: '0000 0000 0000 0000', id: '0000000000000000' },
            { label: '1234 1234 1234 1234', id: '1234123412341234' },
          ]}
          error={state.errors === null ? false : true}
          clearable={false}
          value={!state.input ? [{}] : [state.input]}
          searchable={false}
          placeholder="Select card"
          onChange={(params) =>
            dispatch({ type: 'SET_CARD', payload: params.value })
          }
        />
      </div>
    </div>
  );
}
