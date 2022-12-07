import React from "react";
import { NavLink } from "react-router-dom";
import cssChr from './Character.module.css';
import cssChrs from "./../Characters/Characters.module.css"
let Character = ({ character }) => {

    return <div className={cssChr.character}>
        <div className={cssChr.leftInfo}>
            <div
                style={{
                    backgroundImage: `url(${character.image})`,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "300px",
                    width: "300px"
                }}>
                    <div className={cssChrs.firstInfo}>
                            <NavLink to={'/character/' + character.id} >
                                <span className={cssChrs.name}>{character.name}</span>
                            </NavLink>
                            <div className={cssChrs.status}>
                                <div className={character.status === "Alive" && cssChrs.alivePoint || character.status === "Dead" && cssChrs.deadPoint
                            || character.status === "unknown" && cssChrs.unknownPoint}></div>
                                {character.status} - {character.species}
                            </div>
                        </div>
            </div>
            <div className={cssChrs.info}>
                        <div >
                            <div className={cssChrs.type}>
                                <span className={cssChrs.textGray}>Type: </span>
                                {character.type}
                                {character.type === "" && <span> None</span>}</div>
                            <div className={cssChrs.textBlock}>
                                <span className={cssChrs.textGray}>Gender: </span>
                                {character.gender}
                            </div>
                        </div>
                        <div className={cssChrs.lastLoc}>
                            <div className={cssChrs.textGray}>Last known location:</div>
                            <div>{character.origin.name}</div>
                        </div>
                    </div>
        </div>
        <div className={cssChr.rightInfo}>
            <div className={cssChr.titleRight}>JSON character</div>
            <div className={cssChr.json}>{ JSON.stringify(character, null, 2)}</div>
        </div>
    </div>
}

export default Character;