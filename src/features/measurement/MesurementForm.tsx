import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MesurementInput } from './MesurementInput';
import {
  resizePaperWidth,
  resizePaperHeight,
  selectPaper,
} from './mesurementSlice';

export function MesurementForm() {
  const dispatch = useAppDispatch();
  const paper = useSelector(selectPaper);

  return (
    <div>
      form
      <div className="row g-3">
        <div className="col">
          <MesurementInput
            label="Paper's Width"
            value={paper.width}
            handleValue={value => dispatch(resizePaperWidth(value))}
            />
        </div>
        <div className="col">
          <MesurementInput
            label="Paper's Height"
            value={paper.height}
            handleValue={value => dispatch(resizePaperHeight(value))}
          />
        </div>
      </div>
    </div>
  );
}
