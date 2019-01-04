import React from 'react';
import {withRouter} from 'react-router';


class HelloPage extends React.Component{

    render() {

        return (
            <div className='container'>
                <div className='text-center'>
                    <div className='mt-5'>
                        <div>
                            <h5 className='alert alert-primary'>{this.props.location.state.text}</h5>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default withRouter(HelloPage);