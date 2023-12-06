import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import left from '../../resources/left-arrow.png';
import right from '../../resources/right-arrow.png';

import { useState } from 'react';

const Carousel = ({ playlistType , playlist, callbackInc, callbackDec }) => {
  const [playlistOwner] = useState(playlistType);

  const handleIndex = (sign) => {
    sign === '+' ? callbackInc(playlistOwner) : callbackDec(playlistOwner);
  }

  return ( 
    <CarouselProvider className="playlist-carousel" touchEnabled={false} dragEnabled={false}
      naturalSlideWidth={150}
      naturalSlideHeight={90}
      totalSlides={playlist.total}>
      <Slider className="playlist-slider">
      {playlist.items?.map((data, i) => {
                    return (
                        <div key={i}>
                            <Slide index={i}><center><img src={data.images[0].url} alt="random" width={200} height={200}/><div className="playlist-cover-text">{data.name}</div></center></Slide>
                        </div>
                    )})}
      </Slider>
      <div style={{justifyContent:"center", display:"flex"}} className="playlist-buttons">
        <ButtonBack onClick={() => handleIndex('-')} className="carousel-button"><img src={left} alt={"left arrow"} width={"40px"} height={"40px"}/></ButtonBack>
        <ButtonNext onClick={() => handleIndex('+')} className="carousel-button"><img src={right} alt={"right arrow"} width={"40px"} height={"40px"}/></ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;