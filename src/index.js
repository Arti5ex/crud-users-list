import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import store from './store';
import Main from './components/Main';
import './index.css';

// import PokemonPage from './components/PokemonPage';


// render(
//   <Provider store={store}>
//     <Router>
//       <div>  
//         {/* <Route exact path="/" component={Main}/> */}
//         {/* <Route path="/pokemon/:id" component={PokemonPage}/> */}
//       </div>  
//     </Router>
//   </Provider>, 
//   document.getElementById('app')
// );


render(
  <Provider store={store}>
    <Router>
      <div>  
        <Route exact path="/" component={Main}/>
        {/* <Route path="/pokemon/:id" component={PokemonPage}/> */}
      </div>  
    </Router>
  </Provider>, 
  document.getElementById('root')
);