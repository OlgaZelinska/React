import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../sass/CategoryFilter.css'

const mapStateToProps = (state) => ({arr: state.data})

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeCatagory: (payload)=>({type: 'CHANGE_CATEGORY', payload}),
}, dispatch));

class CategoryFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValues:[],
        };
    }
    componentDidMount() {
        this.getFilterValues();
    }
    getFilterValues() {
        let x = [];
        for(const item of this.props.arr) {
            if(x.findIndex((el) => el.categoryId === item.categoryId) === -1) {
                x.push(item);
            }
        }
        this.setState({filterValues: [...x]})
    }
    handleButton(event) {
        this.props.changeCatagory(parseInt(event.target.getAttribute('categoryid'), 10));
        console.log(event.target.getAttribute('categoryid'));
    }
   	render() {
		return (
			<div className="category-filter">
				{this.state.filterValues.map(filter => {
					return (
						<button className="btt"
							key = {filter.categoryId}
							categoryid = {filter.categoryId}
							onClick = {this.handleButton.bind(this)}>{filter.category}</button>
					)
				})}
			</div>
		)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryFilter);