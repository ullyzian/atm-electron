import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="cancel-page">
      <div className="cancel">Operation canceled!</div>
      <Link className="link" to="/">Return to start page?</Link>
    </div>
  );
};

export default Cancel;
