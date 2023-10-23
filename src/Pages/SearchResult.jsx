import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar/TopBar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slide/Slider";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../Store";
import axios from "axios";

function SearchResult() {
  const param = useParams();
  const { search } = param;
  const [items, setitems] = useState([]);
  const navigate = useNavigate();
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5454/api/products/search?q=${search}`,
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
  }, [search]);
  console.log(items);
  return (
    <div>
      <TopBar />
      <Navbar />
      <Slider />
      <div className=" flex flex-wrap justify-center p-9">
        {items.length == 0 ? (
          <h1>No search items</h1>
        ) : (
          items.map((item) => {
            return (
              <div className=" flex flex-col cards w-72 px-3 ">
                <a href="/product/3">
                  <img src={item.imageUrl} style={{ minWidth: 240 }} alt="" />
                </a>
                <div className="flex justify-between px-1 font-bold">
                  <p>{item.title}</p>
                  <p>{item.price}$</p>
                </div>
                <div className="text-xs px-1 overflow-hidden line-clamp-2 ">
                  {item.description}
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchResult;
