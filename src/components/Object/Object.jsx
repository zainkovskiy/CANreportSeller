import React from "react";
import { Photos } from 'components/Photos';
import { Info } from 'components/Info';
import { Ads } from 'components/Ads';
import './Object.scss';

export const Object = (props) => {
  const { photos, ads, features } = props;
  return (
    <div className="object">
      <Photos
        photos={photos}
      />
      <div className="object__right">
        <Info
          features={features}
        />
        <Ads
          ads={ads}
        />
      </div>
    </div>
  )
}