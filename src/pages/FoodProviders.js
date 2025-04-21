import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodProviderDashboard = () => {
  const navigate = useNavigate();
  
  // Sample data
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Ali Khan', items: 'Burger x2, Fries x1', total: 1200, status: 'Preparing', rider: 'Rider #45' },
    { id: 2, customer: 'Sara Ahmed', items: 'Pizza x1, Drink x2', total: 1500, status: 'On the way', rider: 'Rider #12' },
  ]);

  const [riders] = useState([
    { id: 45, name: 'Ahmed Raza', deliveries: 24, rating: 4.8 },
    { id: 12, name: 'Bilal Khan', deliveries: 18, rating: 4.5 },
  ]);

  const [menuItems] = useState([
    { id: 1, name: 'Burger', price: 500, category: 'Fast Food' },
    { id: 2, name: 'Pizza', price: 800, category: 'Italian' },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const navigateToAddFood = () => {
    navigate('/add-food');
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Food Provider Dashboard</h1>
      
      <button 
        className="add-food-button"
        onClick={navigateToAddFood}
      >
        + Add New Food Item
      </button>

      {/* Orders Section */}
      <div className="dashboard-section">
        <h2>Current Orders</h2>
        <div className="orders-grid">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span>Order #{order.id}</span>
                <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                  {order.status}
                </span>
              </div>
              <p><strong>Customer:</strong> {order.customer}</p>
              <p><strong>Items:</strong> {order.items}</p>
              <p><strong>Total:</strong> Rs. {order.total}</p>
              <p><strong>Rider:</strong> {order.rider}</p>
              {order.status === 'Preparing' && (
                <button 
                  className="action-button"
                  onClick={() => updateOrderStatus(order.id, 'On the way')}
                >
                  Mark as On the way
                </button>
              )}
              {order.status === 'On the way' && (
                <button 
                  className="action-button"
                  onClick={() => updateOrderStatus(order.id, 'Delivered')}
                >
                  Mark as Delivered
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Riders Section */}
      <div className="dashboard-section">
        <h2>Rider Information</h2>
        <table className="riders-table">
          <thead>
            <tr>
              <th>Rider ID</th>
              <th>Name</th>
              <th>Deliveries</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {riders.map(rider => (
              <tr key={rider.id}>
                <td>#{rider.id}</td>
                <td>{rider.name}</td>
                <td>{rider.deliveries}</td>
                <td>{rider.rating} ★</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Menu Section */}
      <div className="dashboard-section">
        <h2>Menu Items</h2>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <h3>{item.name}</h3>
              <p>Rs. {item.price}</p>
              <p className="menu-category">{item.category}</p>
              <div className="menu-actions">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .dashboard-header {
          color: #333;
          text-align: center;
          margin-bottom: 30px;
        }
        .add-food-button {
          background-color: #ff6b6b;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          display: block;
          margin: 0 auto 30px;
          font-size: 16px;
        }
        .dashboard-section {
          margin: 40px 0;
        }
        .dashboard-section h2 {
          color: #444;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #eee;
        }
        .orders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .order-card {
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 15px;
          background: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .status {
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 14px;
        }
        .status.preparing {
          background: #fff3cd;
          color: #856404;
        }
        .status.on-the-way {
          background: #cce5ff;
          color: #004085;
        }
        .status.delivered {
          background: #d4edda;
          color: #155724;
        }
        .action-button {
          margin-top: 10px;
          padding: 8px 15px;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
        }
        .riders-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .riders-table th, .riders-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .riders-table th {
          background: #f8f9fa;
        }
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .menu-card {
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 15px;
          background: white;
        }
        .menu-card h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        .menu-category {
          color: #666;
          font-size: 14px;
          margin: 5px 0;
        }
        .menu-actions {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }
        .edit-button {
          padding: 5px 10px;
          background: #4e9af1;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .delete-button {
          padding: 5px 10px;
          background: #f44336;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FoodProviderDashboard;