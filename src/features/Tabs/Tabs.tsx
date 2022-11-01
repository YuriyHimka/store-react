import React from "react";
import Tab from "./Tab";
import './Tabs.scss'

const Tabs = () => {
    return (
        <div className="Tabs">
            <h3>Related Categories</h3>
            <div className="tabs__items">
                <Tab label="All" classLink="active"/>
                <Tab label="Watches" classLink="default"/>
                <Tab label="Headphones" classLink="default"/>
                <Tab label="AirPods" classLink="default"/>
            </div>
        </div>
    )
}

export default Tabs