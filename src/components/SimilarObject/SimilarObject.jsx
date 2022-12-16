import React from "react";
import './SimilarObject.scss';
import { Title } from 'components/Title';
import { SimilarMap } from 'components/SimilarMap';
import { SimilarCards } from 'components/SimilarCards';
import { SimilarFilter } from 'components/SimilarFilter';

export const SimilarObject = () => {
  return (
    <>
      <div>
        <Title
          title='Похожие объекты'
        />
        <div className="similar container">
          <SimilarFilter />
          <div className="similar__map">
            <SimilarMap/>
            <SimilarCards/>
          </div>
        </div>
      </div>
    </>
  )
}