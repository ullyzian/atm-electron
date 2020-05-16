import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Select } from "baseui/select";

import { store } from "../../store";

import "./Start.scss";

export default function Enter() {
  const { dispatch, state } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    if (state.firstUpdate) {
      dispatch({ type: "FIRST_UPDATE" });
    } else {
      if (Object.keys(state.input).length === 0) {
        dispatch({ type: "SET_ERROR", payload: "Card doesn't selected" });
      } else {
        localStorage.setItem("card", state.input.id);
        dispatch({ type: "RESET", payload: ["", "", "", ""] });
        history.push("/pin");
      }
    }
  }, [state.entered]);

  return (
    <div className="start-page">
      <div className="title">Please Enter your card</div>
      <div className="form-select">
        <Select
          options={[
            { label: "4321 4321 4321 4321", id: "4321432143214321" },
            { label: "0000 0000 0000 0000", id: "0000000000000000" },
            { label: "1234 1234 1234 1234", id: "1234123412341234" },
          ]}
          clearable={false}
          value={!state.input ? [{}] : [state.input]}
          searchable={false}
          placeholder="Select card"
          onChange={(params) => dispatch({ type: "SET_CARD", payload: params.value })}
        />
        <div className="error">{state.errors}</div>
      </div>
    </div>
  );
}
