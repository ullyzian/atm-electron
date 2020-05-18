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
  }, []);

  return (
    <div className="start-page">
      <div className="title">Please Enter your card</div>
      <div className="form-select">
        <Select
          options={[
            { label: "4884 5569 5192 4673", id: "4884556951924673" },
            { label: "5427 5464 2889 4733", id: "5427546428894733" },
            { label: "6304 2635 8918 7685", id: "6304263589187685" },
            { label: "2720 9944 7959 5901", id: "2720994479595901" },
            { label: "5463 6975 3622 5529", id: "5463697536225529" },
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
