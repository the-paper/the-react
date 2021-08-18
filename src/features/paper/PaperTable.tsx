import React from 'react';
import { useAppSelector } from  '../../app/hooks';
import {
  selectPaper,
  selectBlock,
  selectSpaceX,
  selectSpaceY,
} from './paperSlice';
import styles from './PaperTable.module.css';

export function PaperTable() {
  const paper = useAppSelector(selectPaper);
  const block = useAppSelector(selectBlock);
  const spaceWidth = useAppSelector(selectSpaceX);
  const spaceHeight = useAppSelector(selectSpaceY);

  return (
    <table className="table table-bordered text-end align-bottom">

      <tbody>
        <tr className={styles.rowHeight5}>
          <td className="col-2">0</td>
          <td className="col-2">{spaceWidth}</td>
          <td className="col-6">{spaceWidth + block.width}</td>
          <td className="col-2">{paper.width}</td>
        </tr>

        <tr className={styles.rowHeight5}>
          <td>{spaceHeight}</td>
          <td className="table-light"></td>
          <td className="table-light"></td>
          <td className="table-light"></td>
        </tr>
        <tr className={styles.rowHeight10}>
        <td>{spaceHeight + block.height}</td>
          <td className="table-light"></td>
          <td className="table-warning text-center align-middle">{block.width} x {block.height}</td>
          <td className="table-light"></td>
        </tr>
        <tr className={styles.rowHeight5}>
          <td>{paper.height}</td>
          <td className="table-light"></td>
          <td className="table-light"></td>
          <td className="table-light text-center align-middle">{paper.width} x {paper.height}</td>
        </tr>
      </tbody>
    </table>
  );
}
