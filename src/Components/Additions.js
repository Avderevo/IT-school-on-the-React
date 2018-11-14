// Additions.js
import React, { Component } from 'react';
import AdditionCard from './AdditionCard';

class Additions extends Component {
    render() {
          if (this.props.data){
              var data = this.props.data;

              var additioncard = data.map(function (item) {
                  return(
                      <AdditionCard data={item}/>
                  )
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