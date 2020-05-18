import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "baseui/button";
import ReturnButton from "../Styles/ReturnButton";

import { store } from "../../store";

import "./End.scss";

const End = () => {
  const { dispatch } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "RESET", payload: {} });
    localStorage.removeItem("card");
    localStorage.removeItem("token");
  }, [dispatch]);
  return (
    <div className="cancel-page page">
      <div className="cancel">Operation canceled!</div>
      <Button onClick={() => history.push("/")} overrides={ReturnButton}>
        Return to menu
      </Button>
    </div>
  );
};

export default End;
