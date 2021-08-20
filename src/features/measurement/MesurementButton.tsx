import React from 'react';
import { ArrowCounterclockwise } from '../icons/ArrowCounterclockwise';

type Props = {
  label?: string;
  handleValue: () => void;
};

export function MesurementButton(props: Props) {
  return (
    <button
      className="btn btn-outline-primary mb-md-3"
      onClick={e => props.handleValue()}
      >
      <ArrowCounterclockwise /> {props.label}
    </button>
  );
}
