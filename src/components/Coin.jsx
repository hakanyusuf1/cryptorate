import axios from "axios";
import React, { memo, useEffect, useMemo, useState } from "react";
import Main from "./Main";
import LOGO from "../logo.png";

const Coin = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getApi = async () => {
    try {
      const { data } = await axios(url);
      setCoin(data);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  useEffect(() => {
    getApi();
  }, []);
  const filtredSearch = useMemo(() => {
    return coin?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [coin, search]);
  //   setInterval(() => {
  //     getApi();
  //   }, 10000);
  return (
    <div>
      <div
        className="px-5"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.7)",
          borderBottom: ".5px solid rgba(0,0,0,.5)",
        }}
      >
        <h1 className="lg:whitespace-nowrap text-2xl lg:text-4xl">
          Crypto APP
        </h1>
        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            flexBasis: "100%",
          }}
        >
          <input
            type="search"
            className="indent-0 lg:indent-12 text-2xl lg:text-4xl "
            placeholder="Search your Coin"
            style={{
              backgroundColor: "transparent",
              width: "100%",
              height: "100%",
              outline: "none",
              border: "none",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-transparent  text-2xl lg:text-4xl"
            style={{
              outline: "none",
              border: "none",
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <Main data={filtredSearch} key={filtredSearch.id} />
      </div>
    </div>
  );
};

export default Coin;
