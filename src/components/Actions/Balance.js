import React, { useEffect, useState } from "react";
import { Button } from "baseui/button";
import fetchJSON from "../../utils/fetchJSON";
import { useHistory } from "react-router-dom";
import API_BASE_URL from "../../utils/constants";

import ReturnButton from '../Styles/ReturnButton'
import "./Actions.scss";

export default function Balance() {
  const [balance, setBalance] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchJSON(`${API_BASE_URL}/api/cards/${localStorage.getItem("card")}/balance/`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => {
      setBalance(data.balance);
    });
  }, []);
  return (
    <div className="balance-page page">
      <div className="title">Your balance</div>
      <div className="balance">{balance} zł</div>
      <div className="gap" />
      <Button onClick={() => history.push("/menu")} overrides={ReturnButton}>
        Return to menu
      </Button>
    </div>
  );
}
