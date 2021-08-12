import React, { useCallback, useState } from 'react';
import './PaperBlueprint.css';
import { useAppSelector } from  '../../app/hooks';
import {
  selectPaper,
  selectBlock,
} from './paperSlice';
import { toFixed0, toFixed2 } from '../utils/math';

export function PaperBlueprint() {
  const [outerWidth, setOuterWidth] = useState(0);
  const [outerHeight, setOuterHight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [marginX, setMarginX] = useState(0);
  const [marginY, setMarginY] = useState(0);

  const paperWidth = useAppSelector(selectPaper).width;
  const paperHeight = useAppSelector(selectPaper).height;
  const blockWidth = useAppSelector(selectBlock).width;
  const blockHeight = useAppSelector(selectBlock).height;
  const [spaceX, setSpaceX] = useState(0);
  const [spaceY, setSpaceY] = useState(0);

  const [paperRatio, setPaperRatio] = useState(`${paperWidth} / ${paperHeight}`);
  const [blockRatio, setBlockRatio] = useState(`${blockWidth} / ${blockHeight}`);

  const paperStyle = {
    'aspectRatio': `${paperRatio}`,
  };
  const blockStyle = {
    'aspectRatio': `${blockRatio}`,
    'width': `${innerWidth}px`,
  };
  const blockWidthStyle = {
    'width': `${innerWidth}px`,
  };
  const blockHeightStyle = {
    'height': `${innerHeight}px`,
  };
  const gapHeightStyle = {
    'height': `${marginY}px`,
  };


  const paperRef = useCallback(node => {
    if (node !== null) {
      const oWidth = toFixed2(node.getBoundingClientRect().width);
      const oHeight = toFixed2(node.getBoundingClientRect().height);
      const ratioWidth = toFixed2((paperWidth / oWidth));
      const ratioHeight = toFixed2((paperHeight / oHeight));
      const iWidth = toFixed2(blockWidth / ratioWidth);
      const iHeight = toFixed2(blockHeight / ratioHeight);
      setSpaceX(toFixed0((paperWidth - blockWidth) / 2));
      setSpaceY(toFixed0((paperHeight - blockHeight) / 2));
      setPaperRatio(`${paperWidth} / ${paperHeight}`);
      setBlockRatio(`${blockWidth} / ${blockHeight}`);
      setOuterWidth(oWidth);
      setOuterHight(oHeight);
      setInnerWidth(iWidth);
      setInnerHeight(iHeight);
      setMarginX(toFixed0((oWidth - iWidth) / 2));
      setMarginY(toFixed0((oHeight - iHeight) / 2));
    }
  }, [paperWidth, paperHeight, blockWidth, blockHeight]);

  return (
    <div>
      <div>
        <p>Outer width: { outerWidth }, height: { outerHeight }, ratio: { paperRatio }</p>
        <p>Inner width: { innerWidth }, height: { innerHeight }, ratio: { blockRatio }</p>
        <p>Gap width: { marginX }, height: { marginY }</p>
      </div>

      <div className="p-3">
        <div
          className="border bg-warning bg-opacity-10"
          style={paperStyle}
          ref={paperRef}
        >
          <div className="row g-0">
            <div className="col" style={gapHeightStyle}>
              <div className="position-relative w-100 h-100">
                <div className="position-absolute top-0 start-0 translate-out">
                  0
                </div>
                <div className="position-absolute top-0 start-100 translate-middle-x-out">
                  {spaceX}
                </div>
                <div className="position-absolute top-100 start-0 translate-middle-y-out">
                  {spaceY}
                </div>
              </div>
            </div>
            <div className="col-auto border-start border-end" style={blockWidthStyle}>
              <div className="position-relative">
                <div className="position-absolute top-0 start-100 translate-middle-x-out">
                  {spaceX + blockWidth}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <div className="position-absolute top-0 start-100 translate-middle-x-out">
                  {paperWidth}
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col border-top border-bottom" style={blockHeightStyle}>
              <div className="position-relative w-100 h-100">
                <div className="position-absolute top-100 start-0 translate-middle-y-out">
                  {spaceY + blockHeight}
                </div>
              </div>
            </div>
            <div className="col-auto bg-secondary bg-opacity-50" style={blockStyle}>
              <div className="position-relative w-100 h-100">
                <div className="position-absolute top-0 start-0 translate-middle-x">
                  0
                </div>
                <div className="position-absolute top-0 start-100 translate-middle-x">
                  {blockWidth}
                </div>
                <div className="position-absolute top-100 start-0 translate-middle-x">
                  {blockHeight}
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row g-0">
            <div className="col" style={gapHeightStyle}>
              <div className="position-relative w-100 h-100">
                <div className="position-absolute top-100 start-0 translate-middle-y-out">
                  {paperHeight}
                </div>
              </div>
            </div>
            <div className="col-auto" style={blockWidthStyle}></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
