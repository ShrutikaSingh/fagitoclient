import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import login_form from '../containers/login_form';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
      <login_form/>
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />

      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </div>
    );
  }
}

export default App;
