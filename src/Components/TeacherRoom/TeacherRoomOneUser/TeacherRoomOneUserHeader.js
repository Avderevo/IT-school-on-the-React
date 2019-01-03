import React  from 'react';
import {connect} from 'react-redux';
import {userActions} from '../../../_actions';
import {withRouter} from 'react-router';


class TeacherRoomOneUserHeader extends React.Component {

    componentDidMount() {
        const userId = this.props.location.state.userId;
        this.props.dispatch(userActions.getDetailUser(userId));

    }

    render(){
        const {detailUser} = this.props.detailUser;
        console.log(detailUser);

        return(
            <section id="t-1-student-header">
                <div className="container">
                    <div className="t-1-student-header-body">
                        {detailUser.loading && <em>Loading...</em>}
                        {detailUser.error &&  <span className="text-danger">ERROR: {detailUser.error}</span>}
                        {detailUser.items &&
                        <div className="display-4">
                            {detailUser.items.username}
                        </div>}
                    </div>
                </div>
            </section>

        );
    }
}


function mapStateToProps(detailUser) {

    return {
        detailUser
    };
}

const connectedTeacherRoomOneUserHeader = withRouter(connect(mapStateToProps)(TeacherRoomOneUserHeader));
export { connectedTeacherRoomOneUserHeader as  TeacherRoomOneUserHeader };