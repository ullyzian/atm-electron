import React from 'react';
import { PinCode } from 'baseui/pin-code';

import './Pin.scss';

export default function Pin() {
  const [values, setValues] = React.useState(['', '', '', '']);

  return (
    <div className="pin-page">
      <div className="title">Enter pin</div>
      <PinCode
        values={values}
        onChange={({ values }) => {
          setValues(values);
        }}
        overrides={{
          Root: {
            style: ({ $theme }) => {
              return {
                justifyContent: 'center',
                margin: '10px',
              };
            },
          },
        }}
      />
    </div>
  );
}
