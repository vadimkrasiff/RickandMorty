import React from "react";
import css from './Character.module.css';

let Character = ({ character }) => {

    return <div className={css.character}>
        <div className={css.leftInfo}>
            <div
                style={{
                    backgroundImage: `url(${character.image})`,
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    height: "300px",
                    width: "300px"
                }}>
            </div>
        </div>
        <div className={css.rightInfo}>

        </div>
    </div>
}

export default Character;