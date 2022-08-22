import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import { getCharacter } from '../../Redux/character-reducer'
import Character from "./Character";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../common/Preloader/Preloader";
import { getIsFetching } from "../../Redux/character-selectors";


let CharacterContainer = (props) => {

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        props.getCharacter(id)
    }, [id])

    return <div>
        {props.character == null || props.isFetching ? <Preloader /> : 
        <Character character={props.character} />}
    </div>
}

let mapStateToProps = (state) => {
    return {
        character: state.character.character,
        isFetching: getIsFetching(state),
    }
}

export default compose(
    connect(
        mapStateToProps,
        { getCharacter }
    )
)(CharacterContainer);