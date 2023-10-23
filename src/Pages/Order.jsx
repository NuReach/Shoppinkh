import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { Store } from "../Store";
import { useContext } from "react";
import { useState } from "react";

function Order() {
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const [items, setitems] = useState([]);
  const data = [
    {
      id: 2,
      orderId: null,
      user: {
        id: 2,
        firstName: "Hov",
        lastName: "Vathana",
        password:
          "$2a$10$VBi/QrKT7Uo7eLL7h1SN3.5id8Vgkg4viCHZK0ydc3IA7sBW8xYgu",
        email: "hovvathana2021@gmail.com",
        role: "customer",
        mobile: "+855 89803284732",
        address: [
          {
            id: 2,
            firstName: "Hov",
            lastName: "Vathana",
            city: "Phnom Penh",
            state: "Phnom Penh",
            zipCode: "12345",
            mobile: "8557032840234",
            steetAddress: null,
          },
          {
            id: 52,
            firstName: "Hov",
            lastName: "Vathana",
            city: "Phnom Penh",
            state: "Cambodia",
            zipCode: "120101",
            mobile: "213214",
            steetAddress: null,
          },
          {
            id: 53,
            firstName: "Hov",
            lastName: "Vathana",
            city: "Phnom Penh",
            state: "Toul Sleng",
            zipCode: "120101",
            mobile: "3424",
            steetAddress: null,
          },
        ],
        paymentInformation: [],
        createdAt: null,
      },
      orderItems: [
        {
          id: 2,
          product: {
            id: 1,
            title: "Red Long Table",
            description: "A nice long big table just the way you like it",
            price: 199,
            discountedPrice: 40,
            discountedPercent: 10,
            quantity: 100,
            brand: "Table Pro",
            color: "Red",
            sizes: [
              {
                name: "M",
                quantity: 30,
              },
              {
                name: "S",
                quantity: 20,
              },
              {
                name: "XS",
                quantity: 0,
              },
              {
                name: "L",
                quantity: 50,
              },
            ],
            imageUrl: "https://image-url.com",
            ratings: [],
            reviews: [],
            numRatings: 0,
            category: {
              id: 202,
              name: "banana",
              parentCategory: {
                id: 152,
                name: "food",
                parentCategory: null,
                level: 1,
              },
              level: 2,
            },
            createdAt: "2023-10-11T10:44:34.109577",
          },
          size: "M",
          quantity: 1,
          price: 100,
          discountedPrice: 40,
          userId: 2,
          deliveryDate: null,
        },
        {
          id: 3,
          product: {
            id: 2,
            title: "White Long Table",
            description: "A nice long big table",
            price: 100,
            discountedPrice: 40,
            discountedPercent: 10,
            quantity: 100,
            brand: "Table Pro",
            color: "Red",
            sizes: [
              {
                name: "M",
                quantity: 30,
              },
              {
                name: "L",
                quantity: 50,
              },
              {
                name: "S",
                quantity: 20,
              },
            ],
            imageUrl: "https://image-url.com",
            ratings: [],
            reviews: [],
            numRatings: 0,
            category: {
              id: 2,
              name: "table",
              parentCategory: {
                id: 1,
                name: "furniture",
                parentCategory: null,
                level: 1,
              },
              level: 2,
            },
            createdAt: "2023-10-11T10:44:41.902993",
          },
          size: "M",
          quantity: 1,
          price: 100,
          discountedPrice: 40,
          userId: 2,
          deliveryDate: null,
        },
      ],
      orderDate: "2023-10-11T10:47:12.045565",
      deliveryDate: null,
      shippingAddress: {
        id: 2,
        firstName: "Hov",
        lastName: "Vathana",
        city: "Phnom Penh",
        state: "Phnom Penh",
        zipCode: "12345",
        mobile: "8557032840234",
        steetAddress: null,
      },
      paymentDetails: {
        paymentMethod: null,
        status: "PENDING",
        paymentId: null,
        razorpayPaymentLinkId: null,
        razorpayPaymentLinkReferenceId: null,
        razorpayPaymentLinkStatus: null,
        razorpayPaymentId: null,
      },
      totalPrice: 200.0,
      totalDiscountedPrice: 80,
      discount: 120,
      orderStatus: "DELIVERED",
      totalItem: 2,
      createdAt: "2023-10-11T10:47:12.045565",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5454/api/orders/user`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.jwt}`,
            },
          }
        );
        setitems(data.cartItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userInfo]);
  console.log(items);
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="container flex flex-col justify-center items-center">
        <div className="title">
          <h1 className="font-bold text-2xl my-6">ORDER OF HISTORY</h1>
        </div>
        <div className="item w-1/2">
          {data.map((item) => {
            return (
              <div className=" border-b-2 mb-6 p-6 ">
                <div className="top flex justify-between ">
                  <div className="left">
                    <p className="text-xs text-gray-400">ORDER ITEMS</p>
                    {item.orderItems.map((p) => {
                      return <p className="font-bold">{p.product.title}</p>;
                    })}
                  </div>
                  <div className="mid flex flex-col items-end ">
                    <div>
                      <p className="text-xs text-gray-400">ORDERED ON</p>
                    </div>
                    <p>{item.orderDate.substring(0, 10)}</p>
                  </div>
                  <div className="right flex flex-col items-end ">
                    <div>
                      <p className="text-xs text-gray-400">STATUS</p>
                    </div>
                    <div>
                      <p className="font-bold text-orange-400">
                        {item.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mid flex justify-between mt-3">
                  <div className="1">
                    <div>
                      <p className="text-xs text-gray-400">TOTAL ITEM</p>
                    </div>
                    <div>
                      <p>{item.totalItem}</p>
                    </div>
                  </div>
                  <div className="2">
                    <div>
                      <p className="text-xs text-gray-400">TOTAL PRICE</p>
                    </div>
                    <div>
                      <p>{item.totalPrice}</p>
                    </div>
                  </div>
                  <div className="3 flex flex-col items-end ">
                    <div>
                      <p className="text-xs text-gray-400">TOTAL DISCOUNT</p>
                    </div>
                    <div>
                      <p>{item.discount}</p>
                    </div>
                  </div>
                  <div className="4 flex flex-col items-end">
                    <div>
                      <p className="text-xs text-gray-400">PRICE</p>
                    </div>
                    <div>
                      <p>${item.totalDiscountedPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="buttom flex space-x-3 mt-3 items-center">
                  <p className="text-xs text-gray-400">SHIPPING ADDRESS</p>
                  <div className=" flex space-x-3 font-thin">
                    <p>{item.shippingAddress.firstName}</p>
                    <p>{item.shippingAddress.lastName}</p>
                    <p>{item.shippingAddress.city}</p>
                    <p>{item.shippingAddress.state}</p>
                    <p>+{item.shippingAddress.mobile}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Order;
