import React from "react";
import { Link } from "react-router-dom";

import "./Completed.scss";

const Completed = () => {
  return (
    <div className="completed-page">
      <div className="completed">Operation successfully completed!</div>
      <Link className="link" to="/menu">
        Return to menu?
      </Link>
    </div>
  );
};

export default Completed;
