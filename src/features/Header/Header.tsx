import React from "react";
import Promo from "./Promo/Promo";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import BottomHeader from "./BottomHeader/BottomHeader";

const Header = () => {
    return (
        <div className="Header">
            <Promo />
            <MiddleHeader />
            <BottomHeader />
        </div>
    )
}

export default Header