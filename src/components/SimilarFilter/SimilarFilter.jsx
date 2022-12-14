import React, { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const SimilarFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortText, setSortText] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (event.target.textContent.length > 0) {
      setSortText(event.target.textContent)
    }
  };
  return (
    <div className="similar__filter">
      <span className="text" style={{ color: '#737373', fontSize: 12 }}>
        Средняя цена <b>4 500 тыс. &#8381;</b> &#183; <b>35 000тыс. &#8381;/м<sup>2</sup></b>
      </span>
      <div>
        <div
          style={{ width: 235, display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
          onClick={handleClick}
        >
          <span
            className="text"
            style={{ color: '#737373', fontSize: 12 }}
          >
            Сортировать: {sortText || 'По умолчанию'}
          </span>
          {
            anchorEl ?
              <ExpandLessIcon fontSize="12" /> :
              <ExpandMoreIcon fontSize="12" />
          }
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>По дате публикации</MenuItem>
          <MenuItem onClick={handleClose}>По цене</MenuItem>
        </Menu>
      </div>
    </div>
  )
}