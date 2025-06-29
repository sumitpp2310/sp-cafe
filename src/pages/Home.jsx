import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
      >
        <Typography variant="h3" gutterBottom>
          Welcome to SP Café ☕
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Enjoy delicious coffee and snacks made with love 💛
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/menu"
          sx={{ mt: 4 }}
        >
          View Menu
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
