import React from 'react';
import { PaperForm } from './PaperForm';
import { PaperSelect } from './PaperSelect';
// import { MeasureExample } from './MeasureExample';
// import { PaperTable } from './PaperTable';

export function Paper() {
  return (
    <div className="container">
      <div className="my-5">
        <PaperForm />
        <PaperSelect />
        {/*<PaperTable /> */}
        {/* <MeasureExample /> */}
      </div>
    </div>
  );
}
