import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {  NavLink, useNavigate, } from "react-router-dom";
import { compose } from "redux";
import useOutsideClick from "../../../hooks/useClickOtside";
import { requestData } from "../../../Redux/search-reducer";
import { getData, getIsFetching } from "../../../Redux/search-selectors";
import css from "./Search.module.css";

let Search = ({ data, isFetching, ...props }) => {

    const ref = useRef();

    const navigate = useNavigate();

    let handleEnterPress = (event) => {
        if(event.key == "Enter") {;
            SendData();
            navigate('search&page=1');
            ref.current.blur();
        }
    }

    const [focusInput, setFocusInput] = useState(false);

    let activeFocus = () => {
        setFocusInput(true);
    }

    let deactiveFocus = () => {
        setFocusInput(false);
    }

    useOutsideClick(ref, deactiveFocus);

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    
    let portionedData = [];
    let portionData = (portion = 20 , i = 0) => {
        portionedData[i] = [];
        data.forEach((el, index)=> {
            if(index < portion && index >= portion - 20 ) {
                portionedData[i].push(el);
            }
            else if(index == portion){
                portionData(portion+20, ++i);
                return null;
            }
        })
        console.log(portionedData);

    }
    
    const ClearInputText = () => {
        setInputText('');

    }

    const SendData = () => {
        setInputText('');
    }

    return <div>
        <div className={css.search}>
            <input ref={ref} onClick={activeFocus}
                placeholder='search...' onChange={inputHandler} onKeyUp={handleEnterPress} value={inputText} />
            <NavLink to={`/search&text=${inputText|| ' '}&page=1`} onClick={SendData}></NavLink>
        </div>
        { focusInput ?
        <div className={focusInput ? css.result: css.noneResult}>

            {isFetching ? null : data.filter((el) => {
            if (inputText !== '') {
                return el.name.toLowerCase().includes(inputText);
            }
            return null}).map((el) => (
                <NavLink to={`/${el.url}/${el.id}`} onClick={ClearInputText} >
                    <div className={css.oneResult} >
                        <div>{el.name}</div>
                        <div className={css.type}>{el.url}</div>
                    </div>
                </NavLink>
            ))}
        </div> : null}
    </div>
}

let mapStateToProps = (state) => {
    return {
        data: getData(state),
        isFetching: getIsFetching(state),
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        sendData: (data) => {
            dispatch(requestData(data));
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps,))(Search);
