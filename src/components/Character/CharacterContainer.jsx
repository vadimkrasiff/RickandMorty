import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import { requestCharacter } from '../../Redux/character-reducer'
import Character from "./Character";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../common/Preloader/Preloader";
import { getCharacter, getIsFetching } from "../../Redux/character-selectors";


let CharacterContainer = (props) => {

    const { id } = useParams();

    useEffect(() => {
        props.requestCharacter(id)
    }, [id])

    return <div>
        {props.character == null || props.isFetching == true ? <Preloader /> :
            <Character character={props.character} />}
    </div>
}

let mapStateToProps = (state) => {
    return {
        character: getCharacter(state),
        isFetching: getIsFetching(state),
    }
}

export default compose(
    connect(
        mapStateToProps,
        { requestCharacter }
    )
)(CharacterContainer);