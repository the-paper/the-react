import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <div>
        <button
          className=""
          onClick={() => dispatch(decrement())}
          >-</button>
        <span>{ count }</span>
        <button
          className=""
          onClick={() => dispatch(increment())}
          >+</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className=""
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >Add Amount</button>
        <button
          className=""
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >Add Async</button>
        <button
          className=""
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >Add If Odd</button>
      </div>
    </div>
  );
}
