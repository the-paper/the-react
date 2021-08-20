import React from 'react';
import { ArrowCounterclockwise } from '../icons/ArrowCounterclockwise';

type Props = {
  handleValue: () => void;
};

export function MesurementButton(props: Props) {
  return (
    <div>
      <button
        className="btn btn-outline-primary btn-lg"
        onClick={e => props.handleValue()}
      >
        <ArrowCounterclockwise />
      </button>
    </div>
  );
}
