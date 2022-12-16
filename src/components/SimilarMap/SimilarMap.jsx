import React, { useContext, useRef } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Context } from 'components/LayoutContext';

const center = ["55.03375244140625", "82.92283630371094"];

export const SimilarMap = () => {
  const { similar } = useContext(Context);
  const mapRef = useRef(null);
  const init = () => {
    mapRef.current.events.add('boundschange', (event) => {
      if (event.get('newBounds') === event.get('oldBounds')) {
          console.log(event.get('newBounds'));
      }
  });
  }
  return (
    <div style={{ flexGrow: 1 }}>
      <YMaps
        query={{
          apikey: '4ed55148-64dc-447c-a240-f3f034053bbf',
          // load: 'package.full' 
        }}
      >
        <Map
          defaultState={{ center: center, zoom: 14 }}
          width='100%'
          height={400}
          onLoad={ymaps => {
            ymaps.ready(() => {
              init()
            });
          }}
          instanceRef={yaMap => {
            if (yaMap) {
              mapRef.current = yaMap;
            }
          }}
        >
          {
            similar?.length > 0 &&
            similar.map((mark) => {
              return <Placemark geometry={[mark.lat, mark.lng]} key={mark.reqNumber} />
            })
          }
        </Map>
      </YMaps>
    </div>
  )
}