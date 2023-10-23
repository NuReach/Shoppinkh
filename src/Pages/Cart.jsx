import React, { useContext, useEffect, useState } from "react";
import TopBar from "../Components/TopBar/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../Store";

function Cart() {
  const [items, setitems] = useState([]);
  const navigate = useNavigate();
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5454/api/carts/`, {
          headers: {
            Authorization: `Bearer ${userInfo.jwt}`,
          },
        });
        setitems(data.cartItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userInfo]);
  const handelChange = async (id, quantity) => {
    try {
      console.log(id, quantity);
      const { data } = await axios.put(
        `http://localhost:5454/api/cart_items/${id}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${userInfo.jwt}`,
          },
        }
      );
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(items);
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className=" md:pl-20">
        <div className="flex justify-center items-center md:flex md:justify-start md:pl-16 md:pt-6 ">
          <h3 className="font-bold text-2xl ">Shopping Cart</h3>
        </div>
        <div className=" md:flex justify-center ">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">
                        <div className="w-1/4 flex justify-center items-center relative">
                          <img src={item.product.imageUrl} alt="" width={300} />
                          <span
                            className="bg-pink-100 text-pink-800 text-xs font-medium mr-2
                           px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300 absolute top-0 -right-3 "
                          >
                            {item.size}
                          </span>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.product.title}
                      </th>
                      <td className="px-6 py-4">
                        <select
                          name=""
                          id=""
                          value={item.quantity}
                          onChange={(e) =>
                            handelChange(item.id, e.target.value)
                          }
                        >
                          {Array.from(
                            { length: item.product.quantity },
                            (_, i) => i + 1
                          ).map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="relative">
                          ${item.product.price}
                          <div
                            className="absolute -top-5 left-0 bg-pink-100 text-pink-800 text-xs font-medium mr-2
                           px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300 "
                          >
                            {item.product.discountedPercent}%
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        ${item.price - item.discountedPrice}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={async () => {
                            try {
                              const { data } = await axios.delete(
                                `http://localhost:5454/api/cart_items/${item.id}`,
                                {
                                  headers: {
                                    Authorization: `Bearer ${userInfo.jwt}`,
                                  },
                                }
                              );
                              window.location.reload();
                            } catch (error) {
                              console.log(error);
                            }
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rightCart flex flex-col justify-center items-center w-full px-16 pb-9 mt-9">
          <div className="pb-3">
            <h3 className=" text-xl">Total</h3>
          </div>
          <div className="pl-2 space-y-3">
            <div className="flex">
              <p>Total items :</p>
              <p>{items.length}</p>
            </div>
            <div className="flex">
              <p>Total price :</p>
              <p>
                ${items.reduce((a, c) => a + c.price - c.discountedPrice, 0)}
              </p>
            </div>
            <button
              onClick={() => navigate("/orderDetail")}
              className=" border-2 p-2 w-full bg-slate-600 text-white"
            >
              ORDER
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
