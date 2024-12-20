import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import SliderCard from "../SliderCard";

const Slider = () => {
  return (
    <>      
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
        }}
        navigation= {
          {
            nextEl: '.slider-next-btn',
            prevEl: '.slider-prev-btn'
          }
        }
        loop={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide className="w-[10%]">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="w-[10%]">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="w-[10%]">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="w-[10%]">
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
