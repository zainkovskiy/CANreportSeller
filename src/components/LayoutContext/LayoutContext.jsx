import React, { createContext, useState, useEffect, useRef } from "react";
import moment from "moment/moment";
import { Linear } from 'components/Linear';
import { getDataObject, getSimilar } from '../../Api';

export const Context = createContext();

export const LayoutContext = ({ children }) => {
  const [state, setState] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (state || mounted.current) {
      return
    }
    getDataObject({
      reqNumber: "58734000007",
      // reqNumber: reqNumber,
      actios: 'get',
    }).then((res) => {
      if (res.status === 200 && res?.data) {
        console.log(res.data);
        setState(res.data);
        getSimilar().then((res) => {
          if (res.status === 200 && res?.data) {
            setSimilar(res.data)
          }
        })
      }
    }).catch((err) => {
      setError(true);
      console.log(err);
    }).finally(() => {
      mounted.current = true;
      setLoding(false);
    })
    return () => mounted.current = true;
  }, [])

  const getChildElement = () => {
    if (loading) {
      return <Linear />
    }
    if (error) {
      return <img src="https://crm.centralnoe.ru/dealincom/assets/img/error.jpg" alt="error" />
    }
    return children
  }

  const sortSimilar = (value) => {
    if (value === 'reqPrice') {
      let arr = similar.slice();
      arr.sort((a, b) => {
        if (+a[value] < +b[value]) {
          return -1;
        }
        if (+a[value] > +b[value]) {
          return 1;
        }
        return 0;
      });
      setSimilar(arr);
      return
    }
    if (value === 'reqReserved') {
      let arr = similar.slice();
      arr.sort((a, b) => {
        if (moment(a[value]).isBefore(b[value])) {
          return -1;
        }
        if (moment(a[value]).isAfter(b[value])) {
          return 1;
        }
        return 0;
      });
      setSimilar(arr);
      console.log(arr);
      return
    }
  }

  const value = {
    state: state,
    similar: similar,
    sortSimilar: sortSimilar,
  }

  return (
    <Context.Provider value={value}>
      {getChildElement()}
    </Context.Provider>
  )
}