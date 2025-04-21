import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaStar, FaClock, FaFilter, FaShoppingCart, FaUser, FaHistory, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const CustomerPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const nearbyRestaurants = [
    {
      id: 1,
      name: "Tasty Bites",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Indian, Chinese",
      rating: 4.5,
      deliveryTime: "30-40 min",
      deliveryFee: "Rs. 50",
      minOrder: "Rs. 300",
      popularItems: ["Butter Chicken", "Hakka Noodles"]
    },
    {
      id: 2,
      name: "Pizza Heaven",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "25-35 min",
      deliveryFee: "Rs. 80",
      minOrder: "Rs. 500",
      popularItems: ["Margherita Pizza", "Garlic Bread"]
    },
    {
      id: 3,
      name: "Burger King",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "American",
      rating: 4.0,
      deliveryTime: "20-30 min",
      deliveryFee: "Free",
      minOrder: "Rs. 400",
      popularItems: ["Whopper", "Chicken Fries"]
    },
    {
      id: 4,
      name: "Sushi World",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "35-45 min",
      deliveryFee: "Rs. 100",
      minOrder: "Rs. 600",
      popularItems: ["California Roll", "Miso Soup"]
    },
    {
      id: 5,
      name: "Rishian",
      image: "https://images.unsplash.com/photo-1628591697740-4378f154b2ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "35-45 min",
      deliveryFee: "Rs. 70",
      minOrder: "Rs. 450",
      popularItems: ["Ramen", "Tempura"]
    },
    {
      id: 6,
      name: "Pasta Palace",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "30-40 min",
      deliveryFee: "Rs. 60",
      minOrder: "Rs. 350",
      popularItems: ["Carbonara", "Lasagna"]
    },
    {
      id: 7,
      name: "Pizza Corner",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Italian",
      rating: 4.4,
      deliveryTime: "25-35 min",
      deliveryFee: "Rs. 75",
      minOrder: "Rs. 400",
      popularItems: ["Pepperoni Pizza", "Garlic Knots"]
    },
    {
      id: 8,
      name: "Sandwich Spot",
      image: "https://plus.unsplash.com/premium_photo-1669687759566-e07cf4e03e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "American",
      rating: 4.1,
      deliveryTime: "15-25 min",
      deliveryFee: "Rs. 40",
      minOrder: "Rs. 200",
      popularItems: ["Club Sandwich", "Chicken Wrap"]
    },
    {
      id: 9,
      name: "Beverage Hub",
      image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      cuisine: "Beverages",
      rating: 4.2,
      deliveryTime: "20-30 min",
      deliveryFee: "Rs. 30",
      minOrder: "Rs. 150",
      popularItems: ["Fresh Juices", "Smoothies"]
    },
  ];

  const filteredRestaurants = nearbyRestaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                         restaurant.cuisine.toLowerCase().includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const handleRestaurantClick = (id) => {
    navigate(`/hotel/${id}`);
  };
  

  const cuisineTypes = [...new Set(nearbyRestaurants.map(r => r.cuisine.split(', ')[0]))];

  return (
    <div style={{
      padding: '100px 20px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh',
      display: 'flex'
    }}>
      {/* Main Content Area (80% width) */}
      <div style={{ flex: '0 0 80%', paddingRight: '30px' }}>
        {/* Customer Greeting and Quick Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <div>
            <h1 style={{
              color: '#2c3e50',
              fontSize: '28px',
              marginBottom: '5px'
            }}>Hello, Food Lover!</h1>
            <p style={{
              color: '#7f8c8d',
              fontSize: '16px'
            }}>What would you like to order today?</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px 15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <FaHistory style={{ color: '#3498db' }} />
              <span>History</span>
            </button>
            <button style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px 15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <FaHeart style={{ color: '#e74c3c' }} />
              <span>Favorites</span>
            </button>
          </div>
        </div>

        {/* Cuisine Filters */}
        <div style={{ marginBottom: '25px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <button 
            onClick={() => setActiveFilter('all')}
            style={{
              backgroundColor: activeFilter === 'all' ? '#27ae60' : '#ecf0f1',
              color: activeFilter === 'all' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 20px',
              marginRight: '10px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            All Cuisines
          </button>
          {cuisineTypes.map(cuisine => (
            <button 
              key={cuisine}
              onClick={() => setActiveFilter(cuisine.toLowerCase())}
              style={{
                backgroundColor: activeFilter === cuisine.toLowerCase() ? '#27ae60' : '#ecf0f1',
                color: activeFilter === cuisine.toLowerCase() ? 'white' : '#2c3e50',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 20px',
                marginRight: '10px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {cuisine}
            </button>
          ))}
        </div>

        {/* Restaurant grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px',
          marginTop: '20px'
        }}>
          {filteredRestaurants.map(restaurant => (
            <div 
              key={restaurant.id} 
              style={{
                border: '1px solid #eee',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }
              }}
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{
                    margin: '0 0 8px',
                    color: '#2c3e50',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>{restaurant.name}</h3>
                  <span style={{
                    backgroundColor: '#f8f9fa',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.9rem'
                  }}>
                    <FaStar style={{ color: '#f1c40f' }} /> {restaurant.rating}
                  </span>
                </div>
                <p style={{
                  color: '#7f8c8d',
                  margin: '0 0 12px',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <FaMapMarkerAlt style={{ fontSize: '0.8rem' }} /> {restaurant.cuisine}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <span style={{
                    color: '#27ae60',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    🚚 {restaurant.deliveryFee}
                  </span>
                  <span style={{
                    color: '#7f8c8d',
                    fontSize: '0.85rem'
                  }}>
                    Min: {restaurant.minOrder}
                  </span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#7f8c8d',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <FaClock style={{ fontSize: '0.8rem' }} /> {restaurant.deliveryTime}
                  </span>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#3498db',
                    backgroundColor: '#ebf5fb',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}>
                    Popular: {restaurant.popularItems[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar with Search (20% width) */}
      <div style={{ flex: '0 0 20%' }}>
        {/* Search Section */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          marginBottom: '25px',
          position: 'sticky',
          top: '120px'
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '18px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FaSearch /> Search
          </h3>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search restaurants..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '12px 15px 12px 40px',
                width: '100%',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                ':focus': {
                  borderColor: '#27ae60',
                  boxShadow: '0 0 0 3px rgba(39, 174, 96, 0.1)'
                }
              }}
            />
            <FaSearch style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#7f8c8d'
            }} />
          </div>
          
          <div style={{ marginTop: '15px' }}>
            <button style={{
              backgroundColor: '#f8f9fa',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#ecf0f1'
              }
            }}>
              <FaFilter style={{ color: '#7f8c8d' }} />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>

        {/* Quick Cart Summary */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          marginBottom: '25px'
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '18px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FaShoppingCart /> Your Cart
          </h3>
          <p style={{ color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '15px' }}>
            Add items to get started
          </p>
          <button style={{
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            width: '100%',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#219653'
            }
          }}>
            View Cart
          </button>
        </div>

        {/* Customer Profile Quick Links */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '18px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FaUser /> Your Account
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#" style={{
              color: '#3498db',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              ':hover': {
                color: '#2980b9',
                textDecoration: 'underline'
              }
            }}>Order History</a>
            <a href="#" style={{
              color: '#3498db',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              ':hover': {
                color: '#2980b9',
                textDecoration: 'underline'
              }
            }}>Saved Addresses</a>
            <a href="#" style={{
              color: '#3498db',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              ':hover': {
                color: '#2980b9',
                textDecoration: 'underline'
              }
            }}>Payment Methods</a>
            <a href="#" style={{
              color: '#3498db',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              ':hover': {
                color: '#2980b9',
                textDecoration: 'underline'
              }
            }}>Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;