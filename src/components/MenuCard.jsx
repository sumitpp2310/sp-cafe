import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function MenuCard({ item, onAddToCart }) {
  return (
    <Card
      sx={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        },
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h6" fontFamily="Poppins">
          {item.name}
        </Typography>
        <Typography variant="body2">₹{item.price}</Typography>
        <Button
          variant="contained"
          sx={{
            mt: 1,
            backgroundColor: '#6f4e37',
            '&:hover': {
              backgroundColor: '#5b3e2b',
            },
            borderRadius: '10px',
            textTransform: 'none',
          }}
          onClick={() => {
            console.log("Clicked Add to Cart for", item);
            onAddToCart(item);
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
