import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { Store } from "../../Store";
import { data } from "autoprefixer";
import axios from "axios";

function MiniMenu() {
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const [items, setitems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5454/api/products?pageNumber=0&pageSize=5`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.jwt}`,
            },
          }
        );
        setitems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(items.content);
  return (
    <div>
      <div className=" flex flex-col ">
        <div className=" flex justify-center">
          <h3 className=" text-sm md:text-lg mt-6">
            NEUTRAL TONES AND NATURAL MATERIALS
          </h3>
        </div>
        <div className="flex justify-start py-6 px-3 items-center overflow-x-scroll lg:px-9 xl:overflow-x-hidden lg:justify-center ">
          {items.content?.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col cards w-72 px-3 mx-6 my-3"
            >
              <a href={`/product/${item.id}`}>
                <img
                  src={item.imageUrl}
                  style={{ minWidth: 240, minHeight: 330 }}
                  alt=""
                />
              </a>
              <div className="flex justify-between px-1 font-bold">
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>
              <div className="text-xs px-1 overflow-hidden line-clamp-2 ">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniMenu;
