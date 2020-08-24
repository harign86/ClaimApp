import React from 'react';
import Header from '../common/header.jsx';
import { Link, browserHistory } from "react-router";
import axios from 'axios';
import Footer from '../common/footer.jsx';

class Login extends React.Component {
  constructor(props, context) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { invalidUsername: true, invalidPassword: true, invalidUser: true };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ invalidUsername: true, invalidPassword: true });
    let foundUser = false;
    const formData = {};

    for (const field in this.refs) {
      console.log(field);
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
    if (formData.username == '') {
      this.setState({ invalidUsername: false });
      return;
    }
    if (formData.password == '') {
      this.setState({ invalidPassword: false });
      return;
    }
    axios.get('http://localhost:7001/users/')
      .then(res => {

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].username == formData.username
            && res.data[i].password == formData.password) {
            console.log('matching cred');
            foundUser == true;
            localStorage.setItem('user',  res.data[i].FirstName);
            browserHistory.push({
              pathname: '/dashboard',
            });
          }
        }
        console.log(foundUser);
        if (!foundUser) { this.setState({ invalidUser: false }) }
      }
      )

  }
  render() {
    return (
      <div>
        <Header showNav="false" />
        <content>
          <div id="divLogin" className="login-page">
            <div className="form">
              <form className="login-form" onSubmit={this.handleSubmit}>
                <input ref="username" type="text" id="inusername" placeholder="username" />
                <div id="alertUsername" hidden={this.state.invalidUsername}>
                  <small className="text-danger">
                    Username is required
                        </small>
                </div>
                <input ref="password" type="password" id="inpassword" placeholder="password" />
                <div id="alertPassword" hidden={this.state.invalidPassword}>
                  <small className="text-danger">
                    Password is required
                          </small>
                </div>
                <button type="submit" className="loginButton"  >login</button>
                <div id="alertPassword" hidden={this.state.invalidUser}>
                  <small class="text-danger">
                    Invalid username or password
                          </small>
                </div>
              </form>
            </div>
          </div>
        </content>

      </div>

    );
  }
}

export default Login;   