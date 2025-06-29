import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy
} from 'firebase/firestore';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';

const OrdersPage = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    if (!currentUser) return;

    try {
      const q = query(
        collection(db, 'orders'),
        where('userId', '==', currentUser.uid),
        orderBy('timestamp', 'desc')
      );

      const snapshot = await getDocs(q);
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [currentUser]);

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Your Orders
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : orders.length === 0 ? (
          <Typography>No orders found.</Typography>
        ) : (
          <List>
            {orders.map((order) => (
              <Box key={order.id} mb={2}>
                <ListItem>
                  <ListItemText
                    primary={`Order #${order.id}`}
                    secondary={`Total: ₹${order.totalAmount?.toFixed(2)}`}
                  />
                </ListItem>
                <List component="div" disablePadding sx={{ pl: 2 }}>
                  {order.cartItems.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemText
                        primary={`${item.name} x${item.quantity}`}
                        secondary={`₹${item.price * item.quantity}`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default OrdersPage;
