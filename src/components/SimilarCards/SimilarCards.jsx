import React from "react";
import { SimilarCard } from 'components/SimilarCard';

export const SimilarCards = ({ similar }) => {
  return (
    <div className="similar-cards">
      {
        similar?.length > 0 &&
        similar.map((card) => {
          return <SimilarCard card={card} key={card.reqNumber}/>
        })
      }
    </div>
  )
}