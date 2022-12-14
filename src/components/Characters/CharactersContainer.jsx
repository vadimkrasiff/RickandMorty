import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { requestCharacters } from '../../Redux/characters-reducer';
import { getCharacters, getIsFetching, getNamePage, getTotalPagesCount } from '../../Redux/characters-selectors';
import Preloader from '../common/Preloader/Preloader';
import Characters from './Characters';
import { useParams } from "react-router-dom";
import css from "./Characters.module.css"
import { useEffect } from 'react';

let CharactersContainer = (props) => {

    const { currentPage } = useParams();
    useEffect(() => {
        props.requestCharacters(currentPage)
    }, [currentPage])

        return <div className={css.container}>
            {props.characters == null || props.isFetching == true ? <Preloader /> :
                    <Characters characters={props.characters}
                        totalPagesCount={props.totalPagesCount}
                        currentPage={currentPage}
                        namePage={props.namePage} />
            }
        </div>
    }

let mapStateToProps = (state) => {
    return {
        characters: getCharacters(state),
        isFetching: getIsFetching(state),
        totalPagesCount: getTotalPagesCount(state),
        namePage: getNamePage(state),
    }
};

export default compose(
    connect(mapStateToProps,
        { requestCharacters })
)(CharactersContainer);