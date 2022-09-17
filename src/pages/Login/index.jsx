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

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const adduser = async() => {
      
      let email2 = await localStorage.getItem('email', null)
      let pass2 = await localStorage.getItem('password', null)
      console.log("dgsrg", email2, pass2)

      if ( email === email2 && password === pass2) {
        window.location = '/dashboard'
      } else {
        alert("Email or Password is wrong")
      }
      
    }
    
    return (
        <div className='dashboard-content'>
          <Dialog open={true}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={adduser}>submit</Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

export default Login;