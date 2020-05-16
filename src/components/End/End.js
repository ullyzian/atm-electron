import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { store } from "../../store";

import "./End.scss";

const End = () => {
  const { dispatch } = useContext(store);

  useEffect(() => {
    dispatch({ type: "RESET", payload: {} });
    localStorage.removeItem("card");
    localStorage.removeItem("token");
  }, [dispatch]);
  return (
    <div className="cancel-page">
      <div className="cancel">Operation canceled!</div>
      <Link className="link" to="/">
        Return to start page?
      </Link>
    </div>
  );
};

export default End;
