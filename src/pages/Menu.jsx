// src/pages/Menu.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

const menuItems = [
  { id: 1, name: 'Cappuccino', price: 149 },
  { id: 2, name: 'Latte', price: 129 },
  { id: 3, name: 'Espresso', price: 99 },
  { id: 1, name: 'French Fries', price: 90 },
  { id: 2, name: 'French Fries (Peri Peri)', price: 110 },
  { id: 3, name: 'Lemon Soda', price: 29 },
  { id: 1, name: 'Mocha', price: 151 },
  { id: 2, name: 'Flat White', price: 139 },
  { id: 3, name: 'Americano', price: 99 },
  { id: 1, name: 'Iced Americano', price: 110 },
  { id: 2, name: 'Cold Coffee', price: 130 },
  { id: 3, name: 'Strawberry Smoothie', price: 150 },
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Menu
      </Typography>
      <Grid container spacing={2}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>₹{item.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu;
