// src/pages/CartPage.jsx

import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Divider,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (!currentUser) {
      alert('Please login to place order.');
      return;
    }

    const order = {
      userId: currentUser.uid,
      cartItems: cart,
      totalAmount,
      timestamp: Timestamp.now(),
      status: 'unpaid',
    };

    try {
      await addDoc(collection(db, 'orders'), order);
      clearCart();
      navigate('/qr-payment');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom mt={4}>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <Box key={item.id}>
                <ListItem
                  secondaryAction={
                    <>
                      <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemText
                    primary={item.name}
                    secondary={`₹${item.price} x ${item.quantity}`}
                  />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>

          <Typography variant="h6" mt={2}>
            Total: ₹{totalAmount.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handlePlaceOrder}
          >
            Pay Now
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
