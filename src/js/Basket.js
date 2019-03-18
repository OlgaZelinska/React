import React, { Component, Fragment } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import '../sass/Basket.css';

const mapStateToProps = (state) => ({arr: state.data, arrBasket: state.dataBasket})

class Basket extends Component {
    getFullData(){
        console.log(this.props.arrBasket);
        let fullArr = [];
        for (const ddd of this.props.arrBasket){
            for (const x of this.props.arr){
                if (ddd.id===x.id){
                    fullArr.push({...ddd, ...x})
                }
            }

        }
        return(fullArr)
    }
    render(){
        console.log('data',this.getFullData());
        return (
            <div>
                {this.getFullData().map(item => {
                    return (
                        <div className="wrap"  key={item.id}>
                            <img src={item.img} alt="" className="img" />
                            <h2>{item.title}</h2>
                            <p className="parag">{item.description}</p>
                            <h3 className="text-cat">{item.category}</h3>
                            <div>{item.price}грн/кг</div>
                            <div>{item.count}</div>
                            <button className="batn">Оформить заказ</button>
                        </div>
                                            )
                })}

            </div>
        )}
}
export default connect(mapStateToProps)(Basket);