import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantOwnerDashboard = () => {
  const navigate = useNavigate();
  
  // Sample data
  const [orders, setOrders] = useState([
    { 
      id: 101, 
      customer: 'Ali Khan', 
      items: [
        { name: 'Chicken Burger', quantity: 2, price: 500 },
        { name: 'French Fries', quantity: 1, price: 200 }
      ], 
      total: 1200, 
      status: 'Preparing', 
      rider: 'Rider #45 (Ahmed)', 
      time: '10:30 AM',
      address: 'House 12, Street 5, Lahore'
    },
    { 
      id: 102, 
      customer: 'Sara Ahmed', 
      items: [
        { name: 'Margherita Pizza', quantity: 1, price: 800 },
        { name: 'Coke', quantity: 2, price: 150 }
      ],
      total: 1100, 
      status: 'On the way', 
      rider: 'Rider #12 (Bilal)', 
      time: '11:45 AM',
      address: 'Flat 303, Gulberg, Lahore'
    },
  ]);

  const [riders] = useState([
    { id: 45, name: 'Ahmed Raza', phone: '0300-1234567', deliveries: 24, rating: 4.8, vehicle: 'Bike' },
    { id: 12, name: 'Bilal Khan', phone: '0300-7654321', deliveries: 18, rating: 4.5, vehicle: 'Bike' },
  ]);

  const [menuItems] = useState([
    { id: 1, name: 'Chicken Burger', price: 500, category: 'Fast Food', available: true, description: 'Juicy chicken patty with fresh veggies' },
    { id: 2, name: 'Margherita Pizza', price: 800, category: 'Italian', available: true, description: 'Classic pizza with tomato and mozzarella' },
    { id: 3, name: 'Chicken Biryani', price: 600, category: 'Pakistani', available: false, description: 'Fragrant rice with spicy chicken' },
    { id: 4, name: 'Chicken Karahi', price: 750, category: 'Pakistani', available: true, description: 'Spicy chicken curry cooked in wok' },
    { id: 5, name: 'Caesar Salad', price: 450, category: 'Healthy', available: true, description: 'Fresh greens with Caesar dressing' },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="dashboard-container">
      {/* Empty space to account for navbar */}
      <div style={{ height: '80px' }}></div>
      
      <div className="dashboard-content">
        <div className="header-section">
          <h1>Restaurant Management Dashboard</h1>
          <button 
            className="add-food-button"
            onClick={() => navigate('/add-food')}
          >
            + Add New Menu Item
          </button>
        </div>

        {/* Orders Section */}
        <section className="orders-section">
          <h2>📋 Current Orders</h2>
          <div className="orders-grid">
            {orders.map(order => (
              <div key={order.id} className={`order-card ${order.status.toLowerCase().replace(' ', '-')}`}>
                <div className="order-header">
                  <span>Order #{order.id} • {order.time}</span>
                  <span className="status-badge">{order.status}</span>
                </div>
                
                <div className="order-details">
                  <div className="customer-info">
                    <h3>{order.customer}</h3>
                    <p>📍 {order.address}</p>
                  </div>
                  
                  <div className="items-list">
                    {order.items.map((item, index) => (
                      <div key={index} className="item-row">
                        <span>{item.quantity}x {item.name}</span>
                        <span>Rs. {item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-footer">
                    <div className="rider-info">
                      <span>🚴 {order.rider}</span>
                    </div>
                    <div className="total-amount">
                      <span>Total: Rs. {order.total}</span>
                    </div>
                  </div>
                </div>
                
                <div className="action-buttons">
                  {order.status === 'Preparing' && (
                    <button onClick={() => updateOrderStatus(order.id, 'On the way')}>
                      🚚 Dispatch Order
                    </button>
                  )}
                  {order.status === 'On the way' && (
                    <button onClick={() => updateOrderStatus(order.id, 'Delivered')}>
                      ✅ Mark as Delivered
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Riders Section */}
        <section className="riders-section">
          <h2>🚴 Rider Team</h2>
          <div className="riders-grid">
            {riders.map(rider => (
              <div key={rider.id} className="rider-card">
                <div className="rider-profile">
                  <div className="avatar">👨</div>
                  <div className="rider-meta">
                    <h3>{rider.name}</h3>
                    <p>📱 {rider.phone}</p>
                  </div>
                </div>
                <div className="rider-stats">
                  <div className="stat-item">
                    <span className="stat-label">Deliveries</span>
                    <span className="stat-value">{rider.deliveries}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Rating</span>
                    <span className="stat-value">⭐ {rider.rating}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Vehicle</span>
                    <span className="stat-value">{rider.vehicle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu-section">
          <h2>🍽️ Menu Items</h2>
          <div className="menu-grid">
            {menuItems.map(item => (
              <div key={item.id} className={`menu-card ${item.available ? '' : 'out-of-stock'}`}>
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span>Rs. {item.price}</span>
                </div>
                <p className="category">{item.category}</p>
                <p className="description">{item.description}</p>
                <div className="availability">
                  {item.available ? (
                    <span className="available">✅ Available</span>
                  ) : (
                    <span className="not-available">❌ Out of Stock</span>
                  )}
                </div>
                <div className="item-actions">
                  <button className="edit-btn">✏️ Edit</button>
                  <button className="delete-btn">🗑️ Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .dashboard-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
        }
        .dashboard-content {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .header-section h1 {
          color: #2c3e50;
          font-size: 28px;
          margin: 0;
        }
        .add-food-button {
          background-color: #ff6b6b;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 16px;
          transition: all 0.3s;
        }
        .add-food-button:hover {
          background-color: #e55a5a;
          transform: translateY(-2px);
        }
        section {
          margin-bottom: 40px;
        }
        section h2 {
          color: #34495e;
          font-size: 24px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #eee;
        }
        .orders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }
        .order-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        .order-card.preparing {
          border-left: 4px solid #f39c12;
        }
        .order-card.on-the-way {
          border-left: 4px solid #3498db;
        }
        .order-card.delivered {
          border-left: 4px solid #2ecc71;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 14px;
          color: #7f8c8d;
        }
        .status-badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }
        .preparing .status-badge {
          background: #fff3cd;
          color: #856404;
        }
        .on-the-way .status-badge {
          background: #d1ecf1;
          color: #0c5460;
        }
        .delivered .status-badge {
          background: #d4edda;
          color: #155724;
        }
        .customer-info h3 {
          margin: 0 0 5px 0;
          color: #2c3e50;
        }
        .customer-info p {
          margin: 0 0 15px 0;
          color: #7f8c8d;
          font-size: 14px;
        }
        .items-list {
          margin-bottom: 15px;
        }
        .item-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px dashed #eee;
        }
        .order-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          padding-top: 10px;
          border-top: 1px solid #eee;
        }
        .rider-info {
          font-size: 14px;
        }
        .total-amount {
          font-weight: bold;
          color: #2c3e50;
        }
        .action-buttons {
          margin-top: 15px;
        }
        .action-buttons button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s;
        }
        .preparing .action-buttons button {
          background: #f39c12;
          color: white;
        }
        .on-the-way .action-buttons button {
          background: #3498db;
          color: white;
        }
        .riders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .rider-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        .rider-profile {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .avatar {
          font-size: 40px;
          margin-right: 15px;
        }
        .rider-meta h3 {
          margin: 0 0 5px 0;
          color: #2c3e50;
        }
        .rider-meta p {
          margin: 0;
          color: #7f8c8d;
          font-size: 14px;
        }
        .rider-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        .stat-item {
          text-align: center;
        }
        .stat-label {
          display: block;
          font-size: 12px;
          color: #7f8c8d;
        }
        .stat-value {
          display: block;
          font-weight: bold;
          color: #2c3e50;
        }
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .menu-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        .menu-card.out-of-stock {
          opacity: 0.7;
        }
        .menu-item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .menu-item-header h3 {
          margin: 0;
          color: #2c3e50;
        }
        .menu-item-header span {
          font-weight: bold;
          color: #ff6b6b;
        }
        .category {
          color: #7f8c8d;
          margin: 5px 0;
          font-size: 14px;
        }
        .description {
          color: #34495e;
          font-size: 14px;
          margin: 10px 0;
        }
        .availability {
          margin: 15px 0 10px;
          font-size: 14px;
        }
        .available {
          color: #2ecc71;
        }
        .not-available {
          color: #e74c3c;
        }
        .item-actions {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }
        .edit-btn, .delete-btn {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }
        .edit-btn {
          background: #4e9af1;
          color: white;
        }
        .delete-btn {
          background: #f44336;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default RestaurantOwnerDashboard;