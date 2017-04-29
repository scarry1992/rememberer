import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import style from './User.pcss'

export default class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    changeLoginHandler(e) {
        this.setState({
            login: e.target.value
        });
    }

    changePasswordHandler(e) {
        this.setState({
            password: e.target.value
        });
    }

    loginHandler(e) {
        e.preventDefault();
        this.props.actions.changeUser({
            nickname: this.state.login,
            password: this.state.password
        }).then(() => this.props.actions.toggleValidateUsers());
        this.setState({
            login: '',
            password: ''
        });
    }

    logoutHandler() {
        this.props.actions.toggleValidateUsers();
    }

    render() {
        const didInvalidate = this.props.usersById.didInvalidate;

        return (
            <div className={didInvalidate ? style.auth : style.login}>
                {
                    didInvalidate ?
                        (
                            <form onSubmit={(e) => this.loginHandler(e)}>
                                <input placeholder="Nickname" type="text" value={this.state.login} onChange={(e) => this.changeLoginHandler(e)}/>
                                <input placeholder="Password" type="password" value={this.state.password} onChange={(e) => this.changePasswordHandler(e)}/>
                                <input type="submit" value='Войти'/>
                            </form>
                        ):
                        (
                            <div className={style.login__inner}>
                                <span className={style.login__inner__name}>{`${this.props.user.nickname} - ${this.props.user.firstName}`}</span>
                                <input className={style.login__inner__exit} type="button" value="Exit" onClick={(e) => this.logoutHandler(e)}/>
                            </div>
                        )
                }
            </div>
        );
    }
}