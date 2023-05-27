import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen m-[-50px]  flex justify-center items-center">
      <div className="px-10 py-12 rounded shadow-lg shadow-gray-300/100 flex flex-col gap-5 justify-content-center w-[400px]">
        <h3 className="font-bold text-center text-gray-700 text-lg">SIGN UP</h3>
        <form className="flex flex-col gap-5">
          <input
            id="username"
            type="text"
            placeholder="Enter Email"
            className="tracking-widest py-3 border border-gray-400 normal-case text-center"
          />

          <input
            id="name"
            type="text"
            placeholder="Enter Full Name"
            className="tracking-widest py-3 border border-gray-400 normal-case text-center"
          />
          
          <input
            id="password"
            type="text"
            placeholder="Enter Password"
            className="tracking-widest py-3 border border-gray-400 normal-case text-center"
          />

          <input
            id="password"
            type="text"
            placeholder="Confirm Password"
            className="tracking-widest py-3 border border-gray-400 normal-case text-center"
          />
          <button className="border border-black py-3 w-full btn">SIGN UP</button>
        </form>

        <h3 className="normal-case text-center">
          Already have an Account?
          <Link to="/login" className="normal-case text-blue-400">
            {" "}
            Login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
