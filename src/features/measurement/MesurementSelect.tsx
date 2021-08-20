import React from 'react';
import { Sample } from './mesurementSlice';

type Props = {
  label: string;
  handleValue: (value: string) => void;
  options: Sample[];
};

export function MesurementSelect(props: Props) {

  const options = props.options.map(({ key, name}) => (
    <option key={key} value={key}>{name}</option>
  ))

  return (
    <div className="form-floating mb-3">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={e => props.handleValue(e.target.value)}
      >
        <option disabled>Open this select menu</option>
        {options}
      </select>
      <label htmlFor="floatingSelect">{props.label}</label>
    </div>
  )
}
