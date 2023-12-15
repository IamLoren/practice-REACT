import React, { Suspense } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
