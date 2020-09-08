import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homepage';
import Trivia from './components/pages/trivia';

const githubBase = "/DmgInc-Paul/";

function App() {

  return (
    <Router>
    <div className="App">
      <Header />

      <Route exact path={githubBase} component={Homepage}/>
      <Route exact path={{githubBase} + 'trivia'} component={Trivia}/>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
