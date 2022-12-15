import React from "react";
import './SimilarObject.scss';
import { SimilarMap } from 'components/SimilarMap';
import { SimilarCards } from 'components/SimilarCards';
import { SimilarFilter } from 'components/SimilarFilter';

export const SimilarObject = ({ center, similar }) => {
  return (
    <>
      <div>
        <span className="subtitle">Похожие объекты</span>
        <div className="similar">
          <SimilarFilter />
          <div className="similar__map">
            <SimilarMap
              similar={similar}
              center={center}
            />
            <SimilarCards
              similar={similar}
            />
          </div>
        </div>
      </div>
    </>
  )
}