import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "baseui/button";
import ReturnButton from "../Styles/ReturnButton";

import "./Completed.scss";

const Completed = () => {
  const history = useHistory();
  return (
    <div className="completed-page page">
      <div className="completed">Operation successfully completed!</div>
      <Button onClick={() => history.push("/menu")} overrides={ReturnButton}>
        Return to menu
      </Button>
    </div>
  );
};

export default Completed;
