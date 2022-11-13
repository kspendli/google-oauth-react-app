import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const clientId = '202597252720-a6d1o9vn2du7p5nfjrq20anm2vii1kop.apps.googleusercontent.com';

export default function UserProfile() {

    const [user, setUser] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const loginSuccess = (res) => {
        console.log('--- Login success ---');
        setUser(res);
    };

    const logoutSuccess = () => {
        console.log('--- Logout success ---');
        setUser(null);
    };

    const loginFailure = (err) => {
        console.log('--- Login Failed ---', err);
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {user==null && 
                    <MenuItem onClick={handleClose}>
                     <GoogleLogin
                         clientId={clientId}
                         buttonText="Sign in with Google"
                         onSuccess={loginSuccess}
                         onFailure={loginFailure}
                         cookiePolicy={'single_host_origin'}
                         isSignedIn={true}
                     />
                    </MenuItem>
                }
               
               {user!=null && 
                <MenuItem onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout with Google"
                        onLogoutSuccess={logoutSuccess}
                    />
                </MenuItem>
               }
                
            </Menu>
        </div>
    );
}