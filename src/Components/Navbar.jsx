import React, { useContext } from "react";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Navbar() {
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const handleSignout = () => {
    ctxDisptach({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value) {
      setsearch(e.target.value);
      console.log(search);
    }
  };

  const handleClick = () => {
    navigate(`/products/search/${search}`);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <h3 className="font-bold text-2xl">SHOPINK KH</h3>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div
                className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
                onClick={handleClick}
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-1 
                focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search..."
                onChange={handleChange}
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  New In
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </a>
              </li>
              {/* <li>
                <a
                  href="/cart"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="black"
                      d="m4.01 18.682-.498-.053v.005l.498.048Zm16.5 0 .497-.048v-.005l-.498.053ZM19.406 8.294l.497-.053-.048-.447h-.45v.5Zm-14.295 0v-.5h-.45l-.047.447.497.053Zm2.412 3.177a.5.5 0 0 0 1 0h-1Zm8.47 0a.5.5 0 0 0 1 0h-1Zm-9.07-2.677h10.67v-1H6.925v1Zm11.985-.447 1.103 10.387.994-.105L19.904 8.24l-.995.106ZM18.401 20.5H6.118v1H18.4v-1ZM4.507 18.734 5.61 8.347l-.995-.106L3.513 18.63l.994.105Zm1.61 1.766c-.953 0-1.7-.821-1.61-1.771l-.995-.095A2.618 2.618 0 0 0 6.118 21.5v-1Zm13.895-1.771c.09.95-.657 1.771-1.61 1.771v1a2.618 2.618 0 0 0 2.605-2.866l-.995.095Zm-2.418-9.935H19.406v-1H17.594v1Zm-10.67-1H5.114v1H6.926v-1Zm1.6-.559A3.735 3.735 0 0 1 12.26 3.5v-1a4.735 4.735 0 0 0-4.736 4.735h1ZM12.26 3.5a3.735 3.735 0 0 1 3.735 3.735h1A4.735 4.735 0 0 0 12.259 2.5v1ZM7.523 7.235v4.236h1V7.235h-1Zm8.47 0v4.236h1V7.235h-1Z"
                      fill="black"
                      strokeWidth="0.2"
                    ></path>
                  </svg>
                </a>
              </li> */}
              <li>
                <a
                  href="/cart"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cart
                </a>
              </li>
              {userInfo ? (
                <li className="hidden md:block">
                  <a
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    type="button"
                  >
                    User
                  </a>
                  <div
                    id="dropdownHover"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <a
                          href="/profile"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/order"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Order
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={handleSignout}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li>
                  <a
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </a>
                </li>
              )}
              <li className="md:hidden">
                <a
                  href="/profile"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Profile
                </a>
              </li>
              <li className="md:hidden">
                <a
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Order
                </a>
              </li>
              <li className="md:hidden">
                <a
                  onClick={handleSignout}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div>
        {showSearch ? (
          <div className="mb-9 top-28 z-50 w-full bg-white flex flex-col justify-center items-center ">
            <div className=" flex flex-col justify-center w-3/4 border-2 shadow-lg p-3 rounded-lg ">
              <div className="flex justify-between items-center w-full">
                <div className=" font-bold text-2xl">New Items</div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowSearch(false);
                    setsearch(false);
                  }}
                >
                  close
                </div>
              </div>
              {search ? (
                <div className="flex flex-wrap">
                  {items.map((item, index) => {
                    <div className=" flex flex-col cards w-72 px-3 mx-6 my-3">
                      <a href={`/product/${item.id}`}>
                        <img
                          src="https://c.media.kavehome.com/images/Products/J0600050FN46_1V01.jpg?tx=w_auto,h_485,c_fill"
                          style={{ minWidth: 240 }}
                          alt=""
                        />
                      </a>
                      <div className="flex justify-between px-1 font-bold">
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                      </div>
                      <div className="text-xs px-1 overflow-hidden line-clamp-2 ">
                        {item.description}
                      </div>
                    </div>;
                  })}
                </div>
              ) : (
                <div className=" flex flex-wrap justify-center items-center">
                  {items.map((item, index) => {
                    <div className=" flex flex-col cards w-72 px-3 mx-6 my-3">
                      <a href={`/product/${item.id}`}>
                        <img
                          src="https://c.media.kavehome.com/images/Products/J0600050FN46_1V01.jpg?tx=w_auto,h_485,c_fill"
                          style={{ minWidth: 240 }}
                          alt=""
                        />
                      </a>
                      <div className="flex justify-between px-1 font-bold">
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                      </div>
                      <div className="text-xs px-1 overflow-hidden line-clamp-2 ">
                        {item.description}
                      </div>
                    </div>;
                  })}
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div> */}
    </div>
  );
}

export default Navbar;
