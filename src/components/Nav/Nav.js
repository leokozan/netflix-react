import React, { useState } from 'react'
import './Nav.css'
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Nav () {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
    const avatar = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleLogoute = async () =>{
        try {
            await fetch('http://localhost:5000/logout', { method: 'POST' }); 
        } catch (err) {
            console.error('Failed to logout:', err);
        }
        localStorage.removeItem('sessionID');
        navigate('/telaLogin');
      };
    return (
    <div className="nav-container">
      <img className="nav-logo" src={logo} alt="NetFlix" />
      <img
        className="nav-avatar"
        src={avatar}
        alt="CAI-2023"
        onClick={handleAvatarClick}
        style={{ cursor: 'pointer' }} 
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogoute}>Logout</MenuItem>
      </Menu>
    </div>
    )

}

export default Nav;