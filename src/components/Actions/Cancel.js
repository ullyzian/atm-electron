import React, { useEffect, useContext } from 'react';
import { store } from '../../store';
import { Link } from 'react-router-dom';

const Cancel = () => {
  const { dispatch } = useContext(store);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: {} });
    localStorage.removeItem('card');
    localStorage.removeItem('token');
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

export default Cancel;
