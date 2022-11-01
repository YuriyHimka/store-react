import React from "react";
import './Tab.scss'

interface ITab {
    label: string
    classLink: string
}

const Tab = ({ label, classLink }: ITab) => {
    return (
        <a href="#" className={ classLink }>{ label } </a>
    )
}

export default Tab