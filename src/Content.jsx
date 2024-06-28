import React, { useState, useEffect } from "react";

const Content = ({ symbol }) => {
  const [data, setData] = useState({
    buy: 0,
    hold: 0,
    sell: 0,
    strongBuy: 0,
    strongSell: 0,
    symbol: symbol,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=cpv7ia1r01qhmaurvus0cpv7ia1r01qhmaurvusg`,
      );
      const result = await response.json();
      if (result && Array.isArray(result) && result.length > 0) {
        setData({
          buy: result[0].buy,
          hold: result[0].hold,
          sell: result[0].sell,
          strongBuy: result[0].strongBuy,
          strongSell: result[0].strongSell,
          symbol: result[0].symbol,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [symbol]);

  return (
    <>
      <h1>Analyst recommendation</h1>
      <h2>Ticker: {data.symbol}</h2>
      <p>Buy: {data.buy}</p>
      <p>Hold: {data.hold}</p>
      <p>Sell: {data.sell}</p>
      <p>Strong buy: {data.strongBuy}</p>
      <p>Strong sell: {data.strongSell}</p>
    </>
  );
};

export default Content;
