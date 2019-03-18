import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './Card';
import '../sass/Catalog.css';

class Catalog extends React.Component {
    get sortData() {
        let x = [...this.props.data];
        if (this.props.order === 'asc') {
            x.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (this.props.order === 'desc') {
            x.sort((a, b) => {
                return -a.price + b.price;
            })
        } else{
            x = [...this.props.data];
        }
        return x;
    }
    renderCatalog = () => {
        if(this.props.cat) {
            return this.sortData.filter(card => {
                return (card.categoryId === this.props.cat && card.price >= this.props.price.min && card.price <= this.props.price.max)
            }).map(item => {
                return (
                    <section className="cards-container" key={item.id}>
                        <Card dateCard={item}/>
                    </section>
                )
            })
        } else {
            return this.sortData.filter(card => {
                return (card.price >= this.props.price.min && card.price <= this.props.price.max)
            }).map(item => {
                return (
                    <section className="cards-container" key={item.id}>
                        <Card dateCard={item}/>
                    </section>
                )
            })
        }
    };
    render() {
        return(
            <div>
                {this.renderCatalog()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    cat: state.category,
    price: state.price,
    order: state.order});


export default connect(mapStateToProps)(Catalog);
