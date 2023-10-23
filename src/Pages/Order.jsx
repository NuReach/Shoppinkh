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
      <Footer />
    </div>
  );
}

export default Order;
