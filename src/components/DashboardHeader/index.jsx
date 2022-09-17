import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function DashboardHeader ({ btnText, onClick }) {

    const name = localStorage.getItem('username', '')
    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

            <div className='dashbord-header-right'>
                <text className='nametext'>Hii {name}</text>
                <Link to="/login">Log Out</Link>
            </div>
        </div>
    )
}

export default DashboardHeader;