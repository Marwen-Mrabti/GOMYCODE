import React from 'react';
import FilmCard from './FilmCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay, Pagination, Navigation } from 'swiper';

const FilmList = ({ searchList, setID, setTrailer }) => {
  return (
    <div className="film-list">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFlip, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {searchList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <FilmCard movie={movie} setID={setID} setTrailer={setTrailer} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FilmList;
