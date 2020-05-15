import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { store } from '../../store';

import Enter from '../Enter/Enter';
import Pin from '../Pin/Pin';
import Menu from '../Menu/Menu';
import WithDraw from '../Actions/Withdraw';
import Balance from '../Actions/Balance';
import History from '../Actions/History';
import Transfer from '../Actions/Transfer';
import Cancel from '../Actions/Cancel';
import ThreeDots from '../Styles/ThreeDots';

import './Display.scss';

export default function Display() {
  const { state } = useContext(store);
  return (
    <section className="display">
      {state.loading ? (
        <ThreeDots color={'#ffffff'} height={64} width={64} />
      ) : (
        <Switch>
          <Route exact path="/" component={Enter} />
          <Route exact path="/pin" component={Pin} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/withdraw" component={WithDraw} />
          <Route exact path="/menu/balance" component={Balance} />
          <Route exact path="/menu/history" component={History} />
          <Route exact path="/menu/transfer" component={Transfer} />
          <Route exact path="/cancel" component={Cancel} />
        </Switch>
      )}
    </section>
  );
}
