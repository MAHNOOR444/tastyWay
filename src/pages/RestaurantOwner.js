import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantOwner = () => {
  const navigate = useNavigate();

  // 8 Menu items with high-quality images
  const menuItems = [
    { id: 1, name: 'Chicken Biryani', price: 350, image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Mutton Karahi', price: 1200, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Pepperoni Pizza', price: 950, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Zinger Burger', price: 450, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'White Pasta', price: 650, image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Caesar Salad', price: 550, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60' },
    { id: 7, name: 'Chicken Tikka', price: 750, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60' },
    { id: 8, name: 'Beef Steak', price: 1500, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&auto=format&fit=crop&q=60' },
  ];

  // 6 Riders with profile images
  const riders = [
    { id: 1, name: 'Ali Khan', contact: '0300-1234567', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Ahmed Raza', contact: '0312-7654321', image: 'https://randomuser.me/api/portraits/men/44.jpg' },
    { id: 3, name: 'Usman Malik', contact: '0333-9876543', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { id: 4, name: 'Bilal Ahmed', contact: '0345-1122334', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
    { id: 5, name: 'Farhan Saeed', contact: '0331-9988776', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { id: 6, name: 'Kamran Ali', contact: '0322-5544332', image: 'https://randomuser.me/api/portraits/men/88.jpg' },
  ];

  // Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 20px 40px',
      fontFamily: 'Arial, sans-serif',
      position: 'relative'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap'
    },
    addButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px 25px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      marginLeft: 'auto' // This pushes button to right
    },
    sectionTitle: {
      fontSize: '24px',
      margin: '30px 0',
      color: '#333',
      borderBottom: '2px solid #4CAF50',
      paddingBottom: '8px',
      width: 'fit-content'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '25px',
      marginBottom: '50px'
    },
    menuItem: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    menuImage: {
      width: '100%',
      height: '160px',
      objectFit: 'cover'
    },
    menuContent: {
      padding: '15px'
    },
    riderGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      marginBottom: '50px'
    },
    riderCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '15px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    riderImage: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #4CAF50'
    },
    infoSection: {
      backgroundColor: '#f5f5f5',
      padding: '30px',
      borderRadius: '8px',
      marginTop: '40px'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginTop: '20px'
    },
    infoCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={{ fontSize: '28px', color: '#4CAF50', marginBottom: '5px' }}>Delicious Restaurant</h1>
          <p style={{ color: '#666' }}>Authentic flavors, premium quality</p>
        </div>
        <button 
          style={styles.addButton}
          onClick={() => navigate('/add-food-item')}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          + Add Food Item
        </button>
      </div>

      {/* Menu Section - 8 items in 4x2 grid */}
      <h2 style={styles.sectionTitle}>Our Menu</h2>
      <div style={styles.menuGrid}>
        {menuItems.map(item => (
          <div key={item.id} style={styles.menuItem}>
            <img src={item.image} alt={item.name} style={styles.menuImage} />
            <div style={styles.menuContent}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{item.name}</h3>
              <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>Rs. {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Riders Section - 6 riders in 3x2 grid */}
      <h2 style={styles.sectionTitle}>Our Delivery Team</h2>
      <div style={styles.riderGrid}>
        {riders.map(rider => (
          <div key={rider.id} style={styles.riderCard}>
            <img src={rider.image} alt={rider.name} style={styles.riderImage} />
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{rider.name}</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>{rider.contact}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant Info Section */}
      <div style={styles.infoSection}>
        <h2 style={{ ...styles.sectionTitle, borderBottom: 'none', marginTop: '0' }}>Restaurant Information</h2>
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <h3 style={{ color: '#4CAF50', marginTop: '0' }}>Location</h3>
            <p>123 Food Street, Karachi</p>
            <p>Near Sea View</p>
          </div>
          <div style={styles.infoCard}>
            <h3 style={{ color: '#4CAF50', marginTop: '0' }}>Contact</h3>
            <p>Phone: 021-1234567</p>
            <p>Email: info@delicious.com</p>
          </div>
          <div style={styles.infoCard}>
            <h3 style={{ color: '#4CAF50', marginTop: '0' }}>Hours</h3>
            <p>Daily: 11AM - 11PM</p>
            <p>Delivery until 11:30PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOwner;