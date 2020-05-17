import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ButtonGroup } from "baseui/button-group";
import { Button } from "baseui/button";

import { store } from "../../store";

import WidthStyle from "../Styles/WidthStyle";

export default function Menu() {
  const { dispatch } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "RESET", payload: {} });
  }, []);

  return (
    <div className="menu-page">
      <div className="title">Please select operation type</div>
      <ButtonGroup
        overrides={{
          Root: {
            style: () => {
              return {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              };
            },
          },
        }}
      >
        <Button
          onClick={() => {
            dispatch({ type: "SET_LOADING", payload: true });
            setTimeout(() => {
              history.push("/menu/withdraw");
              dispatch({ type: "SET_LOADING", payload: false });
            }, 1000);
          }}
          overrides={WidthStyle}
        >
          Withdraw
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_LOADING", payload: true });
            setTimeout(() => {
              history.push("/menu/balance");
              dispatch({ type: "SET_LOADING", payload: false });
            }, 1000);
          }}
          overrides={WidthStyle}
        >
          Show balance
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_LOADING", payload: true });
            setTimeout(() => {
              history.push("/menu/history");
              dispatch({ type: "SET_LOADING", payload: false });
            }, 1000);
          }}
          overrides={WidthStyle}
        >
          Show history
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "SET_LOADING", payload: true });
            setTimeout(() => {
              history.push("/menu/transfer");
              dispatch({ type: "SET_LOADING", payload: false });
            }, 1000);
          }}
          overrides={WidthStyle}
        >
          Transfer
        </Button>
      </ButtonGroup>
    </div>
  );
}
