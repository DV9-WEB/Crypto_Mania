import React, { useState, createContext } from "react";

export const MainContext = createContext(null);

export const ContextProvider = ({ children }) => {

    const [auth, setAuth] = useState(false)
    const [cart, setCart] = useState()
    const [username, serUsername] = useState('')

  return <MainContext.Provider value={{auth, setAuth, cart, setCart, username, serUsername}}>{children}</MainContext.Provider>;
};
