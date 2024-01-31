import React from "react";
import Header from "./components/Navigation/Header/Header.jsx";
import Footer from "./components/Navigation/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout