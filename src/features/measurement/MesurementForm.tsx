import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MesurementButton } from './MesurementButton';
import { MesurementInput } from './MesurementInput';
import { MesurementSelect } from './MesurementSelect';
import {
  resizePaperWidth,
  resizePaperHeight,
  rotatePaper,
  pickPaper,
  resizeBlockWidth,
  resizeBlockHeight,
  rotateBlock,
  pickBlock,
  ladingSamplesAsync,
  selectPaper,
  selectPapers,
  selectBlock,
  selectBlocks,
} from './mesurementSlice';

export function MesurementForm() {
  const dispatch = useAppDispatch();
  const paper = useAppSelector(selectPaper);
  const block = useAppSelector(selectBlock);
  const papers = useAppSelector(selectPapers);
  const blocks = useAppSelector(selectBlocks);
  
  useEffect(() => {
    dispatch(ladingSamplesAsync('papers'));
    dispatch(ladingSamplesAsync('blocks'));
  }, [dispatch]);

  return (
    <div>
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
      <div className="row g-3">
        <div className="col">
          <MesurementSelect
            label="Samples of Paper"
            handleValue={value => dispatch(pickPaper(value))}
            options={papers}
          />
        </div>
        <div className="col d-grid mx-auto">
          <MesurementButton
            handleValue={() => dispatch(rotatePaper())}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <MesurementSelect
            label="Samples of Block"
            handleValue={value => dispatch(pickBlock(value))}
            options={blocks}
          />
        </div>
      </div>
    </div>
  );
}
