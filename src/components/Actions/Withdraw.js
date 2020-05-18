import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import ReturnButton from "../Styles/ReturnButton";

import fetchJSON from "../../utils/fetchJSON";
import API_BASE_URL from "../../utils/constants";
import { store } from "../../store";

import WidthStyle from "../Styles/WidthStyle";
import "./Actions.scss";

export default function Withdraw() {
  const { dispatch, state } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    if (state.firstUpdate) {
      dispatch({ type: "RESET", payload: { amount: "" } });
      dispatch({ type: "FIRST_UPDATE" });
    } else {
      fetchJSON(`${API_BASE_URL}/api/cards/${localStorage.getItem("card")}/withdraw/`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          amount: state.input.amount,
        }),
      }).then((response) => {
        if (response.message) {
          dispatch({ type: "SET_ERROR", payload: null });
          history.push("/completed");
        } else {
          dispatch({ type: "SET_ERROR", payload: response.detail });
        }
      });
    }
  }, []);
  return (
    <div className="withdraw-page page">
      <div className="title">Enter withdraw amount</div>
      <Input
        value={state.input.amount}
        onChange={(e) =>
          dispatch({
            type: "SET_AMOUNT",
            payload: {
              amount: e.target.value,
            },
          })
        }
        placeholder="Amount"
        overrides={WidthStyle}
        disabled
        min="1"
        max="1000"
      />
      <div className="error">{state.errors}</div>
      <Button onClick={() => history.push("/menu")} overrides={ReturnButton}>
        Return to menu
      </Button>
    </div>
  );
}
