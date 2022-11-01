import React from "react";
import './Chips.scss'

interface IChips {
    label: string;
}

const Chips = ({ label }: IChips) => {

    return (
        <span className="Chips">
            { label }
        </span>
    )
}

export default Chips