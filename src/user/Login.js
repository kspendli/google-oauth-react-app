import { GoogleLogin } from 'react-google-login';

const clientId = '202597252720-a6d1o9vn2du7p5nfjrq20anm2vii1kop.apps.googleusercontent.com';

function Login(){

    const onSuccess = (res) => {
        console.log('success:', res);
        document.getElementById("signIn").hidden = true;
    };

    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <div id="signIn">
            <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
        </div>
  );

}

export default Login;