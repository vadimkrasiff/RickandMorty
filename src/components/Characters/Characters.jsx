import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import css from "./Characters.module.css"

let Characters = ({ characters, totalPagesCount, onPageChanged, currentPage, namePage, ...props }) => {

    return <div className={css.characters}>

        <div className={css.results}>
            {characters.map(chr => {
                return <div className={css.character} key={chr.id}>
                    <div
                        style={{
                            backgroundImage: `url(${chr.image})`,

                            borderTopRightRadius: "10px",
                            borderTopLeftRadius: "10px",
                            height: "300px",
                        }}>
                        <div className={css.firstInfo}>
                            <NavLink to={'/character/' + chr.id} >
                                <span className={css.name}>{chr.name}</span>
                            </NavLink>
                            <div className={css.status}>
                                <div className={chr.status === "Alive" && css.alivePoint || chr.status === "Dead" && css.deadPoint
                            || chr.status === "unknown" && css.unknownPoint}></div>
                                {chr.status} - {chr.species}
                            </div>
                        </div>
                    </div>
                    <div className={css.info}>
                        <div >
                            <div className={css.type}>
                                <span className={css.textGray}>Type: </span>
                                {chr.type}
                                {chr.type === "" && <span> none</span>}</div>
                            <div className={css.textBlock}>
                                <span className={css.textGray}>Gender: </span>
                                {chr.gender}
                            </div>
                        </div>
                        <div className={css.lastLoc}>
                            <div className={css.textGray}>Last known location:</div>
                            <div>{chr.origin.name}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div className={css.paginator}>
            <Paginator currentPage={currentPage} totalPagesCount={totalPagesCount}
            onPageChanged={onPageChanged} namePage={namePage} />
        </div>
    </div>
}

export default Characters;