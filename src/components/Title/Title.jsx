import React from 'react';

import './Title.scss';

export const Title = ({ type, address }) => {
  return (
    <div className='title'>
      <span className='text title__text'>{type} {address}</span>
    </div>
  )
}