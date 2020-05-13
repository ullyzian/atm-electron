import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Enter from '../Enter/Enter';
import Pin from '../Pin/Pin';
import Menu from '../Menu/Menu';
import WithDraw from '../Actions/Withdraw';
import Balance from '../Actions/Balance';
import History from '../Actions/History';
import Transfer from '../Actions/Transfer';

import './Display.scss';

export default function Display() {
  return (
    <section className="display">
      <Switch>
        <Route exact path="/" component={Enter} />
        <Route exact path="/pin" component={Pin} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/withdraw" component={WithDraw} />
        <Route exact path="/menu/balance" component={Balance} />
        <Route exact path="/menu/history" component={History} />
        <Route exact path="/menu/transfer" component={Transfer} />
      </Switch>
    </section>
  );
}
