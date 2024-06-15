import React, { useContext, useState } from "react";
import { MainContext } from "./Context";
import axios from "axios";

const ProductCard = ({ coins }) => {
  const { setCart } = useContext(MainContext);
  const [expandedCoinId, setExpandedCoinId] = useState(null);
  const [coinDescriptions, setCoinDescriptions] = useState({});
  const [loading, setLoading] = useState({});

  const fetchCoinData = async (coinId) => {
    try {
      setLoading((prevLoading) => ({ ...prevLoading, [coinId]: true }));
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      setCoinDescriptions((prevData) => ({
        ...prevData,
        [coinId]: response.data.description.en,
      }));
      setLoading((prevLoading) => ({ ...prevLoading, [coinId]: false }));
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setLoading((prevLoading) => ({ ...prevLoading, [coinId]: false }));
    }
  };

  const toggleDescription = (item) => {
    if (expandedCoinId === item.id) {
      setExpandedCoinId(null);
    } else {
      setExpandedCoinId(item.id);
      if (!coinDescriptions[item.id]) {
        fetchCoinData(item.id);
      }
      setCart(item); // Set the cart to the selected item
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
      {coins.map(({ item }) => (
        <div key={item.id} className="mt-8 flex justify-center">
          <div
            className={`w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg flex flex-col transition-all duration-600 ${
              expandedCoinId === item.id ? "h-auto" : "h-hidden"
            }`}
            style={{
              maxHeight: expandedCoinId === item.id ? "1000px" : "384px", // Adjusted height
              overflow: expandedCoinId === item.id ? "visible" : "hidden",
            }}
          >
            <img
              src={item.large}
              alt={item.name}
              className="w-full h-40 object-contain object-center"
            />
            <div className="px-4 py-2 flex-grow">
              <div className="content-container">
                {" "}
                {/* New container */}
                <div className="font-bold text-lg mb-2">{item.name}</div>
                <p className="text-gray-700 text-sm">
                  <b>Price: {item.data?.price_change_percentage_24h?.inr}₹</b>
                  <br />
                  {expandedCoinId === item.id && (
                    <div>
                      {loading[item.id] ? (
                        <p>Loading...</p>
                      ) : (
                        <p>{coinDescriptions[item.id]}</p>
                      )}
                    </div>
                  )}
                </p>
              </div>{" "}
              {/* End content container */}
            </div>

            <div className="px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => toggleDescription(item)}
              >
                {expandedCoinId === item.id ? "Back" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
