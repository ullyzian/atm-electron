import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PinCode } from "baseui/pin-code";

import { store } from "../../store";
import fetchJSON from "../../utils/fetchJSON";
import API_BASE_URL from "../../utils/constants";

import PinStyle from "../Styles/PinStyle";

export default function Pin() {
  const { dispatch, state } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    if (state.firstUpdate) {
      dispatch({ type: "RESET", payload: ["", "", "", ""] });
      dispatch({ type: "FIRST_UPDATE" });
    } else {
      fetchJSON(`${API_BASE_URL}/api/auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          card: localStorage.getItem("card"),
          pin: state.input.reduce((a, b) => a + b, ""),
        }),
      }).then((response) => {
        if (response.token) {
          localStorage.setItem("token", `Token ${response.token}`);
          history.push("/menu");
        } else if (response.detail) {
          dispatch({ type: "SET_ERROR", payload: response.detail });
          dispatch({ type: "SET_PIN", payload: ["", "", "", ""] });
        }
      });
    }
  }, []);

  return (
    <div className="pin-page">
      <div className="title">Enter pin</div>
      <PinCode
        values={Array.isArray(state.input) ? state.input : ["", "", "", ""]}
        onChange={({ values }) => {
          dispatch({ type: "SET_PIN", payload: values });
        }}
        overrides={PinStyle}
      />
      <div className="error">{state.errors}</div>
    </div>
  );
}
