import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

import './Footer.scss';

export const Footer = ({ rieltorNumber, name }) => {
  return (
    <div className="footer">
      <div className="container">
        <span className="text footer__text">
          &copy; 2022 Центральное Агенство Недвижимости
        </span>
      </div>
    </div>
  )
}