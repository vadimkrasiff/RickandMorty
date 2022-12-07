import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "./Search.module.css";

let Search = ({ characters, isFetching }) => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    if (characters !== null && !isFetching) {
        let filteredData = characters.filter((el) => {
            if (inputText !== '') {
                return el.name.toLowerCase().includes(inputText);
            }
            return null;
        });


        const ClearInputText = () => {
            setInputText('');

        }

        return <div>
            <div className={css.search}>
                <input
                    placeholder='search...' onChange={inputHandler} value={inputText} />
                <div></div>
            </div>
            <div className={filteredData !== '' && css.result}>

                {filteredData != '' && filteredData.map((el) => (
                    <NavLink to={'/character/' + el.id} onClick={ClearInputText} >
                        <div key={el.id}>{el.name}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    }
}

export default Search;
