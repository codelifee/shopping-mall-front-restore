import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../services/index';
import './LoginForm.css';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        user_id:'', user_pwd:'', error:''
    }

    credentialChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    validateUser = () => {
        this.props.authenticateUser(this.state.user_id, this.state.user_pwd);
        setTimeout(() => {
            if(this.props.auth.isLoggedIn){
                return this.props.history.push("/home");
            }else{
                this.setState(() => this.initialState);
                this.setState({"error":"Invaild id and password"});
            }
        },500);
    };

    render() {
        const {user_id, user_pwd, error} = this.state;
        return (
            <div className="login">
            <div className="login_container">
                <div className="login_container_head">
                    <h1>Log in</h1>
                </div>
                <form className="login_search">
                <div className="login_id">
                        <label htmlFor="">Id</label>
                        <input 
                            id="user_id"
                            type="email" 
                            name="user_id"
                            value={user_id}
                            placeholder="Enter your id"
                            onChange={this.credentialChange}
                        />
                    </div>
                    <div className="login_password">
                        <label htmlFor="">Password</label>
                        <input 
                            id="user_pwd"
                            type="password" 
                            name="user_pwd"
                            value={user_pwd}
                            placeholder="Enter your password"
                            onChange={this.credentialChange}
                        />
                    </div>
                    {this.state.error && <p variant="danger">{error}</p>}
                </form>
                <Button type="button" className="Loginbutton" variant="success" 
                disabled={this.state.user_id.length===0 && this.state.user_pwd.length===0}
                onClick={this.validateUser}>
                    Login
                </Button>
            </div>
        </div> 
        );
    }
}

const mapStateProps = state => {
    return {
        auth:state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser:(user_id, user_pwd) => dispatch(authenticateUser(user_id, user_pwd))
    };
};

export default withRouter(connect(mapStateProps, mapDispatchToProps)(LoginForm));
