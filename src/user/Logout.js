import { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '202597252720-a6d1o9vn2du7p5nfjrq20anm2vii1kop.apps.googleusercontent.com';

function Logout(){


    const onSuccess = () => {
        console.log('Logout success:');
        document.getElementById("signIn").hidden = false;
    };

    return (
        <div id="singOut">
            <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout with Google"
                    onLogoutSuccess={onSuccess}
                />
        </div>
  );

}

export default Logout;