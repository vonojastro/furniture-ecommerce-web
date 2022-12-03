import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Cards = () => {
  return (
    <>
      <section className="py-10 ">
        <div className="grid grid-cols-4 gap-12 justify-items-center">
          <div className="w-full flex flex-col gap-10 text-center cursor-pointer">
            <div className=" h-[340px] card">
              <img src={require("../../img/f1.jpg")} alt="f1" />
              <p>Shop Now</p>
            </div>
            <h4>Furniture 1</h4>
          </div>

          <div className="w-full flex flex-col gap-10 text-center cursor-pointer">
            <div className=" h-[340px] card">
              <img src={require("../../img/f2.jpg")} alt="f1" />
              <p>Shop Now</p>
            </div>
            <h4>Furniture 1</h4>
          </div>

          <div className="w-full flex flex-col gap-10 text-center cursor-pointer">
            <div className=" h-[340px] card">
              <img src={require("../../img/f3.jpg")} alt="f1" />
              <p>Shop Now</p>
            </div>
            <h4>Furniture 1</h4>
          </div>

          <div className="w-full flex flex-col gap-10 text-center cursor-pointer">
            <div className=" h-[340px] card">
              <img src={require("../../img/f4.jpg")} alt="f1" />
              <p>Shop Now</p>
            </div>
            <h4>Furniture 1</h4>
          </div>
        </div>

        <div className="pt-12 w-full flex justify-center">
          <Link to="shop">
            <button className="btn">
              View all products
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cards;
