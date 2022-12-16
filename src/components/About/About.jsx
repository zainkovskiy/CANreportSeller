import React, { useContext } from "react";
import './About.scss';
import { Statistic } from 'components/Statistic';
import { Context } from "components/LayoutContext";

export const About = () => {
  const { state } = useContext(Context);

  const formatNumer = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <div className="container about">
      <div className="about__wrap about__wrap-left">
        <div className="about__wrap-left_top">
          <span className="text about__text-white">Ваш объект :</span>
          <span className="text about__text-white" style={{ fontWeight: 600 }}>
            {state?.features?.reqRoomCount ? state.features.reqRoomCount + 'к ' : ''}
            {state?.type ? state.type + ' ' : ''}
            {state?.features?.totalArea ? <>{state.features.totalArea}м<sup>2</sup></> : ''}
          </span>
          {
            state?.address &&
            <span className="text about__text-white">{state.address}</span>
          }
        </div>
        <Statistic/>
      </div>
      <div className="about__wrap about__wrap-right">
        <div className="about__price">
          <span className="text about__text-size about__text-center">Рекомендованная цена выхода на рынок</span>
          {
            state?.price?.current &&
            <>
              <span className="text about__text-price">{formatNumer(state.price.current * 1000)} &#8381;</span>
              {
                state?.features?.totalArea &&
                <span className="text about__text-center">{formatNumer(((state.price.current * 1000) / state.features.totalArea).toFixed(0))} &#8381;/м<sup>2</sup></span>
              }
            </>
          }
        </div>
      </div>
    </div>
  )
}