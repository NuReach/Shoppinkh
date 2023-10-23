import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { Store } from "../Store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Paypal from "./Paypal";

function OrderDetail() {
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [streetAddress, setstreetAddress] = useState("");
  const [city, setcity] = useState("");
  const [state1, setstate] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [mobile, setmobile] = useState("");
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  //   try {
  //     const { data } = axios.post(
  //       `http://localhost:5454/api/orders/`,
  //       {
  //         firstName,
  //         lastName,
  //         streetAddress,
  //         city,
  //         state: state1,
  //         zipCode,
  //         mobile,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userInfo.jwt}`,
  //         },
  //       }
  //     );
  //     navigate(
  //       `/order/paypal?firtName=${firstName}&lastName=${lastName}&streetAddress=${streetAddress}&city=${city}&state=${state1}$mobile=${mobile}`
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className=" flex  justify-center items-center mb-9 flex-col">
        <div className="font-bold text-3xl my-12">
          Input your inforhtmlmation
        </div>
        <form className=" w-96">
          <div className="mb-6">
            <label
              forhtml="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your first name"
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your last name"
              onChange={(e) => setlastname(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="streetAddress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your street address "
              onChange={(e) => setstreetAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your city "
              onChange={(e) => setcity(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="state"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your state "
              onChange={(e) => setstate(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="zipCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your zip code "
              onChange={(e) => setzipCode(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="mobile"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enput your mobile "
              onChange={(e) => setmobile(e.target.value)}
              required
            />
          </div>
          <Paypal
            firstName={firstName}
            lastName={lastName}
            city={city}
            zipCode={zipCode}
            state1={state1}
            streetAddress={streetAddress}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default OrderDetail;
