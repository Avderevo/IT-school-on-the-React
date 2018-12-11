import React, {Component} from 'react';

class StudyChatForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    handleChange =(e) => {
        let value = e.target.value;
        this.setState({message: value}
        )};

    submitChange =(e) =>{
        e.preventDefault();

        let messageData = {
            'message': this.state.message
        };

        this.setState({
            message: ''
        });

        fetch('http://localhost:8000/users/create_usegr/',{
            method: "POST",
            body: JSON.stringify(messageData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    };

    render(){
        return(
            <div className="message-form">
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-10">
                        <input
                            className="form-control mb-2"
                            name="message"
                            type="text"
                            value={this.state.message}
                            onChange={this.handleChange}
                            placeholder="Сообщение"
                        />
                        </div>
                        <div className="col-button">
                            <button
                                className = "btn btn-primary mb-2"
                                onClick= {this.submitChange}>
                                Отправить

                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default StudyChatForm;