import React, { useRef, useState } from 'react';
import css from "./Header.module.css"
import { NavLink } from "react-router-dom";
import Search from '../common/Search/Search';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestHeader } from '../../Redux/search-reducer';
import { getCharacters, getEpisodes, getIsFetching, getLocations } from '../../Redux/search-selectors';


let Header = ({characters, isFetching}) => {


    return <div className={css.header}>
        <div className={css.logo}>
            <div className={css.title}>
                <NavLink to={"/"}></NavLink>
            </div>
        </div>
        <div className={css.right}>
            <Search characters={characters} isFetching ={isFetching}/>
            <div className={css.menu}>
                <NavLink to={"/characters&page=1"}>
                    <div className={css.a}>Characters</div>
                </NavLink>
                <NavLink to={"/locations&page=1"}>
                    <div className={css.a}>Location</div>
                </NavLink>
                <NavLink to={"/episodes&page=1"}>
                    <div className={css.a}>Episode</div>
                </NavLink>
                <div>
                </div>
            </div>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        characters: getCharacters(state),
        locations: getLocations(state),
        episodies: getEpisodes(state),
        isFetching: getIsFetching(state),
    }
};

export default compose(
    connect(mapStateToProps,
        requestHeader)
)(Header);