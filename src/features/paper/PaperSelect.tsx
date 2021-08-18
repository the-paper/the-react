import React, { ChangeEvent, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from  '../../app/hooks';
import {
  selectPapers,
  fetchPapersAsync,
} from './paperSlice';

export function PaperSelect() {
  const dispatch = useAppDispatch();
  const papers = useAppSelector(selectPapers);

  const [selected, setSeleted] = useState('');

  useEffect(() => {
    dispatch(fetchPapersAsync());
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSeleted(event.target.value);
    console.log(event.target.value);
  };

  const options = papers.map(p => (
    <option key={p.key} value={p.key}>{p.name}</option>
  ));

  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="floatingSelect"
        value={selected}
        onChange={handleChange}
      >
        <option value="" disabled>선택하세요</option>
        {options}
      </select>
      <label htmlFor="floatingSelect">Paper Sample</label>
    </div>
  );
}
