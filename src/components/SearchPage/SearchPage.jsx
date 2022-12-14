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
    const { currentPage } = useParams();
    useEffect(() => {
    }, [currentPage])

        useEffect(()=>{},[currentPage]);
    return <div className={css.searh}>
        {(data.length == 0) || data[0].length == 0? <div >
        <div>Found: None</div>
        <div className={css.preloader}><Preloader /></div>
            
        </div> :
            <div>
                <div>Found: {data.length * 20 - (20 - data[data.length - 1].length)}</div>
                <div className={css.results}>
                    {data[currentPage-1].map((d) => <div className={css.result} >
                        <NavLink to={`/${d.url}/${d.id}`} className={css.name}>{d.name}</NavLink>
                        <div className={css.url}>{d.url}</div>
                    </div>)}
                </div>
            </div>}
        <Paginator totalPagesCount={data.length} currentPage={currentPage} namePage={`search&page=`} />

    </div>

}

let mapStateToProps = (state) => ({
    data: getData(state),
})

export default compose(connect(mapStateToProps))(SearchPage);