import React from "react";
import css from "./Characters.module.css"

let Characters = ({ characters, isFetching }) => {
    return <div className={css.characters}>
        {characters.map(chr => {
            return <div className={css.character} key={chr.id}>
                <img src={chr.image} />
                <div className={css.info}>
                    {/* {chr.name} */}
                </div>
            </div>
        })}
    </div>
}

export default Characters;