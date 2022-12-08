import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import { dummydata2 } from '../../Data/index.js'
import Button from "../Button";

const Carousel = () => {
  return (
    <>
      <section className="py-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper py-2"
        >
          {dummydata2.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col gap-10 text-center cursor-pointer">
                <div className=" h-[320px] card">
                  <img src={item.img} alt="f1" />
                  <p>Shop Now</p>
                </div>
                <h4>{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}

<button className="swiper-button-prev"></button>
<button className="swiper-button-next"></button>

        </Swiper>
        <div className="pt-12 w-full flex justify-center">
        <Button content={'View collection'}/>
        </div>
      </section>
    </>
  )
}

export default Carousel