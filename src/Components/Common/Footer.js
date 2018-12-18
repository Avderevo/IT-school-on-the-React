// Footer.js
import React, { Component } from 'react';
import fb from "../../img/fb.png"
import google from "../../img/google.png"
import picassa from "../../img/picassa.png"
import you_tube from "../../img/you-tube.png"
import twit from "../../img/twit.png"

class Footer extends Component {
  render() {
    return (
        <div className="footer-flex">
            <section id="footer" className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-social">
                                <div className="mb-5">
                                    <div>
                                        <a href="#"><img src={fb} className="icon-h" /></a>
                                        <a href="#"><img src={google} className="icon-h" /></a>
                                        <a href="#"><img src={picassa} className="icon-h" /></a>
                                        <a href="#"><img src={you_tube} className="icon-h" /></a>
                                        <a href="#"><img src={twit} className="icon-h" /></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>2018&nbsp;г.</div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="footer-social">
                                <div className="mb-5">
                                    <a className="footer-link decor-none" href="#">О компании</a>
                                    <a className="footer-link decor-none" href="#">Отзывы</a>
                                </div>
                            </div>
                            <div>
                                <a className="footer-link decor-none" href="">Пoльзовательское соглашение</a>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="mb-5">
                                <p>По всем вопросам пишите на: <a className="footer-link decor-none" href="Super@google.com">Super@google.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
  }
}

export default Footer;