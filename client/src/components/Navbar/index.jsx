import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Currency from "./CurrencyDropdown";
import "./styles.css";

const Navbar = () => {
  const [isUsd, setIsUsd] = useState(null);
  const [usdToPeso, setUsdToPeso] = useState(54);

  useEffect(() => {
    const usd = localStorage.getItem("isUsd");
    setIsUsd(usd);
  }, [setIsUsd]);

  return (
    <div className="w-full mx-auto bg-white">
      <div className="mx-[50px]  mx-auto ">
        <div className="grid gap-4 grid-cols-3 justify-center h-[60px]">
          {/* Navlinks */}

          <ul className="flex w-full gap-5 items-center cursor-pointer">
            <Link to="shop">
              <li>Shop</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="collection">
              <li>Collection</li>
            </Link>
          </ul>

          {/* logo */}
          <div className="flex items-center justify-center">
            <Link to="/">
              <h4>Von Ojastro</h4>
            </Link>
          </div>

          <div className="flex w-full gap-5 items-center cursor-pointer justify-end text-sm">
            <Currency className="nav-link" setIsUsd={setIsUsd} isUsd={isUsd} />

            <Link to='login'>
              <CiUser style={{ fontSize: "1.5rem" }} className="nav-link" />
            </Link>

            <Link to='cart'>
              <CiShoppingCart
                style={{ fontSize: "1.5rem" }}
                className="nav-link"
              />
            </Link>

            <CiHeart style={{ fontSize: "1.5rem" }} className="nav-link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
