import React from 'react';
import { Button, Container, Box, Typography } from '@mui/material';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
        <Typography variant="h5" gutterBottom>Login / Sign Up with Google</Typography>
        <Button variant="contained" color="secondary" onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default GoogleLogin;
