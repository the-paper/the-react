import React from 'react';
import { UseEffect } from './UseEffect';
import { UseState } from './UseState';
import { UseReducer } from './UseReducer';
import { UseRef } from './UseRef';

export function Hook() {
  return (
    <div className="container">
      <h6>Hook</h6>
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseRef />
    </div>
  );
}
