import React, { useEffect, useState } from "react";
import fetchJSON from "../../utils/fetchJSON";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../utils/constants";

import "./Actions.scss";

export default function Balance() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    fetchJSON(`${API_BASE_URL}/api/cards/${localStorage.getItem("card")}/balance/`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setBalance(response.balance);
    });
  });
  return (
    <div className="balance-page">
      <div className="title">Your balance</div>
      <div className="balance">{balance} zł</div>
      <div className='gap' />
      <Link className="link" to="/menu">
        Return to menu?
      </Link>
    </div>
  );
}
