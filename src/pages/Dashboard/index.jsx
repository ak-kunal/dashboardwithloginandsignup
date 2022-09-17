import React, { useState, useEffect } from 'react';

import DashboardHeader from '../../components/DashboardHeader';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Dashboard() {
    const [Id, setId] = useState('');
    const [fname, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [lname, setLName] = useState('');
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([1, 2]);
    const [open, setOpen] = React.useState(false);
    const [openedit, setOpenedit] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    const handleClickOpenedit = () => {
        setOpen(true);
    };

    const handleCloseedit = () => {
        setOpen(false);
    };



    useEffect(() => {
        getusers(page)
    }, []);

    const getusers = (pagenum) => {
        fetch("https://reqres.in/api/users/?page=" + pagenum)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data.data)
            })
    }

    const Edituser = () => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, first_name: fname, last_name: lname })
        };
        fetch('https://reqres.in/api/users/' + Id, requestOptions)
            .then(response => response.json())
            .then(data => { 
                console.log("user", data)
                handleClose()
                setEmail('')
                setFName('')
                setLName('')
                window.alert('User updated successfuly')
            });
    }

    const adduser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, first_name: fname, last_name: lname })
        };
        fetch('https://reqres.in/api/users', requestOptions)
            .then(response => response.json())
            .then(data => { 
                console.log("user", data)
                handleClose()
                setEmail('')
                setFName('')
                setLName('')
                window.alert('User created successfuly')
            });
    }

    const openeditmodal = (data) => {
        console.log(data)
        setEmail(data.email)
        setFName(data.first_name)
        setLName(data.last_name)
        handleClickOpenedit()
    }

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        getusers(new_page)
    }

    return (
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="Add User"
                onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add User</DialogTitle>
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
                        id="fname"
                        label="First Name"
                        fullWidth
                        variant="standard"
                        value={fname}
                        onChange={(event) => setFName(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="lname"
                        label="Last Name"
                        fullWidth
                        variant="standard"
                        value={lname}
                        onChange={(event) => setLName(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={adduser}>submit</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openedit} onClose={handleCloseedit}>
                <DialogTitle>Add User</DialogTitle>
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
                        id="fname"
                        label="First Name"
                        fullWidth
                        variant="standard"
                        value={fname}
                        onChange={(event) => setFName(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="lname"
                        label="Last Name"
                        fullWidth
                        variant="standard"
                        value={lname}
                        onChange={(event) => setLName(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseedit}>Cancel</Button>
                    <Button onClick={Edituser}>submit</Button>
                </DialogActions>
            </Dialog>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>User List</h2>
                    {/* <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div> */}
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </thead>

                    {users.length !== 0 ?
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td><span>{user.id}</span></td>
                                    <td><span>{user.email}</span></td>
                                    <td><span>{user.first_name}</span></td>
                                    <td><span>{user.last_name}</span></td>
                                    <td>
                                        <div>
                                            <img
                                                src={user.avatar}
                                                className='dashboard-content-avatar'
                                                alt={user.first_name + ' ' + user.last_name} />
                                        </div>
                                    </td>
                                    <td>
                                        <button className='dashbord-header-btn' onClick={() => openeditmodal(user)}>Edit</button>
                                        <button className='dashbord-header-btn' onClick={() => console.log("delete")}>Delete</button>
                                        {/* <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClickOpen}
                                        >
                                            Dashboard
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={openeditmodal(user)}>Edit</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                        </Menu> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        : null}
                </table>

                {users.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                {item}
                            </span>
                        ))}
                    </div>
                    :
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Dashboard;