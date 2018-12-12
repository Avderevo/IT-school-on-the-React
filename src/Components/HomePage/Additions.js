import React, { Component } from 'react';
import AdditionCard from './AdditionCard';
import {schoolAction} from "../../_actions";
import connect from "react-redux/es/connect/connect";



class Additions extends Component{

    componentDidMount() {
        this.props.dispatch(schoolAction.getAdditionsData());
    }

    render() {
        const {additionsData} = this.props;

        return (
            <section id="additions" className="section-additions">
                <div className="container">
                    <div className="row">
                        {additionsData.loading && <em>Loading data...</em>}
                        {additionsData.error &&  <span className="text-danger">ERROR: {additionsData.error}</span>}
                        {additionsData.items && additionsData.items.additions.map((item, index) =>
                            <AdditionCard {...item} />
                        )}

                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    const {additionsData} = state;
    return {
        additionsData
    }

}

const connectedAdditions = connect(mapStateToProps)(Additions);
export {connectedAdditions as Additions};


