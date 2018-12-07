import React, {Component} from 'react';

class StudyChatForm extends Component{
    render(){
        return(
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
        )
    }

}

export default StudyChatForm;