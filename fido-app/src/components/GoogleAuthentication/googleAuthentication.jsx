import React from 'react'
import { GoogleLogin } from 'react-google-login';

const GoogleAuthentication=()=> {
    
    const responseGoogle = (response) => {
        console.log(response);
      };
    
  return (
    <GoogleLogin
        clientId="629708202908-keote2keko6umgjncuj8r56n9ip3bi42.apps.googleusercontent.com"
        buttonText="Iniciar sesión con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleAuthentication
