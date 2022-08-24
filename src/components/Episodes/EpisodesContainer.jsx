import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { getCurrentPage, getIsFetching, getEpisodes, getNamePage, getTotalPagesCount } from '../../Redux/episodes-selectors';
import Preloader from '../common/Preloader/Preloader';
import Episodes from './Episodes';
import { useParams } from "react-router-dom";
import css from "./Episodes.module.css"
import { useEffect } from 'react';
import { requestEpisodes } from '../../Redux/episodes-reducer';

let EpisodesContainer = (props) => {

    const { currentPage } = useParams();
    useEffect(() => {
        props.requestEpisodes(currentPage)
    }, [currentPage])

        return <div className={css.container}>
            {props.episodes == null || props.isFetching ? <Preloader /> :
                    <Episodes episodes={props.episodes}
                        totalPagesCount={props.totalPagesCount}
                        currentPage={props.currentPage}
                        namePage={props.namePage} />
            }
        </div>
    }

let mapStateToProps = (state) =>  {
    return {
        episodes: getEpisodes(state),
        isFetching: getIsFetching(state),
        totalPagesCount: getTotalPagesCount(state),
        currentPage: getCurrentPage(state),
        namePage: getNamePage(state),
    }
};

export default compose(
    connect(mapStateToProps,
        { requestEpisodes })
)(EpisodesContainer);