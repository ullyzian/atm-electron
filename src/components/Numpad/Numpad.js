import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ButtonGroup } from 'baseui/button-group';
import { Button } from 'baseui/button';
import './Numpad.scss';

export default function Numpad(props) {
  const history = useHistory();

  const btnStyle = {
    BaseButton: {
      style: ({ $theme }) => {
        return {
          width: '60px',
          height: '60px',
        };
      },
    },
  };

  return (
    <section className="numpad">
      <ButtonGroup
        overrides={{
          Root: {
            style: ({ $theme }) => {
              return {
                display: 'grid',
                gridTemplateColumns: 'auto auto auto',
                gridGap: '10px',
                marginRight: '30px',
              };
            },
          },
        }}
      >
        <Button overrides={btnStyle}>1</Button>
        <Button overrides={btnStyle}>2</Button>
        <Button overrides={btnStyle}>3</Button>
        <Button overrides={btnStyle}>4</Button>
        <Button overrides={btnStyle}>5</Button>
        <Button overrides={btnStyle}>6</Button>
        <Button overrides={btnStyle}>7</Button>
        <Button overrides={btnStyle}>8</Button>
        <Button overrides={btnStyle}>9</Button>
        <Button overrides={btnStyle} disabled></Button>
        <Button overrides={btnStyle}>0</Button>
        <Button overrides={btnStyle} disabled></Button>
      </ButtonGroup>

      <ButtonGroup
        overrides={{
          Root: {
            style: ({ $theme }) => {
              return {
                display: 'grid',
                gridTemplateColumns: 'auto',
                gridGap: '10px',
              };
            },
          },
        }}
      >
        <Button
          onClick={() => {
            history.push('/');
          }}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                return {
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#d83229',
                };
              },
            },
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={() => {
            history.push('/menu');
          }}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                return {
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#edbc40',
                };
              },
            },
          }}
        >
          Correction
        </Button>

        <Button
          onClick={() => {
            history.push('/pin');
          }}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                return {
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#64ae4e',
                };
              },
            },
          }}
        >
          Enter
        </Button>

        <Button
          disabled
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                return {
                  width: '120px',
                  height: '60px',
                };
              },
            },
          }}
        >
          <Link to="/" className="btn"></Link>
        </Button>
      </ButtonGroup>
    </section>
  );
}
