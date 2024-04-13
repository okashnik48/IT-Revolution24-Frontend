import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_CONFIG } from "./configs/routers-config";
import { useAppSelector } from "./store/store-hooks";
import "./scss/main.scss";

function App() {
  const userRole = useAppSelector((state) => state.user.user.role);
  const isRegistered = useAppSelector((state) => state.user.user.isRegistered);

  const isPublic = !userRole || !isRegistered;
  // if (!userRole || !isRegistered) {
  // return (
  //   // <BrowserRouter>
  // //   <Routes>
  //     {ROUTES_CONFIG.public.map(({ element, path }) => (
  //       <Route key={path} path={path} element={element} />
  //     ))}
  //   </Routes>
  // </BrowserRouter>
  // );
  // }

  return (
    <BrowserRouter>
      <Routes>
        {isPublic
          ? ROUTES_CONFIG.public.map(({ element, path }) => (
              <Route key={path} path={path} element={element} />
            ))
          : ROUTES_CONFIG.private[userRole].map(({ element, path }) => (
              <Route key={path} path={path} element={element} />
            ))}
        {/* {ROUTES_CONFIG.private[userRole].map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
