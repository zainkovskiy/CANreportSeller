import React, { useState } from "react";

import { LogoBlock } from 'components/LogoBlock';
import { Realtor } from 'components/Realtor';
import { About } from 'components/About';
import { Object } from 'components/Object';
import { Photos } from 'components/Photos';
import { Ads } from 'components/Ads';
import { SimilarObject } from 'components/SimilarObject';
import { Footer } from 'components/Footer';
import { LayoutContext } from 'components/LayoutContext';

import './App.scss';

export const App = () => {
  return (
    <LayoutContext>
      <>
        <div className="top">
          <div className="header">
            <LogoBlock />
            <About />
          </div>
          <div className="main">
            <Realtor />
            {/* 
              <Object
                photos={data?.photo || []}
                ads={data?.promotion || []}
                features={data?.features}
              /> */}
              <SimilarObject/>
          </div>
        </div>
        <Footer />
      </>
    </LayoutContext>
  )
}
