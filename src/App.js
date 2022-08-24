import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CharactersContainer from './components/Characters/CharactersContainer';
import Header from './components/Header/Header';
import store from './Redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
// import Cats from './components/Cats/Cats';
import CharacterContainer from './components/Character/CharacterContainer';
import FooterContainer from './components/Footer/FooterContainer';
import LocationsContainer from './components/Locations/LocationsContainer';
import EpisodesContainer from './components/Episodes/EpisodesContainer';
// const CharactersContainer = React.lazy(() => import('./components/Characters/CharactersContainer'))


let App = () => {

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
            <Route path='/episodes&page=:currentPage' element={<div><EpisodesContainer /></div>} />
            <Route extends path='/episodes' element={<Navigate to='/episodes&page=1' replace />} />
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

export default App;
