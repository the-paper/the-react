import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MesurementInput } from './MesurementInput';
import {
  resizePaperWidth,
  resizePaperHeight,
  selectPaper,
  resizeBlockWidth,
  resizeBlockHeight,
  selectBlock,
} from './mesurementSlice';

export function MesurementForm() {
  const dispatch = useAppDispatch();
  const paper = useSelector(selectPaper);
  const block = useSelector(selectBlock);

  return (
    <div>
      <div className="row g-3">
        <div className="col-12 col-sm-6">
          <MesurementInput
            label="Paper's Width"
            value={paper.width}
            handleValue={value => dispatch(resizePaperWidth(value))}
            />
        </div>
        <div className="col-12 col-sm-6">
          <MesurementInput
            label="Paper's Height"
            value={paper.height}
            handleValue={value => dispatch(resizePaperHeight(value))}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <MesurementInput
            label="Block's Width"
            value={block.width}
            handleValue={value => dispatch(resizeBlockWidth(value))}
            />
        </div>
        <div className="col">
          <MesurementInput
            label="Block's Height"
            value={block.height}
            handleValue={value => dispatch(resizeBlockHeight(value))}
          />
        </div>
      </div>
    </div>
  );
}
