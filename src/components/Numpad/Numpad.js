import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ButtonGroup } from "baseui/button-group";
import { Button } from "baseui/button";

import { store } from "../../store";

import ButtonStyle from "../Styles/ButtonStyle";
import CancelButton from "../Styles/CancelButton";
import EnterButton from "../Styles/EnterButton";
import CorrectionButton from "../Styles/CorrectionButton";
import "./Numpad.scss";

export default function Numpad() {
  const history = useHistory();
  const { dispatch, state } = useContext(store);
  console.log(state);

  return (
    <section className="numpad">
      <ButtonGroup
        overrides={{
          Root: {
            style: () => {
              return {
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gridGap: "10px",
                marginRight: "30px",
              };
            },
          },
        }}
      >
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "1" });
          }}
          overrides={ButtonStyle}
        >
          1
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "2" });
          }}
          overrides={ButtonStyle}
        >
          2
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "3" });
          }}
          overrides={ButtonStyle}
        >
          3
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "4" });
          }}
          overrides={ButtonStyle}
        >
          4
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "5" });
          }}
          overrides={ButtonStyle}
        >
          5
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "6" });
          }}
          overrides={ButtonStyle}
        >
          6
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "7" });
          }}
          overrides={ButtonStyle}
        >
          7
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "8" });
          }}
          overrides={ButtonStyle}
        >
          8
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "9" });
          }}
          overrides={ButtonStyle}
        >
          9
        </Button>
        <Button overrides={ButtonStyle} disabled></Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_NUMBER", payload: "0" });
          }}
          overrides={ButtonStyle}
        >
          0
        </Button>
        <Button overrides={ButtonStyle} disabled></Button>
      </ButtonGroup>

      <ButtonGroup
        overrides={{
          Root: {
            style: () => {
              return {
                display: "grid",
                gridTemplateColumns: "auto",
                gridGap: "10px",
              };
            },
          },
        }}
      >
        <Button
          onClick={() => {
            history.push("/cancel");
          }}
          overrides={CancelButton}
        >
          Cancel
        </Button>

        <Button
          onClick={() => {
            dispatch({ type: "SET_CORRECTION" });
          }}
          overrides={CorrectionButton}
        >
          Correction
        </Button>

        <Button
          onClick={() => {
            dispatch({ type: "SET_LOADING", payload: true });
            setTimeout(() => {
              dispatch({ type: "ENTER" });
            }, 1000);
          }}
          overrides={EnterButton}
        >
          Enter
        </Button>

        <Button
          disabled
          overrides={{
            BaseButton: {
              style: () => {
                return {
                  width: "120px",
                  height: "60px",
                };
              },
            },
          }}
        />
      </ButtonGroup>
    </section>
  );
}
