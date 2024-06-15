import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="bg-black">
      {coins ? (<ProductCard coins={coins} />) : (<div
        style={{ height: "100vh" }}
        className="flex justify-center items-center"
      >
        <h1 className="text-4xl text-white">Loading...</h1>
      </div>)} 
    </div>
  );
};

export default Home;
