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

import { dummyData2 } from '../../Data/index.js'

const Carousel = () => {
  return (
    <>
      <section className="py-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper py-5"
        >
          {dummyData2.map((item, id) => (
            <SwiperSlide>
              <div key={id} className="w-full flex flex-col gap-10 text-center cursor-pointer">
                <div className=" h-[320px] card">
                  <img src={item.img} alt="f1" />
                  <p>Shop Now</p>
                </div>
                <h4>{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </section>
    </>
  )
}

export default Carousel