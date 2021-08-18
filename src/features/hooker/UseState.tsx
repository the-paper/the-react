import React, { useState } from 'react';

export function UseState() {
  const [name, setName] = useState('John');

  return (
    <div className="border">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>name: {name}</p>
    </div>
  );
}
