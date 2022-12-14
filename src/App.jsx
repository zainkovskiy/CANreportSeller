import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Linear } from 'components/Linear';
import { Header } from 'components/Header';
import { Realtor } from 'components/Realtor';
import { Title } from 'components/Title';
import { About } from 'components/About';
import { Statistic } from 'components/Statistic';
import { Photos } from 'components/Photos';
import { Ads } from 'components/Ads';
import { SimilarObject } from 'components/SimilarObject';
import { Footer } from 'components/Footer';

import './App.scss';

export const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [similar, setSimilar] = useState([
    {
      "reqNumber": "58549000005",
      "reqRoomCount": "1",
      "lat": "55.028217",
      "lng": "82.923451",
      "reqTypeofRealty": "Квартира",
      "isNew": 0,
      "reqType": "1c",
      "source": "1c",
      "reqCity": "Новосибирск",
      "reqRayon": "Октябрьский",
      "reqStreet": "Ключ-Камышенское плато",
      "reqHouseNumber": "26/2",
      "nearMetro": "Площадь Ленина",
      "metroDistance": 4,
      "reqFlatTotalArea": "50.70",
      "reqFlatLivingArea": "14.00",
      "reqKitchenArea": "36.00",
      "reqCommunity": null,
      "reqLandArea": null,
      "reqFloor": "15",
      "reqFloors": "18",
      "reqDocType": "Нет",
      "reqReserved": "2021-12-23 00:00:00.000000",
      "reqUpdateTime": 1670942243,
      "reqPrice": "3650",
      "reqStartPrice": "3650",
      "reqPhoto": "https://centromir-sc.ru/imagebase/58549000005/Resize/58549000005_8ee7997d-5362-4ff4-96fc-e7cac43b3689_r.jpg",
      "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
    },
    {
      "reqNumber": "58368000022",
      "reqRoomCount": "2",
      "lat": "55.028712",
      "lng": "82.919541",
      "reqTypeofRealty": "Квартира",
      "isNew": 0,
      "reqType": "1c",
      "source": "1c",
      "reqCity": "Новосибирск",
      "reqRayon": "Центральный",
      "reqStreet": "Красный проспект",
      "reqHouseNumber": "25",
      "nearMetro": "Площадь Ленина",
      "metroDistance": 3,
      "reqStartPrice": "3650",
      "reqFlatTotalArea": "68.00",
      "reqFlatLivingArea": "45.00",
      "reqKitchenArea": "6.00",
      "reqCommunity": null,
      "reqLandArea": null,
      "reqFloor": "6",
      "reqFloors": "17",
      "reqDocType": "Нет",
      "reqReserved": "2018-11-20 00:00:00.000000",
      "reqUpdateTime": 1670942243,
      "reqPrice": "5500",
      "reqPhoto": "https://centromir-sc.ru/imagebase/58368000022/Resize/58368000022_d92234ac-e737-4afc-8ebc-2ed151c7a8c8_r.jpg",
      "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
    },
    {
      "reqNumber": "21133372",
      "reqRoomCount": null,
      "lat": "55.030205",
      "lng": "82.920433",
      "reqTypeofRealty": "Квартира",
      "isNew": 0,
      "reqType": "1c",
      "source": "1c",
      "reqCity": "Новосибирск",
      "reqRayon": "Кольцово",
      "reqStreet": null,
      "reqHouseNumber": null,
      "nearMetro": "Площадь Ленина",
      "metroDistance": "0.0",
      "reqFlatTotalArea": null,
      "reqFlatLivingArea": null,
      "reqKitchenArea": null,
      "reqCommunity": null,
      "reqLandArea": null,
      "reqFloor": null,
      "reqFloors": null,
      "reqDocType": "Нет",
      "reqReserved": "2011-04-29 00:00:00.000000",
      "reqUpdateTime": 1670942243,
      "reqPrice": "0",
      "reqPhoto": null,
      "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
    },
    {
      "reqNumber": "57327000020",
      "reqRoomCount": "3",
      "lat": "55.033752",
      "lng": "82.922836",
      "reqStartPrice": "3650",
      "reqTypeofRealty": "Квартира",
      "isNew": 0,
      "reqType": "1c",
      "source": "1c",
      "reqCity": "Новосибирск",
      "reqRayon": "Центральный",
      "reqStreet": "Мичурина",
      "reqHouseNumber": "7",
      "nearMetro": "Площадь Ленина",
      "metroDistance": 5,
      "reqFlatTotalArea": "63.20",
      "reqFlatLivingArea": "52.30",
      "reqKitchenArea": "6.90",
      "reqCommunity": "Тихий центр",
      "reqLandArea": null,
      "reqFloor": "1",
      "reqFloors": "4",
      "reqDocType": "Эксклюзив",
      "reqReserved": "2021-12-03 00:00:00.000000",
      "reqUpdateTime": "2022-04-21 17:57:26.199418",
      "reqPrice": "7750",
      "reqPhoto": "https://centromir-sc.ru/imagebase/57327000020/Resize/57327000020_afa9b7cd-f370-4717-8715-bf87bdbd20e2_r.jpg",
      "reqLogo": "https://crm.centralnoe.ru/dealincom/assets/img/centr-small.png"
    }
  ])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const res = await axios.post("https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/SellerStats/Controller.php", {
        reqNumber: "58734000007",
        // reqNumber: reqNumber,
        actios: 'get',
      })
      console.log(res.data);
      if (res?.data) {
        setData(res.data)
      };
    } catch (err) {
      console.log(err);
      // setError(true);
    } finally {
      setLoding(false);
    }
  }

  return (
    <>
      {
        loading ?
          <Linear /> :
          <>
            {
              error ?
                <img src="https://crm.centralnoe.ru/dealincom/assets/img/error.jpg" alt="error" /> :
                <>
                  <div className="top">
                    <Header />
                    <About
                      type={data?.type}
                      address={data?.address}
                      price={data?.price}
                      totalArea={data?.features?.totalArea}
                      statistic={data?.report}
                    />
                  </div>
                  <div className="main container">
                    {/* <Title
                        type={data?.type}
                        address={data?.address}
                        price={data?.price}
                      /> */}
                    <Realtor
                      name={data?.name}
                      rieltorNumber={data?.rieltorNumber}
                    />
                    <div style={{display: 'flex'}}>
                      <Photos
                        photos={data?.photo || []}
                      />
                      <div style={{width: '100%', flexGrow: 1}}>сюда можно поместить либо еще инфу о объекте или перенести рекламу</div>
                    </div>
                    <Ads
                      ads={data?.promotion || []}
                    />
                    <SimilarObject
                      similar={similar}
                      center={["55.03375244140625", "82.92283630371094"]}
                    />
                  </div>
                  {/* <Footer
                    name={data?.name}
                    rieltorNumber={data?.rieltorNumber}
                  /> */}
                </>
            }
          </>
      }
    </>
  )
}
