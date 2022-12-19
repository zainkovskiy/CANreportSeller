import React, { useContext } from "react";
import { Context } from 'components/LayoutContext';

import './Ads.scss';

export const Ads = () => {
  const { state } = useContext(Context);
  return (
    <div className="container">
      <div className="ads">
        <p className="text" style={{ margin: 0, color: '#fff' }}>Ваш объект размещен на:</p>
        {state?.promotion?.length > 0 &&
          state.promotion.map((ad, idx) =>
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
    </div>
  )
}