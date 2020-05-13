import React from 'react';
import { Input } from 'baseui/input';
import WidthStyle from '../Cusomization/WidthStyle';
import './Actions.scss';

export default function Transfer() {
  const [number, setNumber] = React.useState('');
  const [amount, setAmount] = React.useState('');
  return (
    <div className="transfer-page">
      <div className="title">Enter account number</div>
      <Input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Account number"
        type="number"
        overrides={WidthStyle}
      />
      <div className="gap" />
      <div className="title">Enter amount</div>
      <Input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        type="number"
        overrides={WidthStyle}
      />
    </div>
  );
}
