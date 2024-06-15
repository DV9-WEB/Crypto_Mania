import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MainContext } from "./Context";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setAuth, setUsername: setContextUsername } = useContext(MainContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim() === "") {
      alert("Please enter a username.");
      return;
    }
    setAuth(true);
    setContextUsername(username);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md border-2 border-white">
        <h1 className="text-3xl text-center text-blue-500 m-3">Sign In</h1>
        <h2 className="text-xl font-bold mb-6 text-center text-blue-500">
          Please log in to view coin details.
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white m-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <label className="block text-white m-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <NavLink to="/home">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
