import React from "react";
import Logo from '../../image/logo.svg';
import './Header.scss';

export function Header() {
  return (
    <div className='header'>
      <div className="container">
        <Logo />
      </div>
    </div>)
}
