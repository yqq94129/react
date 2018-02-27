import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import Myself from './components/Myself';
import Detail from './components/Detail';
import Cart from './components/Cart';
import './style/iconfont/iconfont.css';
import './style/reset.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' component={Home}></Route>
            <Route path='/films' component={Films}></Route>
            <Route path='/myself' component={Myself}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/cart' component={Cart}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
