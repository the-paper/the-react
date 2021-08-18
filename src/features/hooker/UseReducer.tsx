import React, { useReducer } from 'react';

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <div className="border">
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
