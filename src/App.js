import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{width: "80%", margin: "auto", marginTop: "20px", padding: "50px", textAlign: "right"}}>
          <CakeContainer />
          <IceCreamContainer />
        </div>
        
        {/* <HooksCakeContainer /> */}

        <div style={{width: "80%", marginTop: "20px", padding: "50px", textAlign: "left"}}>
          <NewCakeContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
