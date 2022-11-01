import React from "react"
import './MiddleHeader.scss'
import Navigation from "./Navigation/Navigation";

const MiddleHeader = () => {
    return (
        <div className="MiddleHeader">
            <div className="download__section">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.75 22.75V5.25C22.75 4.2835 21.9665 3.5 21 3.5L7 3.5C6.0335 3.5 5.25 4.2835 5.25 5.25V22.75C5.25 23.7165 6.0335 24.5 7 24.5H21C21.9665 24.5 22.75 23.7165 22.75 22.75Z" stroke="#49536E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 7H17.5" stroke="#49536E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="download__description">Download Online Store App Here</span>
            </div>
            <Navigation />
        </div>
    )
}

export default MiddleHeader