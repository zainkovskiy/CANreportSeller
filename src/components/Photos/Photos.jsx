import React, { useState } from "react"
import ImageGallery from 'react-image-gallery';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Photos.scss';

export const Photos = ({ photos }) => {
  const [full, setFull] = useState(false);

  const match = useMediaQuery('(max-width: 480px)')
  const minHeight = match ? 250 : 400;
  return (
    <ImageGallery items={photos.map(img => (
      {
        original: img,
        thumbnail: img,
        originalHeight: !full ? minHeight : '100%',
        originalClass: full ? 'image-gallery_full' : 'image-gallery_small'
      }
    ))}
      showThumbnails={full}
      thumbnailPosition={'bottom'}
      showPlayButton={false}
      lazyLoad={true}
      autoPlay={false}
      slideDuration={300}
      onErrorImageURL={'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg'}
      onScreenChange={(event) => { setFull(event) }}
    />
  )
}