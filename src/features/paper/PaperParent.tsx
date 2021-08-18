import React, { useState, useEffect } from 'react';
import { PaperChild } from './PaperChild';

// function use

export function PaperParent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('parent Effect(count): ', count);
    return function clean() {
      console.log('parent Clean(count): ', count);
    };
  }, [count]);
  
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('parent Effect(name): ', name);
    return function clean() {
      console.log('parent Clean(name): ', name);
    };
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={count} onChange={e => setCount(parseInt(e.target.value))} />
      
      <p>{ count } { name }</p>
      <PaperChild />
    </div>
  )
}
