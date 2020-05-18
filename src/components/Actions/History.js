import React, { useState, useEffect } from "react";
import fetchJSON from "../../utils/fetchJSON";
import { useHistory } from "react-router-dom";
import API_BASE_URL from "../../utils/constants";
import { Button } from "baseui/button";
import ReturnButton from "../Styles/ReturnButton";

export default function History() {
  const [history, setHistory] = useState([]);
  const hist = useHistory();
  console.log(history);

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
          <div key={transaction.id} className="history__record">
            [{transaction.kind}: <span className="history-amount">{transaction.amount} zł</span>{" "}
            {transaction.receiver === null ? (
              <span>
                from card <span className="credentials-info">{localStorage.getItem("card")}</span>
              </span>
            ) : (
              <span>
                to account <span className="credentials-info">{transaction.receiver.account}</span>
              </span>
            )}
            ]
          </div>
        );
      })
    );
  return (
    <div className="history-page page">
      <div className="title">Your history</div>
      <div className="history">{transactions}</div>
      <div className="gap" />
      <Button onClick={() => hist.push("/menu")} overrides={ReturnButton}>
        Return to menu
      </Button>
    </div>
  );
}
