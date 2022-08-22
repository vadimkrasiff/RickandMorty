import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { getCurrentPage, getIsFetching, getLocations, getNamePage, getTotalPagesCount } from '../../Redux/locations-selectors';
import Preloader from '../common/Preloader/Preloader';
import Locations from './Locations';
import { useParams } from "react-router-dom";
import css from "./Locations.module.css"
import { useEffect } from 'react';
import { requestLocations } from '../../Redux/locations-reducer';

let LocationsContainer = (props) => {

    const { currentPage } = useParams();
    useEffect(() => {
        props.getLocations(currentPage)
    }, [currentPage])

        return <div className={css.container}>
            {props.locations == null || props.isFetching ? <Preloader /> :
                    <Locations locations={props.locations}
                        totalPagesCount={props.totalPagesCount}
                        currentPage={props.currentPage}
                        namePage={props.namePage} />
            }
        </div>
    }

let mapStateToProps = (state) =>  {
    return {
        locations: getLocations(state),
        isFetching: getIsFetching(state),
        totalPagesCount: getTotalPagesCount(state),
        currentPage: getCurrentPage(state),
        namePage: getNamePage(state),
    }
};

export default compose(
    connect(mapStateToProps,
        { getLocations: requestLocations })
)(LocationsContainer);