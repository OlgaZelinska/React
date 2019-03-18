import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../sass/SortingTitle.css';

const mapStateToProps = (state) => ({arr: state.data})

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeSort: (payload)=>({type: 'CHANGE_SORT', payload}),
}, dispatch));

class SortingTitle extends Component {
 constructor(props){
    super(props);

  }
    handleButtonNull(event) {
        this.props.changeSort(null);
        console.log(event.target.getAttribute('categoryid'));
    }
  render(){       
        return(
            <div className="sorting">
            <button onClick= {() => this.props.changeSort('asc')} className="butt">&uarr;</button>
            <button onClick= {() => this.props.changeSort('desc')} className="butt">&darr;</button>
            <button onClick= {() => this.props.changeSort('default')} className="butt">Defauld</button>
            <button onClick = {this.handleButtonNull.bind(this)} className="butt">All Categories</button>
            </div>
               )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortingTitle);