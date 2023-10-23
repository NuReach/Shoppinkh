import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../../Store";

function DetailRight() {
  const param = useParams();
  const { productId } = param;
  const navigate = useNavigate();
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const [item, setitem] = useState();
  const [size, setsize] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5454/api/products/id/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.jwt}`,
            },
          }
        );
        setitem(data);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:5454/api/carts/add`,
        { productId, size },
        {
          headers: {
            Authorization: `Bearer ${userInfo.jwt}`,
          },
        }
      );
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productId, size, userInfo.jwt, size);
  return (
    <div className=" ">
      {item ? (
        <div className=" flex flex-col w-full justify-center md:flex-row md:pb-24 md:pt-9">
          <div className="left flex justify-center ">
            <img src={item.imageUrl} alt="" className="w-96" />
          </div>
          <div className="space-y-3 md:ml-9 px-3 flex flex-col justify-center">
            <div className=" flex justify-between ">
              <h3 className="font-bold text-xl">{item.title}</h3>
            </div>
            <div className="flex flex-col ">
              <p className=" font-bold">Description :</p>
              <p>{item.description}</p>
            </div>
            <div className="flex space-x-3">
              <span className=" font-bold">Price :</span>
              <h3 className=" ">{item.price}$</h3>
            </div>
            <div className="space-x-3">
              <span className=" font-bold">Size :</span>
              <select
                name="size"
                id=""
                className="border-none focus:ring-0 "
                onChange={(e) => setsize(e.target.value)}
                required
              >
                <option value="">Select size</option>
                {item.sizes.map((size, index) => {
                  return (
                    <option key={index} value={size.name}>
                      {size.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              onClick={handleAddToCart}
              className=" border-2 p-2 w-60 rounded bg-slate-600 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DetailRight;
