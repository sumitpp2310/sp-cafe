import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '100px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Continue with Google
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Sign In with Google
      </Button>
    </Container>
  );
};

export default GoogleLogin;
