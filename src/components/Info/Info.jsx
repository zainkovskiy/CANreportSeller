import React from "react";
import './Info.scss';
export const Info = ({features}) => {
  return(
    <div className="info">
      <span className="text">Тип квартиры: {features.reqTypeofFlat}</span>
      <span className="text">Планировка: {features.reqTypeofLayout}</span>
      <span className="text">Материал стен: {features.material}</span>
      <span className="text">Этажность: {features.floors}</span>
    </div>
  )
}