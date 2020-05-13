import React from 'react';
import { Select } from 'baseui/select';
import ThreeDots from '../Cusomization/ThreeDots';
import './Enter.scss';

export default function Enter() {
  const [value, setValue] = React.useState([]);
  return (
    <div className="start-page">
      <div className="title">Please Enter your card</div>
      <div className="form-select">
        <Select
          options={[
            { label: '4321 4321 4321 4321', id: '4321' },
            { label: '0000 0000 0000 0000', id: '0000' },
            { label: '1234 1234 1234 1234', id: '1234' },
          ]}
          value={value}
          searchable={false}
          startOpen
          placeholder="Select color"
          onChange={(params) => setValue(params.value)}
        />
      </div>
      <ThreeDots color={'#ffffff'} height={64} width={64} />
    </div>
  );
}
