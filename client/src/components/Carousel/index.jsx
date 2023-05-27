import React from "react";
import Slider from "react-slick";
import "./styles.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { dummyData2 } from "../../Data/index.js";
import Button from "../Button";
import { Link } from "react-router-dom";

const Carousel = () => {
  function BlackNextArrow({ onClick }) {
    return (
      <div onClick={onClick} className="arrow-black arrow-right">
        <IoIosArrowForward />
      </div>
    );
  }

  function BlackPrevArrow({ onClick }) {
    return (
      <div onClick={onClick} className="arrow-black arrow-left">
        <IoIosArrowBack />
      </div>
    );
  }

  const carouselSettings = {
    className: "center",
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    infinite: false,
    nextArrow: <BlackNextArrow />,
    prevArrow: <BlackPrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
                <h4 className="pt-8">{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
