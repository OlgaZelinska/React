import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Catalog from './Catalog';
import Filter from './Filter';
import SortingTitle from './SortingTitle';
import CategoryFilter from './CategoryFilter';
import {initialState} from './store';

import '../sass/Aside.css';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changePrice: (payload)=> ({type: 'CHANGE_PRICE', payload}),
    changeCatagory: (payload)=>({type: 'CHANGE_CATEGORY', payload}),
    changeSort: (payload)=>({type: 'CHANGE_SORT', payload})
},dispatch))

const mapStateToProps = (state) => ({arr: state.data})

class Aside extends Component {
  render(){       
        return(      
            <div className="container">       
         <Filter dateCard={initialState.mass}  />
         <SortingTitle dateCard={initialState.mass} />
         <CategoryFilter dateCard={initialState.mass}/>
            </div>
          
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Aside);
