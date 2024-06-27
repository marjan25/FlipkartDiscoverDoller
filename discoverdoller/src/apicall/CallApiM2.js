import React, { useEffect, useState } from "react";
import "./CallApiM2.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Sidebarr from "../Components/Sidebarr";
import Banner from "../Components/Banner";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const CallApiM2 = () => {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json.products)) // Assuming "products" is the array you want to filter
      .catch((error) => console.error(error));
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const filteredData =
    data?.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    }) || [];

  const handleConsole = (id) => {
    console.log(id);
  };

  return (
    <div className="mainDiv">
      <div className="sidebarr">
        <Sidebarr></Sidebarr>
      </div>
      <div className="sidepart">
        <div className="baner">
          <Banner></Banner>
        </div>
        <div className="search">
          <Input
            icon={SearchIcon}
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>

        <h1> Products</h1>

        <div className="apicall">
          {/* {data? <pre>{JSON.stringify(data, null, 2)}</pre>:'loading'} */}
          {filteredData?.map((item, ind) => {
            return (
              <div className="apicall01" key={ind}>
                {/* <img src={item.thumbnail}></img> */}
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {item.images?.map((items) => {
                    return (
                      <SwiperSlide>
                        <img
                          key={items.id}
                          src={items}
                          alt="product images"
                        ></img>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <p key={ind} className="title">
                  {item.title}
                </p>
                <div className="details">
                  <div>
                    <p className="brand">{item.brand}</p>
                    <p className="price">${item.price}</p>
                  </div>
                  <div>
                    <p className="rating">rating: {item.rating}</p>
                    <p className="stock">Stock: {item.stock}</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => handleConsole(item)}>
                    read more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallApiM2;
