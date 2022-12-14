import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

import './Footer.scss';

export const Footer = ({ rieltorNumber, name }) => {
  return (
    <div className="footer">
      <span className="text footer__text" style={{ fontWeight: 700 }}>Ваш риэлтор:</span>
      <span className="text footer__text">
        <PersonIcon
          fontSize="14px"
        />
        {name}
      </span>
      <a className="text footer__text footer__link" href={`tel:${rieltorNumber}`}>
        <LocalPhoneIcon
          fontSize="14px"
        />
        {rieltorNumber}
      </a>
    </div>
  )
}