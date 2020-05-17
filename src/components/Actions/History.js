import React, { useState, useEffect } from "react";
import fetchJSON from "../../utils/fetchJSON";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../utils/constants";

export default function History() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetchJSON(`${API_BASE_URL}/api/cards/${localStorage.getItem("card")}/history/`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setHistory(response);
    });
  }, []);
  const transactions =
    history.length === 0 ? (
      <div>There is no such transaction</div>
    ) : (
      history.map((transaction) => {
        return (
          <div className="history__record">
            {transaction.kind}: -{transaction.amount} zł{" "}
            {transaction.receiver === null ? null : (
              <span>to account {transaction.receiver.account}</span>
            )}
          </div>
        );
      })
    );
  return (
    <div className="history-page">
      <div className="title">Your history</div>
      <div className="history">{transactions}</div>
      <div className="gap" />
      <Link className="link" to="/menu">
        Return to menu?
      </Link>
    </div>
  );
}
