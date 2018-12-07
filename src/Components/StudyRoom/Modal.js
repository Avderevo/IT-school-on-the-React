import React from 'react';
import Modal from "react-modal";

const ModalPaje = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <Modal className={showHideClassName} >

            <section  id="homework-chat">
                <div className="row">
                    <div className="col-md-3 no_padding-col">
                        <div className="chat-homework-list">
                            <div className="homework-title-block">
                                <a href="">
                                    <div className='homework-name'>
                                        Lorem ipsum dolor ipsum dolor
                                        <span className="homework-title-icon">ff</span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-9 no_padding-col">
                        <div className="chat-header">
                            <div className="chat-header-text">
                                Домашнее задание по программированию
                            </div>
                            {children}
                            <button onClick={handleClose}>close</button>
                        </div>
                        <div className="chat-display">
                            <div className="message-block">
                                <div className="student-message-block">
                                    <div className="mb-3">
                                        <span className='message-author-avatar'>;)</span>
                                        <span className="message-author-name">Yury Avdeev</span>
                                    </div>

                                    <div className="message-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
                                        consequatur cumque cupiditate debitis dolor eos laudantium magnam molestiae
                                        pariatur perferendis
                                        placeat possimus, quo quod repellat vel vitae, voluptates voluptatibus.
                                    </div>
                                    <span className="message-date">24.11.18</span>

                                </div>
                            </div>

                        </div>
                        <div className="message-form">
                            <form>
                                <div className="form-row align-items-center">
                                    <div className="col-10">
                                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                        <input type="text" className="form-control mb-2" id="inlineFormInput"
                                               placeholder="Jane Doe" />
                                    </div>
                                    <div className="col-button">
                                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>




        </Modal>
    );
};

export default ModalPaje;