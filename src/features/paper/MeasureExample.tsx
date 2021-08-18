import React, { useState, useCallback, useEffect } from 'react';
import { useAppSelector } from  '../../app/hooks';
import {
  selectPaper,
  selectBlock,
  // selectSpaceX,
  // selectSpaceY,
} from './paperSlice';

export function MeasureExample() {

  const paper = useAppSelector(selectPaper);
  const block = useAppSelector(selectBlock);
  // const spaceX = useAppSelector(selectSpaceX);
  // const spaceY = useAppSelector(selectSpaceY);

  const [outerWidth, setOuterWidth] = useState(0);
  const [outerHeight, setOUterHeight] = useState(0);

  const outerRef = useCallback(node => {
    if (node) {
      const { width } = node.getBoundingClientRect();
      setOuterWidth(width);
      setOUterHeight(300);
    }
  }, []);

  const outerStyle = {
    'aspectRatio': `${outerWidth} / ${outerHeight}`,
  };

  useEffect(() => {
    console.log('effect paper');
    console.log(paper);
  }, [paper]);
  
  useEffect(() => {
    console.log('effect block');
    console.log(block);
  }, [block]);

  return (
    <>
      <p>{outerWidth}, {outerHeight}</p>
      <div
        ref={outerRef}
        style={outerStyle}
        className="bg-light"
      >dsf</div>
    </>
  );
}
