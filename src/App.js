import React, { Component} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './components/FireNavbar';
// Test Component
// import ClickCounter from './components/ClickCounter'
// import HoverCounter from './components/HoverCounter'

// Redux
import { Provider } from 'react-redux'
import store from './store.js'

class App extends Component {
  render () {
    return (
      <div className="App">
       <Provider store={ store }>
          <Navbar />
          
          <hr/>
          
       </Provider>
      </div>
    );
  }
}

export default App;
