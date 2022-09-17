import React, { useState, useEffect } from 'react';

import DashboardHeader from '../../components/DashboardHeader';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { calculateRange, sliceData } from '../../utils/table-pagination';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import { Link } from 'react-router-dom';

function Signup(props) {

    const [email, setEmail] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const adduser = async () => {
        if(email.trim() === '' || fname.trim() === '' || lname.trim() === ''|| username.trim() === ''|| password.trim() === ''|| email.trim() === ''  ) {
        alert('please fill all fields')    
    } else {
        if( password === cpassword) {
            await localStorage.setItem('email', email);
            await localStorage.setItem('fname', fname);
            await localStorage.setItem('lname', lname);
            await localStorage.setItem('username', username);
            await localStorage.setItem('password', password);
            window.location = '/login'
        } else {
            alert('Password and confirm password does not matched')
        }
            
        }
    }
    
    return (
        <div className='dashboard-content'>
          <Dialog open={true}>
                <DialogTitle>Signup</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fname"
                        label="First Name"
                        fullWidth
                        variant="standard"
                        value={fname}
                        onChange={(event) => setfname(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="lname"
                        label="Last Name"
                        fullWidth
                        variant="standard"
                        value={lname}
                        onChange={(event) => setlname(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="username"
                        label="Username"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={(event) => setusername(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="pass"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="cpass"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={cpassword}
                        onChange={(event) => setCPassword(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={adduser}>submit</Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

export default Signup;