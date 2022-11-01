import React from "react"
import './Promo.scss'
import Chips from "../../../components/Chips/Chips"

const Promo = () => {
    return (
        <div className="Promo">
            <span className="promo__content">We got a special deal for you</span>
            <Chips label="Deal" />
        </div>
    )
}

export default Promo