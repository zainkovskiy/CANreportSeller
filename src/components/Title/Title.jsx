import React from "react";
import './Title.scss';

export const Title = ({ title }) => {
  return(
    <div className="title">
      <div className="container">
        <span className="title__text text">{ title }</span>
      </div>
    </div>
  )
}