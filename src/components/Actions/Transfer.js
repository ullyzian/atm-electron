import React, { useContext, useEffect, useState } from "react";
import fetchJSON from "../../utils/fetchJSON";
import { useHistory } from "react-router-dom";
import { store } from "../../store";
import API_BASE_URL from "../../utils/constants";
import { Input } from "baseui/input";
import { Select } from "baseui/select";

import WidthStyle from "../Styles/WidthStyle";
import "./Actions.scss";

export default function Transfer() {
  const { dispatch, state } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    if (state.firstUpdate) {
      dispatch({ type: "RESET", payload: { amount: "1", account: {} } });
      dispatch({ type: "FIRST_UPDATE" });
      fetchJSON(`${API_BASE_URL}/api/accounts/`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        dispatch({
          type: "SET_INPUT",
          payload: { accounts: response, amount: state.input.amount, account: state.input.account },
        });
      });
    } else if (!state.input.account) {
      dispatch({ type: "SET_ERROR", payload: "You didn't select account" });
    } else {
      fetchJSON(`${API_BASE_URL}/api/cards/${localStorage.getItem("card")}/transfer/`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          amount: state.input.amount,
          receiver: state.input.account.id,
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
    <div className="transfer-page">
      <div className="title">Enter account number</div>
      <Select
        options={state.input.accounts}
        clearable={false}
        value={!state.input.account ? [{}] : [state.input.account]}
        searchable={false}
        placeholder="Select account"
        onChange={(params) => dispatch({ type: "SET_ACCOUNT_SELECT", payload: params.value })}
        overrides={WidthStyle}
      />
      <div className="gap" />
      <div className="title">Enter amount</div>
      <Input
        value={state.amount}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT",
            payload: {
              amount: e.target.value,
              account: state.input.account,
              accounts: state.input.accounts,
            },
          })
        }
        placeholder="Amount"
        type="number"
        overrides={WidthStyle}
      />
      <div className="error">{state.errors}</div>
    </div>
  );
}
