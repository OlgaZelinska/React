import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import MainPage from './js/MainPage';
import {initialState} from './js/store';
import DetailsCard from './js/DetailsCard';
import About from './js/About';
import Basket from './js/Basket';
import Header from "./js/Header";
import './App.css';


class App extends Component {
 
  render(){
      console.log(initialState)
        return(
       <BrowserRouter>
           <Fragment>
               <Header />
               <Route path="/about" component={About} />
               <Route path="/basket" component={Basket} />
               <Route exact path="/" component={MainPage} />
               <Route path="/page:id" component={DetailsCard} />
           </Fragment>
      </BrowserRouter>
    )
  }
}
export default App;




