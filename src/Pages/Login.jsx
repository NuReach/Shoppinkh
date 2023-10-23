import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { dispatch: ctxDisptach } = useContext(Store);
  const navigate = useNavigate();
  const [error, seterror] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:5454/auth/signin`, {
        email,
        password,
      });
      ctxDisptach({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      seterror(true);
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
      <div className="flex flex-col md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <a href="/signup" className="mb-7">
            <p className="text-sm font-normal text-gray-600 mb-6  ">
              Already have an account ?
              <span className="text-pink-500"> Sign up</span>
            </p>
          </a>
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
          >
            Login
          </button>
          {error ? (
            <div
              id="toast-warning"
              className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
                <span className="sr-only">Warning icon</span>
              </div>
              <div className="ml-3 text-sm font-normal">
                Your password and email is not correct!!
              </div>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-warning"
                aria-label="Close"
              ></button>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Login;
