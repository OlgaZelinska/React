import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../sass/Filter.css';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changePrice: (payload)=> ({type: 'CHANGE_PRICE', payload})},dispatch))
const mapStateToProps = (state) => ({arr: state.data})
class FilterPrice extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        if(+event.target.children[0].value > +event.target.children[1].value){
            console.log('Неправильно')
        } else {
            this.props.changePrice({min: parseInt(event.target.children[0].value, 10),
                max: parseInt(event.target.children[1].value, 10)})
            console.log('min',event.target.children[0].value)
            console.log('max',event.target.children[1].value)
        }
    }
    minMax() {
        let min = this.props.arr[0].price;
        let max = min;
        for(const item of this.props.arr){
            if (item.price < min) min = item.price;
            if (item.price > max) max = item.price;
        }
        return {min, max};
    }
    handleRange(event) {
        event.target.parentElement.firstElementChild.value = event.target.getAttribute('min');
        event.target.parentElement.children[1].value = event.target.value;
    }
    handleInput(event) {
        if(event.target.value !== '' && +event.target.value >= +event.target.nextElementSibling.getAttribute('min') && +event.target.value <= +event.target.nextElementSibling.getAttribute('max')){
            event.target.nextElementSibling.value = event.target.value;
        }
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit.bind(this)} className="filter">
                <input type="text"/>
                <input
                    type="text"
                    onChange = {this.handleInput.bind(this)}
                />
                <input
                    type="range"
                    min = {this.minMax().min}
                    max = {this.minMax().max}
                    onChange = {this.handleRange.bind(this)}/>
                <button className="but">Ok</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);