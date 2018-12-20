/*
import React, {Component} from 'react';
import {StudyChatForm} from './StudyChatForm';
import {ChatHomeworkList} from './ChatHomeworkList';
import {StudyChatHeader} from './StudyChatHeader';
import {ChatMessage} from './ChatMessage';
import Modal from "react-modal";
import connect from "react-redux/es/connect/connect";



class StudyChatModal extends Component{





    render(){
        const customStyles = {
            content : {

                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '2000',
            },

        };
        const click = this.props.openModal.click;

        return(
            <Modal
                style = {customStyles}
                isOpen={click}
                onRequestClose={this.closeModal}
                className="ReactModal__Content"
                bodyOpenClassName="ReactModal__Body--open"
                htmlOpenClassName="ReactModal__Html--open"
                shouldReturnFocusAfterClose = { true }

            >
                <div className='container container_full container_full-force container-overflow-auto'>
                    <div className='row'>
                        <div className='col-3 no_padding-col'>
                            <div className='Frame'>
                                <ChatHomeworkList/>
                            </div>

                        </div>
                        <div className=' no_padding-col col-9'>

                            <div className='homework__modal-table'>
                                <StudyChatHeader/>
                                <div className='homework__modal-content-row'>
                                    <div className='homework__modal-content-box'>
                                        <div className='homework__modal-content'>
                                            <div className='homework__modal-chat'>
                                                <div className='homework-chat'>
                                                    <div className='homework-chat__items'>
                                                        <ChatMessage/>

                                                    </div>
                                                    <StudyChatForm/>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </Modal>

        )
    }
}



const mapStatetoProps = (props) => {
    return props;
};

const connectedStudyChatModal = connect(mapStatetoProps)(StudyChatModal);
export {connectedStudyChatModal as StudyChatModal}
*/
