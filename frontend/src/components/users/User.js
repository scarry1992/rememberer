import React, { Component, PropTypes } from 'react'

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

    logoutHandler(e) {
        this.props.actions.toggleValidateUsers();
    }

    render() {
        return (
            <div>
                {
                    this.props.usersById.didInvalidate ?
                        (
                            <form onSubmit={(e) => this.loginHandler(e)}>
                                <input type="text" value={this.state.login} onChange={(e) => this.changeLoginHandler(e)}/>
                                <input type="password" value={this.state.password} onChange={(e) => this.changePasswordHandler(e)}/>
                                <input type="submit"/>
                            </form>
                        ):
                        (
                            <span>
                                {`${this.props.user.nickname} - ${this.props.user.firstName}`}
                                <input type="button" value="Exit" onClick={(e) => this.logoutHandler(e)}/>
                            </span>
                        )
                }
            </div>
        );
    }
}