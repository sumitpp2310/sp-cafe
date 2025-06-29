import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

const NavBar = () => {
  const { currentUser } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SP Café
        </Typography>

        <Button color="inherit" component={Link} to="/menu">
          Menu
        </Button>

        
        )

        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>

        {!currentUser ? (
          <Button color="inherit" component={Link} to="/login">
            Login / Signup
          </Button>
        ) : (
          <Button color="inherit" onClick={() => auth.signOut()}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
