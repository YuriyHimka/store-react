import React from "react";
import './BottomHeader.scss'
import Logo from "./Logo/Logo";
import Icons from "./Icons/Icons";
import Profile from "./Profile/Profile";

const BottomHeader = () => {
    return (
        <div className="BottomHeader">
            <Logo />
            <div className="right__section">
                <Icons />
                <Profile />
            </div>
        </div>
    )
}

export default BottomHeader