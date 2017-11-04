import React from 'react';
import { Dialog, TextField, IconButton, Avatar, FlatButton } from 'material-ui';
import { orange500 } from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500,
  },
  customContentStyle: {
    width: '70%',
    maxWidth: 'none',
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      errorTextUserName: '',
      errorTextPassword: '',
      username: '',
      password: '',
    };
  }


  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    // handle signIn
    this.setState({ open: false });
  }

  handleSignIn(e) {
    e.preventDefault();

    const userName = this.refs.username.getValue();

    // this.validate();

    if (this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({ errorTextUserName: 'Please enter user name' });
      this.setState({ errorTextPassword: 'Please enter password' });
      return;
    } else if (this.state.username.length === 0) {
      this.setState({ errorTextUserName: 'Please enter user name' });
      return;
    } else if (this.state.password.length === 0) {
      this.setState({ errorTextPassword: 'Please enter password' });
      return
    }
    // handle signIn
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Sign In"
        primary
        keyboardFocused
        onClick={this.handleSignIn.bind(this)}
      />,
    ];

    return (<div style={{
            width: '40px', height: '38px', marginRight: '3rem', float: 'right', padding: '0px',
}}
    >
      <IconButton onClick={this.handleOpen.bind(this)} style={{width: '40px', height: '38px', padding:'0px'}}>
        <Avatar
          src={require('../../assets/images/login.png')}
          size={30}
        />
      </IconButton>
      <Dialog
        title="Please Sign In"
        actions={actions}
        modal
        open={this.state.open}
        onRequestClose={this.handleClose.bind(this)}
        contentStyle={styles.customContentStyle}
      >
        <form >
          <div>
            <TextField
              ref="username"
              name="username"
              hintText="Enter User Name"
              errorText={this.state.errorTextUserName}
              required
              type="text"
            />
            <br />
            <TextField
              ref="password"
              name="password"
              hintText="Password"
              errorText={this.state.errorTextPassword}
              required
              type="password"
            />
            <br />
          </div>
        </form>
      </Dialog>
            </div>);
  }
}

export default Login;

