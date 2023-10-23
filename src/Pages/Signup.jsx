import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    try {
      console.log(firstName, lastName, email, password);
      const { data } = axios.post("http://localhost:5454/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen md:flex">
      <div className=" md:flex w-1/2 h-full bg-gradient-to-tr from-pink-600 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            SHOPPINKKH
          </h1>
          <p className="text-white mt-1">The most popular Store for you</p>
          <button
            type="submit"
            className="block w-28 bg-white text-pink-600 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">SIGN UP</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Your information
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 focus:ring-0 focus:border-1 
                focus:border-gray-300 border-none placeholder-gray-500"
              type="text"
              name=""
              id=""
              placeholder="First Name"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 focus:ring-0 focus:border-1 
                focus:border-gray-300 border-none placeholder-gray-500"
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 focus:ring-0 focus:border-1 
                focus:border-gray-300 border-none placeholder-slate-500"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 focus:ring-0 focus:border-1 
                focus:border-gray-300 border-none placeholder-slate-500"
              type="text"
              name=""
              id=""
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-stone-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={handleClick}
          >
            Sign up
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Already have account ?
          </span>
          <a href="/login">
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Log In
            </span>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
