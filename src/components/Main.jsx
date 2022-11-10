import React, { memo } from "react";
import Down from "../icons/Down";
import Up from "../icons/Up";

const Main = ({ data }) => {
  console.log(data);
  return (
    <div
      className="container mx-auto mt-[2rem]"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {data.map((data) => {
        return (
          <div
            className="bg-gray-200 hover:bg-gray-300  rounded-[10px] shadow-md hover:shadow-2xl transition-all duration-300"
            key={data.id}
            style={{
              display: "flex",
              padding: "20px 10px",
              flexDirection: "column",
              gap: "3rem",
              width: "250px",
              height: "350px",
            }}
          >
            <div className="flex  justify-center gap-5 items-center ">
              <img
                src={data.image}
                width="70px"
                height="70px"
                alt={data.symbol}
              />
              <h1 className="text-2xl font-semibold">{data.name}</h1>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-2xl text-center">
                <span className="mr-3">Price: </span>
                <span>
                  $
                  {data.current_price
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
              </div>

              <div className="flex flex-col text-center items-center gap-2 whitespace-nowrap text-xl">
                24 Hour Volume:
                {data?.price_change_percentage_24h < 0 ? (
                  <p
                    className="flex text-lg gap-2 items-center "
                    style={{
                      color: "red",
                    }}
                  >
                    {data?.price_change_percentage_24h.toFixed(2)}%{<Down />}
                  </p>
                ) : (
                  <p
                    className="flex text-lg items-center  gap-2 "
                    style={{
                      color: "green",
                    }}
                  >
                    {data?.price_change_percentage_24h.toFixed(2)}
                    {<Up />}
                  </p>
                )}
                {/* <Up />
                 */}
              </div>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <span className="font-semibold text-lg">Market Cap </span>{" "}
                <br />
                <span className="text-lg">
                  ${" "}
                  {data.market_cap
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  ,00
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Main);
