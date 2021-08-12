import React from 'react';
import { PaperForm } from './PaperForm';
import { PaperBlueprint } from './PaperBlueprint';

export function Paper() {
  return (
    <div className="container">
      <div className="my-5">
        <PaperForm />
        <PaperBlueprint />
      </div>
    </div>
  );
}
