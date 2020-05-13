import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'baseui/button-group';
import { Button } from 'baseui/button';

import WidthStyle from '../Cusomization/WidthStyle';
import './Menu.scss';

export default function Menu() {
  const history = useHistory();

  return (
    <div className="menu-page">
      <div className="title">Please select operation type</div>
      <ButtonGroup
        overrides={{
          Root: {
            style: ({ $theme }) => {
              return {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              };
            },
          },
        }}
      >
        <Button
          onClick={() => {
            history.push('/menu/withdraw');
          }}
          overrides={WidthStyle}
        >
          Withdraw
        </Button>
        <Button
          onClick={() => {
            history.push('/menu/balance');
          }}
          overrides={WidthStyle}
        >
          Show balance
        </Button>
        <Button
          onClick={() => {
            history.push('/menu/history');
          }}
          overrides={WidthStyle}
        >
          Show history
        </Button>
        <Button
          onClick={() => {
            history.push('/menu/transfer');
          }}
          overrides={WidthStyle}
        >
          Transfer
        </Button>
      </ButtonGroup>
    </div>
  );
}
