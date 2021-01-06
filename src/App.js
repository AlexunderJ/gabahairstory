import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';
import Layout from './pages/Layout';
import './App.sass';
import Home from './pages/home/Home';
import Kontakt from './pages/kontakt/Kontakt';
import Team from './pages/team/Team';
import Cennik from './pages/cennik/Cennik';

function App() {
  return (
    <div className="App">
      
       <Layout>
       <Switch>
         <Route path='/team' component={Team} />
         <Route path='/kontakt' component={Kontakt} />
         <Route path='/cennin' component={Cennik} />
         <Route path='/' exact component={Home} />
         </Switch>
        
        
       </Layout>
        
        
      
    </div>
  );
}

export default App;
