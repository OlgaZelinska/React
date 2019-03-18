import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import '../sass/Card.css';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({arr: state.data, arrBasket: state.dataBasket});

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeBasket: (id)=>({type: 'CHANGE_BASKET', id}),
}, dispatch));

class Card extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
         this.props.changeBasket(this.props.dateCard.id)
         };

    render(){
        console.log (this.state)
        return(
            <div className="wrapper">
                <img src={this.props.dateCard.img} alt="" className="image" />
                <h2><Link to={'/page'+this.props.dateCard.id}>{this.props.dateCard.title}</Link></h2>
                <p className="text">{this.props.dateCard.description}</p>
                <h3 className="text-category">{this.props.dateCard.category}</h3>
                <div>{this.props.dateCard.price}грн/кг</div>
                <button onClick={this.handleClick} className="btn" >Добавить в корзину</button>
            </div>
        )}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);