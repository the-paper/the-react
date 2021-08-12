import React from 'react';
import { useAppSelector, useAppDispatch } from  '../../app/hooks';
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
  const paperWidth = useAppSelector(selectPaper).width;
  const paperHeight = useAppSelector(selectPaper).height;
  const blockWidth = useAppSelector(selectBlock).width;
  const blockHeight = useAppSelector(selectBlock).height;
  const dispatch = useAppDispatch();

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
                onChange={(e) => dispatch(changePaperWidth(parseInt(e.target.value)))}
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
                onChange={(e) => dispatch(changePaperHeight(parseInt(e.target.value)))}
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
                onChange={(e) => dispatch(changeBlockWidth(parseInt(e.target.value)))}
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
                onChange={(e) => dispatch(changeBlockHeight(parseInt(e.target.value)))}
              />
              <label htmlFor="blockHeight">Height (mm)</label>
            </div>
          </div>
        </div>
      </form>
  );
}
