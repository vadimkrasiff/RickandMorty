import React from "react";
import css from "./Footer.module.css";

let Footer = ({locationsCount, charactersCount, episodesCount}) => {
    return <div className={css.footer}>
        <div className={css.infoData}>
            <div>charactes: {charactersCount}</div>
            <div>locations: {locationsCount}</div>
            <div>episodes: {episodesCount}</div>
        </div>
        <div className={css.links}>
            <a href="https://vk.com/zachem_tobi_ito">Vk</a>
            <a href="https://github.com/vadimkrasiff">Github</a>
        </div>
    </div>
}

export default Footer;