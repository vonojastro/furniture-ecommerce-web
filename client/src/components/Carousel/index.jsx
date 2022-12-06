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
        <Slider {...carouselSettings} className="">
          {dummyData2.map((item, id) => (
            <div
              key={id}
              className="p-3 flex flex-col gap-10 text-center cursor-pointer"
            >
              <Link to="/shop">
                <div className=" h-[350px] card">
                  <img src={item.img} alt="f1" />
                  <p>Shop Now</p>
                </div>
                <h4 className="pt-8">{item.name}</h4>
              </Link>
            </div>
          ))}
        </Slider>
        <div className="pt-12 w-full flex justify-center">
          <Button content={"View all products"} />
        </div>
      </section>
    </>
  );
};

export default Carousel;
