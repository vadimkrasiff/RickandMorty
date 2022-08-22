import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";

let Menu = ({ openMenu, scroll }) => {


    return <div className={!openMenu ? css.menu : css.openMenu }>
        <div className={css.navbar}>
            <NavLink to={"/characters"}>
                <div className={css.a}>Characters</div>
            </NavLink>
            <NavLink to={"/locations"}>
                <div className={css.a}>Location</div>
            </NavLink>
            <NavLink to={"/characters"}>
                <div className={css.a}>Episode</div>
            </NavLink>
        </div>
    </div>
}

export default Menu;