import React from "react";

import './Ads.scss';

export const Ads = ({ ads }) => {
  return (
    <div className="ads">
      <p className="text" style={{margin: 0}}>Ваш объект размещен на:</p>
      { ads?.length > 0 && 
        ads.map((ad, idx) =>
          <a
            target='_blank'
            className="text text__link"
            href={ad.URL}
            key={idx}
          >
            {ad.name}
          </a>
        )
      }
    </div>
  )
}