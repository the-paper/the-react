import React from 'react';

type Props = {
  label: string;
  value: number;
  handleValue: (value: number) => void;
};

export function MesurementInput(props: Props) {
  return (
    <div className="form-floating mb-3">
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        placeholder=""
        value={props.value}
        onChange={e => props.handleValue(Number(e.target.value) || 0)}
        min="0"
      />
      <label htmlFor="floatingInput">{props.label}</label>
    </div>
  );
}
