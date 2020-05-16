import React from "react";
import { Input } from "baseui/input";

import WidthStyle from "../Styles/WidthStyle";
import "./Actions.scss";

export default function Withdraw() {
  const [value, setValue] = React.useState("0");
  return (
    <div className="withdraw-page">
      <div className="title">Enter withdraw amount</div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Amount"
        type="number"
        overrides={WidthStyle}
      />
    </div>
  );
}
