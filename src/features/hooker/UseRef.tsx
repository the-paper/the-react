import React, { useRef } from 'react';

export function UseRef() {
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}
