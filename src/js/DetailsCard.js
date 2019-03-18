import React, {Component} from 'react';
import {connect} from 'react-redux';

class DetailCard extends Component {
    render() {
        return (
            <div>
                {this.props.data.map((item, index)=>{
                    if (+this.props.match.params.id === item.id) {
                        return (
                            <div className="cardDetail" key={item.id}>
                                <img className="imgCardDetail" src= {item.img}/>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={item.id}></div>
                        )
                    }

                })}

            </div>

        );
    }
}
const mapStateToProps = (state) => ({data: state.data});
export default connect(mapStateToProps)(DetailCard);