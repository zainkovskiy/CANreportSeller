import React from "react";
import moment from "moment/moment";

export const SimilarCard = ({ card }) => {
  return (
    <div className="similar-card">
      <img className="similar-card__img" src={card?.reqPhoto} alt="object" />
      <div className="similar-card__info" >
        <div className="similar-card__info-top">
          <span className="text similar-card__title">
            {card?.reqCity ? card.reqCity + ', ' : ''}
            {card?.reqStreet ? card.reqStreet + ', ' : ''}
            {card?.reqHouseNumber ? card.reqHouseNumber : ''}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="text" style={{ color: '#737373', fontSize: 12 }}>
              {card?.reqTypeofRealty ? card.reqTypeofRealty + ', ' : ''}
              {card?.reqRoomCount ? card.reqRoomCount + 'к., ' : ''}
              {card?.reqFloor ? card.reqFloor : ''}
              {card?.reqFloors ? '/' + card.reqFloors : ''}
              {(card?.reqFloor || card.reqFloors) && ' эт.'}
            </span>
            <span className="text" style={{ color: '#737373', fontSize: 12 }}>
              {card?.reqFlatTotalArea ? card.reqFlatTotalArea + '/' : ''}
              {card?.reqFlatLivingArea ? card.reqFlatLivingArea + '/' : ''}
              {card?.reqKitchenArea ? card.reqKitchenArea : ''}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#737373' }} className='text'>
              {card?.reqPrice || '0'} тыс &#8381;
              {
                (card?.reqPrice && card?.reqFlatTotalArea) &&
                <span style={{ marginLeft: '0.5rem', fontSize: 12, fontWeight: 400 }}>
                  {
                    ((card?.reqPrice / card?.reqFlatTotalArea) * 1000).toFixed(0)
                  } &#8381;/м<sup>2</sup>
                </span>
              }
            </p>
            {
              card?.reqStartPrice &&
              <span className="text" style={{ color: '#737373', fontSize: 9 }}>
                Стартовая цена {card?.reqStartPrice} тыс &#8381;
              </span>
            }
          </div>
        </div>
        {
          card?.reqReserved &&
          <span className="text" style={{ color: '#737373', fontSize: 9 }}>
            В продаже с {moment(card.reqReserved).locale('ru').format('DD MMMM YYYY')}
          </span>
        }
      </div>
    </div>
  )
}