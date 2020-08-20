import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import BurgerContainer from './components/BurgerContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/> */}
        {/* <ItemContainer/> */}
        {/* <CakeContainer/> */}
        {/* <HooksCakeContainer/> */}
        {/* <IceCreamContainer/> */}
        {/* <BurgerContainer/> */}
        {/* <NewCakeContainer/> */}
        <UsersContainer/>
      </div>
    </Provider>
  );
}

export default App;
