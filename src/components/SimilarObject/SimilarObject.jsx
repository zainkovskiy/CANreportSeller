import React from "react";
import './SimilarObject.scss';
import { SimilarMap } from 'components/SimilarMap';
import { SimilarCards } from 'components/SimilarCards';

export const SimilarObject = ({ center, similar }) => {
  return (
    <>
      <span className="subtitle">Похожие объекты</span>
      <div className="similar">
        <SimilarMap
          similar={similar}
          center={center}
        />
        <SimilarCards
          similar={similar}
        />
      </div>
    </>
  )
}