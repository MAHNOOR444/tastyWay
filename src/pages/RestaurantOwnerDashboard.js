import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantOwner = () => {
  // State for various data
  const [riders, setRiders] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  
  // Fetch data on component mount
  useEffect(() => {
    // Mock data - in real app, you would fetch from API
    setRiders([
      { id: 1, name: 'Rider 1', status: 'Available', phone: '123-456-7890' },
      { id: 2, name: 'Rider 2', status: 'On Delivery', phone: '123-456-7891' }
    ]);
    
    setTransactions([
      { id: 1, amount: 1500, date: '2023-05-01', status: 'Completed' },
      { id: 2, amount: 2000, date: '2023-05-02', status: 'Pending' }
    ]);
    
    setMenuItems([
      { id: 1, name: 'Burger', price: 500, category: 'Fast Food' },
      { id: 2, name: 'Pizza', price: 800, category: 'Fast Food' }
    ]);
    
    setOrders([
      { id: 1, customer: 'Customer 1', items: ['Burger', 'Fries'], total: 700, status: 'Preparing' },
      { id: 2, customer: 'Customer 2', items: ['Pizza'], total: 800, status: 'Delivered' }
    ]);
    
    setRestaurantInfo({
      name: 'My Restaurant',
      address: '123 Food Street, City',
      phone: '123-456-7890',
      rating: 4.5
    });
  }, []);

  return (
    <div style={styles.dashboard}>
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>Restaurant Owner Dashboard</h1>
        <Link to="/add-food-item" style={styles.addFoodBtn}>
          Add Food Item
        </Link>
      </nav>
      
      <div style={styles.content}>
        {/* Restaurant Info Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Restaurant Information</h2>
          <div style={styles.card}>
            <p><strong>Name:</strong> {restaurantInfo.name}</p>
            <p><strong>Address:</strong> {restaurantInfo.address}</p>
            <p><strong>Phone:</strong> {restaurantInfo.phone}</p>
            <p><strong>Rating:</strong> {restaurantInfo.rating}</p>
          </div>
        </div>
        
        {/* Orders Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recent Orders</h2>
          <div style={styles.list}>
            {orders.map(order => (
              <div key={order.id} style={styles.listCard}>
                <p><strong>Order #{order.id}</strong></p>
                <p>Customer: {order.customer}</p>
                <p>Items: {order.items.join(', ')}</p>
                <p>Total: Rs.{order.total}</p>
                <p>Status: {order.status}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Menu Items Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Menu Items</h2>
          <div style={styles.list}>
            {menuItems.map(item => (
              <div key={item.id} style={styles.listCard}>
                <p><strong>{item.name}</strong></p>
                <p>Price: Rs.{item.price}</p>
                <p>Category: {item.category}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Riders Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Available Riders</h2>
          <div style={styles.list}>
            {riders.map(rider => (
              <div key={rider.id} style={styles.listCard}>
                <p><strong>{rider.name}</strong></p>
                <p>Status: {rider.status}</p>
                <p>Phone: {rider.phone}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Transactions Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recent Transactions</h2>
          <div style={styles.list}>
            {transactions.map(transaction => (
              <div key={transaction.id} style={styles.listCard}>
                <p><strong>Transaction #{transaction.id}</strong></p>
                <p>Amount: Rs.{transaction.amount}</p>
                <p>Date: {transaction.date}</p>
                <p>Status: {transaction.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS styles as JavaScript objects
const styles = {
  dashboard: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  navbar: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  navTitle: {
    margin: 0,
    fontSize: '1.5rem'
  },
  addFoodBtn: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  content: {
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  sectionTitle: {
    color: '#2c3e50',
    marginTop: 0,
    marginBottom: '1rem',
    fontSize: '1.2rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '0.5rem'
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '6px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  listCard: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '6px',
    borderLeft: '4px solid #e74c3c'
  }
};

export default RestaurantOwner;