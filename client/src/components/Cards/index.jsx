import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { dummydata } from '../../Data/index.js'
import Button from "../Button";

const Cards = () => {
  return (
    <>
      <section className="py-10 ">
        <div className="grid grid-cols-4 gap-12 justify-items-center">
          {dummydata.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-10 text-center cursor-pointer">
              <div className=" h-[340px] card">
                <img src={item.img} alt="f1" />
                <p>Shop Now</p>
              </div>
              <h4>{item.name}</h4>
            </div>
          ))}

        </div>

        <div className="pt-12 w-full flex justify-center">
        <Button content={'View collection'}/>
        </div>
      </section>
    </>
  );
};

export default Cards;
