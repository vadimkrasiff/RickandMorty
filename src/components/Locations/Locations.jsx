import React from "react";
import Paginator from "../common/Paginator/Paginator";
import css from "./Locations.module.css"

let Locations = ({ locations, totalPagesCount, onPageChanged, currentPage, namePage, ...props }) => {

    return <div className={css.characters}>

        <div className={css.results}>
            {locations.map(loc => {
                return <div className={css.location} key={loc.id}>
                    <div
                    // style={{
                    //     backgroundImage: `url(${chr.image})`,

                    //     borderTopRightRadius: "10px",
                    //     borderTopLeftRadius: "10px",
                    //     height: "300px",
                    // }}
                    >
                        <div className={css.firstInfo}>
                            <a href={loc.url} >
                                <span className={css.name}>{loc.name}</span>
                            </a>
                        </div>
                    </div>
                    <div className={css.info}>
                        <div >
                            <div className={css.type}>
                                <span className={css.textGray}>Type: </span>
                                {loc.type}
                                </div>
                            <div className={css.textBlock}>
                                <span className={css.textGray}>Dimension: </span>
                                {loc.dimension}
                                {loc.dimension === "" && <span> None</span>}
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