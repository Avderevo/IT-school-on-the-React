// Header.js
import React, { Component } from 'react';
import headerimg from "../../img/itv2.png";
import WhiteButton from "../Common/WhiteButton";
import WhiteNegativButton from "../Common/WhiteNegativButton";


class Header extends Component {
  render() {
    return (
      <section className="header-section">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Получи навыки<span> для отличной карьеры в IT</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit integer vulputate nisl eu odio porttitor pulvinar nunc congue bitur pretium.</p>
                    <div className="btn-wrap">
                        <div className="mb-5">

                            <WhiteNegativButton data={{text:"Выбрать курс", href:"/all_courses/"}} />

                            <WhiteButton data={{text:"Программы лояльности", href:"#"}}  />

                        </div>
                    </div>
                </div>
                <div className="col d-none d-lg-block">
                    <div>
                        <img src={headerimg} className="img-fluid mb-3 mt-3"/>                       
                    </div>
                </div>               
            </div>
        </div>    
    </section>
    );
  }
}

export default Header;