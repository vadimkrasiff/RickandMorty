import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { compose } from "redux";
import { getData } from "../../Redux/search-selectors";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import css from "./SearchPage.module.css";

let SearchPage = ({ data, ...props }) => {
    const { currentPage, textSearch } = useParams();
    useEffect(() => {
    }, [currentPage]);
    console.log(currentPage);
        useEffect(()=>{},[currentPage]);

    let filterData = data.filter((el, index) => {
          return el.name.toLowerCase().includes(textSearch == " "? '': textSearch)});
    return <div className={css.searh}>
        {(data.length == 0) ? <div >
        <div>Found: None</div>
        <div className={css.preloader}><Preloader /></div>
            
        </div> :
            <div>
                <div>Found: {filterData.length }</div>
                <div className={css.results}>
                    {filterData.map((d, i) => {if(i <= 20*currentPage && i > (currentPage-1)*20) return <div className={css.result} >
                        <NavLink to={`/${d.url}/${d.id}`} className={css.name}>{d.name}</NavLink>
                        <div className={css.url}>{d.url}</div>
                    </div>})}
                </div>
            </div>}
        <Paginator totalPagesCount={Math.ceil(filterData.length/20)} currentPage={currentPage} namePage={`search&text=${textSearch}&page=`} />

    </div>

}

let mapStateToProps = (state) => ({
    data: getData(state),
})

export default compose(connect(mapStateToProps))(SearchPage);