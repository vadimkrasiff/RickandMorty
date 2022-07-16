import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { requestCharacters } from './Redux/characters-reducer';
import { compose } from 'redux';
import './App.css';
import Characters from './components/Characters/Characters';
import CharactersContainer from './components/Characters/CharactersContainer';
import Header from './components/Header/Header';
import Menu from './components/Header/Menu/Menu';
import store from './Redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

// const CharactersContainer = React.lazy(() => import('./components/Characters/CharactersContainer'))


class App extends React.Component {

  render() {
    // let arrCat = [cat, cat];

    // let cat = () => {
    //   {
    //     for (; i < 3; i++) {
    //       console.log(i);
    //       return 
    //     }
    //   }
    // }
    return <div >
      <BrowserRouter>
        <div className='wrap'>
          {/* {arrCat.map(item => (
            <div>{item.}</div>
          ))} */}

          <div className='wrapper'>
              <div className="cat">
              </div>
              <div className="cat">
              </div>
            
            {/* <div className='doubleCat'>
              <div className="cat">
              </div>
              <div className="cat">
              </div>
            </div> */}
            
          </div>
        </div>
        <Provider store={store}>
          <Header />

          <div className='App'>
            <Routes>
              <Route path='/character/:userId?' element={<div>Character</div>} />
              <Route path='/characters' element={<CharactersContainer />} />
              <Route extends path='/' element={<div className="main"></div>
                // <Preloader />
              } />
            </Routes>
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  }
}

export default App;
