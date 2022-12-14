import React from "react";
import './About.scss';
import { Statistic } from 'components/Statistic';

export const About = (props) => {
  const { type, address, price, totalArea, statistic } = props;

  const formatNumer = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <div className="container about">
      <div className="about__wrap about__wrap-left">
        <span className="text about__text-size about__text-white">Ваш объект:</span>
        <span className="text about__text-size about__text-white" style={{ fontSize: 14, fontWeight: 600 }}>
          {type}, {totalArea} м<sup>2</sup>
        </span>
        <span className="text about__text-size about__text-white">{address}</span>
        <Statistic
          statistic={statistic}
          price={price}
        />
      </div>
      <div className="about__wrap about__wrap-right">
        <div className="about__price">
          <span className="text about__text-size about__text-center">Рекомендованная цена выхода на рынок</span>
          <span className="text about__text-price">{formatNumer(price?.current * 1000)} &#8381;</span>
          <span className="text about__text-center">{formatNumer(((price?.current * 1000) / totalArea).toFixed(0))} &#8381;/м<sup>2</sup></span>
        </div>
      </div>
    </div>
  )
}