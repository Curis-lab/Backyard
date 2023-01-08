import React from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

const clientID = "19438330366-uuf3sfgfh7sq1o7ne9mrivc0heu1ocaf.apps.googleusercontent.com";

function Google_api() {

    const onSuccess = (res) =>{
        console.log("LOGIN SUCCESS ! CURRENT USERS: ", res.profileObj);
    }

    const onFailure = (res) =>{
        console.log('LOGIN FAILED! res:', res);
    }

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId: clientID,
                scope:""
            })
        };
        gapi.load('client:auth2', start);
    })

  return (
    <div id='signInButton'>
      <GoogleLogin
        clientId = {clientID}
        buttonText =  "Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Google_api
