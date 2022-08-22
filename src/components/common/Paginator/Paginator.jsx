import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Paginator.module.css";

let Paginator = ({ totalPagesCount, currentPage, namePage, portionSize = 20 }) => {

    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++)
        pages.push(i);

    console.log(pages);

    let portionCount = Math.ceil(totalPagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={css.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                {    console.log(p == currentPage)}
                return <NavLink to={`/${namePage + p}`}>
                <span className={ p == currentPage ? css.activePage : css.numPage}>{p}</span>
                </NavLink>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            
        }
    </div>
};

export default Paginator;