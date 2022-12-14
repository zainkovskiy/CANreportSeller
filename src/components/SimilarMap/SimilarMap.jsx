import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const SimilarMap = ({ similar, center }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <YMaps>
        <Map defaultState={{ center: center, zoom: 14 }} width='100%' height={400}>
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