import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { Store } from "../Store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Paypal(props) {
  const [paidStatus, setPaidStatus] = useState("PENDING");
  const navigate = useNavigate();

  //get amount
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const [items, setitems] = useState([]);
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

  const amount = items.reduce((a, c) => a + c.price, 0);
  //console.log(amount);
  //props
  const { firstName, lastName, city, zipCode, state1, streetAddress } = props;
  //paypalid
  const paypalId =
    "AXqTOfTL8FMlQDfjphZ5XKhIqvKLHLjwOgwgXlYbmuIX6DkdMqd6xgNfwUJZfTBpbATfw8RB2hCrSBqb";

  //createorder
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: amount },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  }
  //onapprove
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        setPaidStatus(details.status);
      } catch (error) {
        console.log(error);
      }
    });
  }
  //error
  function onError(err) {
    console.log(err);
  }

  //papaypal
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  useEffect(() => {
    const loadPaypalScript = async () => {
      paypalDispatch({
        type: "resetOption",
        value: {
          "client-id": paypalId,
          currency: "USD",
        },
      });
      paypalDispatch({ type: "setLoadingStatus", value: "pending" });
    };
    loadPaypalScript();
  }, [paypalDispatch]);

  //create order
  //   if (paidStatus != "PENDING") {
  //     try {
  //       axios.post(
  //         `http://localhost:5454/api/orders/`,
  //         {
  //           firstName,
  //           lastName,
  //           streetAddress,
  //           city,
  //           state1,
  //           zipCode,
  //           mobile,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${userInfo.jwt}`,
  //           },
  //         }
  //       );
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   }

  console.log(paidStatus);

  return (
    <div>
      <div>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        ></PayPalButtons>
      </div>
    </div>
  );
}

export default Paypal;
