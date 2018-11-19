// Additions.js
import React, { Component } from 'react';
import AdditionCard from './AdditionCard';


class Additions extends Component{
    render() {
        let additioncard;
        if (this.props.data){
            var data = this.props.data;
            additioncard = data.map((item) => {
                return <AdditionCard {...item}/>
            });
        }
        return (
            <section id="additions" className="section-additions">
                <div className="container">
                    <div className="row">
                        {additioncard}
                    </div>
                </div>
            </section>
        );
    }
}

export default Additions;

