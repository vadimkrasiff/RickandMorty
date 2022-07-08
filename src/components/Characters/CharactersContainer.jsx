import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { requestCharacters } from '../../Redux/characters-reducer';
import { getCharacters, getIsFetching } from '../../Redux/characters-selectors';
import Preloader from '../common/Preloader/Preloader';
import Characters from './Characters';

class CharactersContainer extends React.Component {
    componentDidMount() {
        this.props.getCharacters();
    }

    render() {
        return <div >
            {this.props.isFetching ? <Preloader /> :
                <Characters characters={this.props.characters} />
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        characters: getCharacters(state),
        isFetching: getIsFetching(state),
    }
};

export default compose(
    connect(mapStateToProps,
        { getCharacters: requestCharacters })
)(CharactersContainer);