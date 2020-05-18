import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import { store } from "../../store";
import Start from "../Start/Start";
import Pin from "../Pin/Pin";
import Menu from "../Menu/Menu";
import WithDraw from "../Actions/Withdraw";
import Balance from "../Actions/Balance";
import History from "../Actions/History";
import Transfer from "../Actions/Transfer";
import End from "../End/End";
import Completed from "../Completed/Completed";
import ThreeDots from "../Styles/ThreeDots";

import "./Display.scss";

export default function Display() {
  const { state } = useContext(store);
  return (
    <section className="display">
      {state.loading ? (
        <div className="dots">
          <ThreeDots color={"#ffffff"} height={64} width={64} />
        </div>
      ) : (
        <Switch>
          <Route exact path="/pin" component={Pin} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/withdraw" component={WithDraw} />
          <Route exact path="/menu/balance" component={Balance} />
          <Route exact path="/menu/history" component={History} />
          <Route exact path="/menu/transfer" component={Transfer} />
          <Route exact path="/cancel" component={End} />
          <Route exact path="/completed" component={Completed} />
          <Route path="/" component={Start} />
        </Switch>
      )}
    </section>
  );
}
