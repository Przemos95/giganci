import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actionCreators from '../../../actions/index';

import {PL, url} from '../../common/translations';
import LoginStyles from '../Styles/LoginStyles';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

class Login extends React.Component {   
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        }

        this.onChange = this.handleChange.bind(this);
        this.onLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick = () => {
        this.props.onLoginClick(
            this.state.login,
            this.state.password
        );
    };

    handleChange = (event) => {
        if (event.target.id === 'login') {
            this.setState({login: event.target.value});
        } else {
            this.setState({password: event.target.value});
        }
    };

    render() {
        if (this.props.isAuth)
            return (<Redirect to={url.home} />);

        return(
            <div style={LoginStyles.container}>
                <TextField
                    id='login'
                    label={PL.login.login}
                    style={LoginStyles.text}
                    onChange={this.onChange}
                />
                <TextField
                    id='password'
                    label={PL.login.password}
                    style={LoginStyles.text}
                    type="password"
                    onChange={this.onChange}
                />
                <div style={LoginStyles.sendButton}>
                    <div style={LoginStyles.error}>
                        {this.props.loginError ? 'Problem z loginem lub hasłem, spróbuj ponownie.' : ''}
                    </div>
                    <Button variant="contained" color="primary" onClick={this.handleLoginClick}>
                        {PL.login.send}
                        <Send style={{ marginLeft: '5px'}} />
                    </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (username, password) => dispatch(actionCreators.login(username, password))
    };
};

const mapStateToProps = state => {
    return{
        isAuth: state.user.isAuth,
        loginError: state.user.loginError
    };
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);