import logo from './logo.svg';
import './App.css';
import { gapi } from 'gapi-script';

import Login from './user/Login';
import Logout from './user/Logout';
import { useEffect } from 'react';
import PrimarySearchAppBar from './home/PrimarySearchAppBar';


const clientId = '202597252720-a6d1o9vn2du7p5nfjrq20anm2vii1kop.apps.googleusercontent.com';

function App() {

  useEffect(() => {

    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
    </div>
  );
}

export default App;
