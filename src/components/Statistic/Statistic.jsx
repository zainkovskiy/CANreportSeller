import React, { useState, useEffect } from "react";
import moment from 'moment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IconButton } from "@mui/material";
import { yellow } from '@mui/material/colors';

import './Statistic.scss';

export const Statistic = ({ statistic, price }) => {
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handlerClick)
    return () => {
      document.removeEventListener('click', handlerClick)
    }
  }, [])

  const handlerClick = () => {
    if (event.target.dataset.price !== 'show') {
      setShowHistory(false);
    }
  }

  const isShowHistory = () => {
    if (price?.history?.length > 0) {
      setShowHistory(!showHistory);
    }
    return
  }

  const getArrow = (fontSize, direction, func) => {
    switch (direction) {
      case 'up':
        return <ArrowUpwardIcon fontSize={fontSize} color="error" data-price='show' />
      case 'dowm':
        return <ArrowDownwardIcon fontSize={fontSize} color='success' data-price='show' />
      default:
        break
    }
  }
  return (
    <div className="statistic">
      <div className="statistic__wrap">
        <div>
          <span className="statistic__title statistic__text_hover text">Просмотры</span>
          <span className="statistic__count text statistic__text statistic__text_hover">{statistic?.shows?.all || 0}</span>
        </div>
        <span className="statistic__last text statistic__text statistic__text_hover">Вчера: <span>{statistic?.shows?.toDay || 0}</span></span>
      </div>
      {
        statistic?.calls?.all > 0 &&
        <div className="statistic__wrap">
          <div>
            <span className="statistic__title text statistic__text_hover">Подборки</span>
            <span className="statistic__count text statistic__text statistic__text_hover">{statistic?.calls?.all}</span>
          </div>
          <span className="statistic__last text statistic__text statistic__text_hover">Вчера: <span>{statistic?.calls?.toDay}</span></span>
        </div>
      }
      <div className="statistic__wrap">
        <div>
          <span className="statistic__title text statistic__text_hover">Поиски</span>
          <span className="statistic__count text statistic__text statistic__text_hover">{statistic?.searches?.all || 0}</span>
        </div>
        <span className="statistic__last text statistic__text statistic__text_hover">Вчера: <span>{statistic?.searches?.toDay || 0}</span></span>
      </div>
      <div className="statistic__wrap statistic__price">
        <span className="statistic__title text statistic__text_hover"
          style={{ position: 'relative' }}
        >
          Цена
          <IconButton size="small"
            sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)' }}
            onClick={isShowHistory}
            data-price='show'
          >
            <AccessTimeIcon
              data-price='show'
              fontSize="inherit"
              sx={{ color: yellow[50] }}
            />
          </IconButton>
        </span>
        <span
          // onClick={isShowHistory}
          // data-price='show'
          style={{ gap: 0 }}
          className="statistic__count text statistic__text statistic__text_hover">
          {getArrow('36px', price?.direction)}{price?.current || 0}&#8381;
        </span>

        {
          price?.history?.length > 0 &&
          <div data-price='show' className={`statistic__history ${showHistory ? 'visible' : ''}`}>
            <span data-price='show' className="text statistic__history-title">История цены</span>
            <div
              data-price='show'
              className="statistic__history_grid"
            >
              {
                price?.history.map((history, idx) =>
                  <React.Fragment key={idx}>
                    <span data-price='show' className="text statistic__text">{moment(history?.date).locale('ru').format('DD MMMM YYYY')}</span>
                    <span data-price='show' className="text statistic__text">{history?.price}</span>
                    <span
                      data-price='show'
                      style={{ gap: 0, display: 'inline-block', textAlign: 'right' }}
                      className="text statistic__text">{getArrow('14px', history?.direction)}{history.diference || 0}&#8381;
                    </span>
                  </React.Fragment>
                )
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}