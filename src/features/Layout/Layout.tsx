import React from "react";
import './Layout.scss'
import Header from "../Header/Header";
import Search from "../Search/Search";
import Tabs from "../Tabs/Tabs";

const Layout = () => {
    return (
        <div className="Layout">
            <Header />
            <Search />
            <Tabs />
        </div>
    )
}

export default Layout