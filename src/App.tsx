import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_CONFIG } from "./configs/routers-config";
import "./scss/main.scss";
import { useAppDispatch, useAppSelector } from "./store/store-hooks";
import userService, { Tokens } from "./services/user.service";
import { SetTokens, SetUserInfo } from "./store/slices/user";
import Preloader from "./components/preloader/Preloader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const userRole = useAppSelector((state) => state.user.user.role);
  const isRegistered = useAppSelector((state) => state.user.user.isRegistered);

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedTokensString = localStorage.getItem("tokens");
    let storedTokens: Tokens | null = null;
    
    try {
      storedTokens = storedTokensString ? JSON.parse(storedTokensString) : null;
    } catch (error) {
      console.log("Error parsing stored tokens:");
      
    }

    if (storedTokens !== null && storedTokens !== undefined ) {
      const { accessToken, refreshToken } = storedTokens;
      dispatch(SetTokens({ accessToken, refreshToken }));

      dispatch(userService.endpoints.getUserInfo.initiate(null))
        .unwrap()
        .then((data) => {
          dispatch(SetUserInfo(data));
          setIsLoading(false)
        });
    } else {
      console.error("No tokens found in localStorage");
      setIsLoading(false)
    }
    
  }, []);

  if (isLoading) {
    return <Preloader />
  }

  if (!userRole || !isRegistered) {
    return (
      <BrowserRouter>
        <Routes>
          {ROUTES_CONFIG.public.map(({ element, path }, index) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES_CONFIG.private[userRole].map(({ element, path }, index) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
