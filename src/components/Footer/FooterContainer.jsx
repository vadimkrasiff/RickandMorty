import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Footer from "./Footer";
import { getIsFetching, getTotalCharactersCount, getTotalEpisodesCount, getTotalLocationsCount} from '../../Redux/footer-selectors';
import { requestFooter } from "../../Redux/footer-reducer";

let FooterContainer = (props) => {

    return <div>
        {props.isFetching == true ? null :
                <Footer locationsCount={props.locationsCount}
                charactersCount={props.charactersCount}
                episodesCount={props.episodesCount} />
        }
    </div>
}

let mapStateToProps = (state) => {
    return {
        isFetching: getIsFetching(state),
        locationsCount: getTotalLocationsCount(state),
        charactersCount: getTotalCharactersCount(state),
        episodesCount: getTotalEpisodesCount(state),
    }
}

export default compose(
    connect(mapStateToProps,
        requestFooter)
)(FooterContainer);