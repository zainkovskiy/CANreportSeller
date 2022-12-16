import React, { useContext, useEffect } from "react";
import { SimilarCard } from 'components/SimilarCard';
import { Context } from 'components/LayoutContext';

export const SimilarCards = () => {
  const { similar } = useContext(Context);
  return (
    <div className="similar-cards">
      {
        similar?.length > 0 &&
        similar.map((card) => {
          return <SimilarCard card={card} key={card.reqNumber} />
        })
      }
    </div>
  )
}