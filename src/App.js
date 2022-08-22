import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { requestCharacters } from './Redux/characters-reducer';
import { compose } from 'redux';
import './App.css';
import CharactersContainer from './components/Characters/CharactersContainer';
import Header from './components/Header/Header';
import store from './Redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
// import Cats from './components/Cats/Cats';
import CharacterContainer from './components/Character/CharacterContainer';
import FooterContainer from './components/Footer/FooterContainer';
import LocationsContainer from './components/Locations/LocationsContainer';

// const CharactersContainer = React.lazy(() => import('./components/Characters/CharactersContainer'))


class App extends React.Component {

  render() {
    return <div>
      <BrowserRouter>
        {/* <Cats  /> */}
        <Provider store={store}>

        <Header />
          <div className='App'>
              <Routes>
                <Route path='/character/:id' element={<div><CharacterContainer /> </div>} />
                <Route path='/characters&page=:currentPage' element={<div><CharactersContainer /></div>} />
                <Route path='/locations&page=:currentPage' element={<div><LocationsContainer /></div>} />
                <Route extends path='/locations' element={<Navigate to='/locations&page=1' replace />} />
                <Route extends path='/characters' element={<Navigate to='/characters&page=1' replace />} />
                <Route extends path='/' element={<div className="main">
                  <Preloader />
                </div>
                } />
              </Routes>
              <footer>
              <FooterContainer />
            </footer>
          </div>
        </Provider>

      </BrowserRouter>
    </div>
  }
}

export default App;
