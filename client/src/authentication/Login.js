import React from 'react';
import '../App.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
          <h1>LOGIN!!!</h1>
          <h1>Log in</h1>
            <form>
                <div>
                    <div>Username:</div>
                    <input
                        name="username"
                        placeholder="Username"
                        // onChange={}
                        value={this.state.username}
                    />
                </div>
                <div>
                    <div>Password:</div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        // onChange={}
                        value={this.state.password}
                    />
                </div>
                <button>Log in</button>
            </form>
      </div>
    );
  }
}

export default Login;