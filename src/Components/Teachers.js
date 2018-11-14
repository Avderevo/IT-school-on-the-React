// Teachers.js

import React, { Component } from 'react';


class Teachers extends Component {
  render() {
      if (this.props.data) {
          var data= this.props.data;
          var teacher= data.map(function (item) {
              return(
                      <div className="col-lg-3 col-md-6 d-none d-md-block">
                          <a href=""><img className="rounded-circle mb-3 transition-scale" src={require("../img/"+item.img)} alt="" width="180" height="180" /></a>
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                      </div>
              )

          });
      }

    return (
      <section id="teachers" className="section-teachers">
        <div className="container">
            <div className="teachers-title">
                <div className="row">
                    <div className="col-lg-5 col-md-7 ">
                        <a className="decor-none" href="#"><h4>Наши преподователи</h4></a>
                    </div>
                    <div className="col">    
                        <a className="btn-dark decor-none" href="#">Стать Преподователем</a>
                    </div>                        
                </div>
            </div>
            <div className="text-center">
                <div className="row">
                    {teacher}
                </div>
            </div>
        </div>        
    </section>   
    );
  }
}

export default Teachers;