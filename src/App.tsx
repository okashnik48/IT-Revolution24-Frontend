import React, { useState } from "react";

import { Auth } from "./components/sign/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_CONFIG } from "./configs/routers-config";
import { Registration } from "./components/sign/Registration";
import Aquarium from "./components/game/Aquarium";

type RoleProps = "parent" | "child" | undefined;

function App() {
  const [userRole, SetUserRole] = useState<RoleProps>(undefined); 
  // if (!userRole) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         {ROUTES_CONFIG.public.map(({ element, path }, index) => (
  //           <Route key={path} path={path} element={element} />
  //         ))}
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  // return (
  //   <BrowserRouter>
  //   <Routes>
  //     {ROUTES_CONFIG.private[userRole].map(({ element, path }, index) => (
  //       <Route key={path} path={path} element={element} />
  //     ))}
  //   </Routes>
  // </BrowserRouter>
  // );
  return (
    <Aquarium />
  )
}

export default App;
