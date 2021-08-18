import React, { ChangeEvent, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from  '../../app/hooks';
import useDebounce from './useDebounce'
import {
  changePaperWidth,
  changePaperHeight,
  changeBlockWidth,
  changeBlockHeight,
  selectPaper,
  selectBlock,
} from './paperSlice';
import styles from './PaperForm.module.css';

export function PaperForm() {
  const dispatch = useAppDispatch();
  const paper = useAppSelector(selectPaper);
  const block = useAppSelector(selectBlock);

  const [paperWidth, setPaperWidth] = useState(paper.width);
  const [paperHeight, setPaperHeight] = useState(paper.height);
  const [blockWidth, setBlockWidth] = useState(block.width);
  const [blockHeight, setBlockHeight] = useState(block.height);
  const debouncePaperWidth = useDebounce(paperWidth, 1000);
  const debouncePaperHeight = useDebounce(paperHeight, 1000);
  const debounceBlockWidth = useDebounce(blockWidth, 1000);
  const debounceBlockHeight = useDebounce(blockHeight, 1000);

  const handlePaperWidth = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setPaperWidth(newValue);
  };
  useEffect(() => {
    dispatch(changePaperWidth(debouncePaperWidth));
  }, [dispatch, debouncePaperWidth]);

  const handlePaperHeight = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setPaperHeight(newValue);
  };
  useEffect(() => {
    dispatch(changePaperHeight(debouncePaperHeight));
  }, [dispatch, debouncePaperHeight]);

  const handleBlockWidth = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setBlockWidth(newValue);
  };
  useEffect(() => {
    dispatch(changeBlockWidth(debounceBlockWidth));
  }, [dispatch, debounceBlockWidth]);

  const handleBlockHeight = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setBlockHeight(newValue);
  };
  useEffect(() => {
    dispatch(changeBlockHeight(debounceBlockHeight));
  }, [dispatch, debounceBlockHeight]);

  useEffect(() => {
    setPaperWidth(paper.width);
    setPaperHeight(paper.height);
  }, [paper]);

  return (
      <form>
        <div className="row g-3">
          <div className="col-sm-1">
            <p className={styles.rowLabel}>Paper</p>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="paperWidth"
                placeholder="Width"
                min="0"
                value={paperWidth}
                onChange={handlePaperWidth}
              />
              <label htmlFor="paperWidth">Width (mm)</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="paperHeight"
                placeholder="Height"
                min="0"
                value={paperHeight}
                onChange={handlePaperHeight}
              />
              <label htmlFor="paperHeight">Height (mm)</label>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-sm-1">
            <p className={styles.rowLabel}>Block</p>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="blockWidth"
                placeholder="Width"
                min="0"
                value={blockWidth}
                onChange={handleBlockWidth}
              />
              <label htmlFor="blockWidth">Width (mm)</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="blockHeight"
                placeholder="Height"
                min="0"
                value={blockHeight}
                onChange={handleBlockHeight}
              />
              <label htmlFor="blockHeight">Height (mm)</label>
            </div>
          </div>
        </div>
      </form>
  );
}
