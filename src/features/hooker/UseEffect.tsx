import React, { useState, useEffect, useRef } from 'react';

export function UseEffect() {

  const inputEl = useRef<HTMLInputElement>(null);
  const [nick, setNick] = useState('MM');

  useEffect(() => {
    document.title = `React: ${nick}`;
    if (inputEl.current) {
      console.log(inputEl.current.offsetWidth)
    }
  });
  return (
    <div>
      <input type="text" value={nick} onChange={(e) => setNick(e.target.value)}/>
      <p>nick: {nick} </p>
      <input type="text" ref={inputEl}></input>
    </div>
  );
}
