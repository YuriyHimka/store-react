import React from "react";
import './SearchCategory.scss'

const SearchCategory = () => {
    return (
        <select name="category" id="category">
            <option value="all">Gategories</option>
            <option value="shoes">Watches</option>
            <option value="t-shirt">Headphones</option>
            <option value="jackets">Airpods</option>
            <option value="accessories">MacBook</option>
        </select>
    )
}

export default SearchCategory