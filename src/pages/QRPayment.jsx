// src/pages/QRPayment.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

const QRPayment = () => {
  const navigate = useNavigate();

  const handlePaymentComplete = () => {
    alert('✅ Payment Completed. Thank you!');
    navigate('/'); // Redirect to homepage
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Scan & Pay
        </Typography>

        {/* Dummy QR Image */}
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=sumit@upi&pn=SPCafe&am=1"
          alt="Dummy QR"
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />

        <Typography variant="body1" gutterBottom>
          UPI ID: <strong>sumit@upi</strong> <br />
          
        </Typography>

        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          onClick={handlePaymentComplete}
        >
          Payment Completed
        </Button>
      </Box>
    </Container>
  );
};

export default QRPayment;
