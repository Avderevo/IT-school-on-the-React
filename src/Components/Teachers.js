import React, { Component } from 'react';
import Teacher from './Teacher';

class Teachers extends Component {
  render() {
      let teacher;
      if (this.props.data) {
          let data= this.props.data;
          teacher= data.map(function (item) {
              return(
                     <Teacher {...item}/>
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