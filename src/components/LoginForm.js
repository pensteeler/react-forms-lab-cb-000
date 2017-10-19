import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: ""
    };
  }

  pass = (event) => {
    this.setState({password:event.target.value})
  }

  user = (event) => {
    this.setState({username:event.target.value})
  }

  submit = (event) => {
    event.preventDefault()
    if(this.state.username.legnth > 0 && this.state.password.legnth > 0) { this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.user}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.pass}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
