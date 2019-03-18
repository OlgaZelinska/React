import React, { Component , Fragment } from 'react';

import Aside from './Aside';
import Catalog from './Catalog';
import {initialState} from './store';
import '../sass/MainPage.css';

class MainPage extends Component {
    
  render(){       
        return(
       <div className="wrap">         
         <Aside dateCard={initialState.data} />
        <Catalog dateCard={initialState.data} />
            
      </div>       
    )
  }
}

export default MainPage;
