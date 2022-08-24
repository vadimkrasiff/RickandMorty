import React from "react";
import Paginator from "../common/Paginator/Paginator";
import css from "./Episodes.module.css"

let Locations = ({ episodes, totalPagesCount, onPageChanged, currentPage, namePage, ...props }) => {

    return <div className={css.episodes}>

        <div className={css.results}>
            {episodes.map(ep => {
                return <div className={css.episode} key={ep.id}>
                    <div className={css.firstInfo}>
                        <a href={ep.url} >
                            <span className={css.name}>{ep.name}</span>
                        </a>
                    </div>
                    <div className={css.info}>
                        <div >
                            <div className={css.date}>
                                <span className={css.textGray}>Air date: </span>
                                {ep.air_date}
                            </div>
                            <div className={css.textBlock}>
                                <span className={css.textGray}>Episode: </span>
                                {ep.episode}
                                {ep.episode === "" && <span> None</span>}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div className={css.paginator}>
            <Paginator currentPage={currentPage} totalPagesCount={totalPagesCount}
                namePage={namePage} />
        </div>
    </div>
}

export default Locations;