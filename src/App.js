import React from 'react'
import './App.scss';
import Menu from './sections/menu'
import Section from './sections/section';
import {BrowserRouter,Route} from 'react-router-dom';


const App= ()=> {

  return (
    <div className="App">
        <BrowserRouter>
              <Menu/>
              <Route path="/section1" render={ ()=> <Section seaction={1} titel={3} maxGroup={3} minGroup={1} /> }/>
              <Route path="/section2" render={ ()=> <Section seaction={2} titel={8} maxGroup={4} minGroup={2}/> }/>
              <Route path="/section3" render={ ()=> <Section seaction={3} titel={12} maxGroup={4} minGroup={2}/> }/>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
