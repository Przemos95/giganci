import React from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/index';

import HeaderBar from '../Presentational/HeaderBar'

class Header extends React.Component {
    render() {
        return(
            <HeaderBar 
                isAuth={this.props.isAuth}
                name={this.props.name}
                onLogoutClick={this.props.handleLogoutClick}/>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogoutClick: () => dispatch(actionCreators.logout())
    };
};

const mapStateToProps = state => {
    return{
        isAuth: state.user.isAuth,
        name: state.user.user ? state.user.user.name : ''
    };
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Header);