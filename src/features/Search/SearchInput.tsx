import React, { useState } from "react";
import SearchCategory from "./SearchCategory";
import "./SearchInput.scss"

const SearchInput = () => {

    const [clearSearch, setClearSearch]: any = useState(false)
    const [searchValue, setSearchValue]: any = useState('')

    const useInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
        if (event.target.value !=='') {
            setClearSearch(true)
        } else setClearSearch(false)
    }

    const clearInput = () => {
        setSearchValue('')
        setClearSearch(false)
    }

    return (
        <form id="search__form" action="">
            <span className="search-icon">
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6875 21.875C17.7616 21.875 21.875 17.7616 21.875 12.6875C21.875 7.61338 17.7616 3.5 12.6875 3.5C7.61338 3.5 3.5 7.61338 3.5 12.6875C3.5 17.7616 7.61338 21.875 12.6875 21.875Z" stroke="#49536E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.1846 19.1846L24.5002 24.5002" stroke="#49536E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
            <input onChange={ useInput } type="text" value={ searchValue } placeholder="Start serch products"/>

            { clearSearch && (
                <span className="clear-icon" onClick={ clearInput }>
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9934 12.5542 27.6216 9.25145 25.1851 6.81491C22.7486 4.37837 19.4458 3.00661 16 3ZM20.7125 19.2875C20.9003 19.4771 21.0056 19.7332 21.0056 20C21.0056 20.2668 20.9003 20.5229 20.7125 20.7125C20.5214 20.8973 20.2659 21.0006 20 21.0006C19.7341 21.0006 19.4786 20.8973 19.2875 20.7125L16 17.4125L12.7125 20.7125C12.5214 20.8973 12.2659 21.0006 12 21.0006C11.7341 21.0006 11.4786 20.8973 11.2875 20.7125C11.0997 20.5229 10.9944 20.2668 10.9944 20C10.9944 19.7332 11.0997 19.4771 11.2875 19.2875L14.5875 16L11.2875 12.7125C11.128 12.5182 11.0466 12.2715 11.0589 12.0205C11.0712 11.7694 11.1765 11.5319 11.3542 11.3542C11.532 11.1765 11.7694 11.0712 12.0205 11.0589C12.2715 11.0465 12.5182 11.128 12.7125 11.2875L16 14.5875L19.2875 11.2875C19.4818 11.128 19.7285 11.0465 19.9795 11.0589C20.2306 11.0712 20.4681 11.1765 20.6458 11.3542C20.8235 11.5319 20.9288 11.7694 20.9411 12.0205C20.9535 12.2715 20.872 12.5182 20.7125 12.7125L17.4125 16L20.7125 19.2875Z" fill="#49536E"/>
                        </svg>
                    </span>
            )}

            <SearchCategory />

        </form>
    )
}

export default SearchInput