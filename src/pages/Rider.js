import React, { useState } from 'react';

const Rider = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [deliveries, setDeliveries] = useState([
    { id: 1, restaurant: 'Tasty Bites', customer: 'John Smith', status: 'Pending', address: '123 Main St', amount: '$24.50', route: 'Route A' },
    { id: 2, restaurant: 'Pizza Heaven', customer: 'Sarah Johnson', status: 'In Progress', address: '456 Oak Ave', amount: '$18.75', route: 'Route B' },
    { id: 3, restaurant: 'Burger King', customer: 'Mike Brown', status: 'Pending', address: '789 Pine Rd', amount: '$15.20', route: 'Route C' },
  ]);
  
  const [availableRoutes, setAvailableRoutes] = useState([
    { id: 1, name: 'Downtown Loop', distance: '8 km', estimatedTime: '45 min', deliveries: 5 },
    { id: 2, name: 'University District', distance: '12 km', estimatedTime: '60 min', deliveries: 8 },
    { id: 3, name: 'Suburban Route', distance: '15 km', estimatedTime: '75 min', deliveries: 6 },
  ]);

  const [riderStats] = useState({
    totalDeliveries: 127,
    completedToday: 8,
    earningsToday: '$86.50',
    rating: 4.8,
    onlineStatus: true
  });

  const handleStatusChange = (id, newStatus) => {
    setDeliveries(deliveries.map(delivery => 
      delivery.id === id ? {...delivery, status: newStatus} : delivery
    ));
  };

  const acceptRoute = (routeId) => {
    alert(`Route ${routeId} accepted!`);
    setAvailableRoutes(availableRoutes.filter(route => route.id !== routeId));
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh',
      paddingTop: '80px' // Added space for navbar
    }}>
      {/* Main Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        {/* Header with Online Status */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          marginBottom: '25px'
        }}>
          <div>
            <h1 style={{ 
              margin: 0,
              color: '#2c3e50',
              fontSize: '28px',
              fontWeight: '600'
            }}>
              Rider Dashboard
            </h1>
            <p style={{ 
              margin: '5px 0 0',
              color: '#7f8c8d',
              fontSize: '14px'
            }}>
              Welcome back, John Doe
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: riderStats.onlineStatus ? '#e3fcef' : '#ffecec',
              padding: '8px 15px',
              borderRadius: '20px'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: riderStats.onlineStatus ? '#28a745' : '#dc3545',
                marginRight: '8px'
              }}></div>
              <span style={{
                color: riderStats.onlineStatus ? '#28a745' : '#dc3545',
                fontWeight: '500'
              }}>
                {riderStats.onlineStatus ? 'Online' : 'Offline'}
              </span>
            </div>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: '#3498db',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              JD
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '25px'
        }}>
          {Object.entries(riderStats).filter(([key]) => key !== 'onlineStatus').map(([key, value]) => (
            <div key={key} style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                color: '#7f8c8d',
                fontSize: '14px',
                textTransform: 'uppercase',
                marginBottom: '10px',
                fontWeight: '500'
              }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: '600',
                color: '#2c3e50'
              }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '25px',
          overflowX: 'auto'
        }}>
          {['dashboard', 'deliveries', 'routes', 'earnings', 'settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 25px',
                backgroundColor: activeTab === tab ? '#3498db' : 'transparent',
                color: activeTab === tab ? 'white' : '#7f8c8d',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'capitalize',
                borderRadius: '6px 6px 0 0',
                marginRight: '5px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          marginBottom: '30px'
        }}>
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '25px',
                marginBottom: '25px'
              }}>
                {/* Map Section */}
                <div style={{
                  height: '400px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878446845938!3d40.75798597932683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                    style={{ width: '100%', height: '100%', border: 'none' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rider Location Map"
                  ></iframe>
                </div>

                {/* Active Deliveries */}
                <div>
                  <h2 style={{ 
                    color: '#2c3e50',
                    marginTop: '0',
                    marginBottom: '20px',
                    fontSize: '22px'
                  }}>
                    Active Delivery
                  </h2>
                  
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ 
                      marginTop: '0',
                      color: '#3498db',
                      fontSize: '18px'
                    }}>Pizza Heaven → Sarah Johnson</h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '15px',
                      margin: '15px 0'
                    }}>
                      <div>
                        <div style={{
                          color: '#7f8c8d',
                          fontSize: '13px',
                          marginBottom: '5px'
                        }}>Pickup Location</div>
                        <div style={{ fontWeight: '500' }}>456 Restaurant Row</div>
                      </div>
                      <div>
                        <div style={{
                          color: '#7f8c8d',
                          fontSize: '13px',
                          marginBottom: '5px'
                        }}>Delivery Location</div>
                        <div style={{ fontWeight: '500' }}>123 Customer Ave</div>
                      </div>
                      <div>
                        <div style={{
                          color: '#7f8c8d',
                          fontSize: '13px',
                          marginBottom: '5px'
                        }}>Estimated Time</div>
                        <div style={{ fontWeight: '500' }}>12 minutes</div>
                      </div>
                      <div>
                        <div style={{
                          color: '#7f8c8d',
                          fontSize: '13px',
                          marginBottom: '5px'
                        }}>Order Value</div>
                        <div style={{ fontWeight: '500' }}>$18.75</div>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginTop: '15px'
                    }}>
                      <button style={{
                        padding: '10px 15px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        flex: '1'
                      }}>
                        Picked Up
                      </button>
                      <button style={{
                        padding: '10px 15px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        flex: '1'
                      }}>
                        Report Issue
                      </button>
                    </div>
                  </div>

                  {/* Available Routes */}
                  <div>
                    <h3 style={{ 
                      marginTop: '0',
                      color: '#2c3e50',
                      fontSize: '18px',
                      marginBottom: '15px'
                    }}>
                      Available Routes
                    </h3>
                    <div style={{
                      display: 'grid',
                      gap: '15px'
                    }}>
                      {availableRoutes.slice(0, 2).map(route => (
                        <div key={route.id} style={{
                          backgroundColor: '#f8f9fa',
                          padding: '15px',
                          borderRadius: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <div style={{ 
                              fontWeight: '600',
                              marginBottom: '5px'
                            }}>{route.name}</div>
                            <div style={{ 
                              fontSize: '13px',
                              color: '#7f8c8d'
                            }}>
                              {route.distance} • {route.estimatedTime} • {route.deliveries} deliveries
                            </div>
                          </div>
                          <button 
                            onClick={() => acceptRoute(route.id)}
                            style={{
                              padding: '8px 15px',
                              backgroundColor: '#3498db',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontWeight: '500'
                            }}
                          >
                            Accept
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 style={{ 
                  color: '#2c3e50',
                  marginTop: '0',
                  marginBottom: '20px',
                  fontSize: '22px'
                }}>
                  Quick Actions
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '15px'
                }}>
                  <button style={{
                    padding: '15px',
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '24px', marginBottom: '8px' }}>🛑</span>
                    Go Offline
                  </button>
                  <button style={{
                    padding: '15px',
                    backgroundColor: '#e8f5e9',
                    color: '#2e7d32',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '24px', marginBottom: '8px' }}>✅</span>
                    Complete Delivery
                  </button>
                  <button style={{
                    padding: '15px',
                    backgroundColor: '#fff3e0',
                    color: '#e65100',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '24px', marginBottom: '8px' }}>⏸️</span>
                    Take Break
                  </button>
                  <button style={{
                    padding: '15px',
                    backgroundColor: '#f3e5f5',
                    color: '#8e24aa',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '24px', marginBottom: '8px' }}>📞</span>
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Deliveries Tab */}
          {activeTab === 'deliveries' && (
            <div>
              <h2 style={{ 
                color: '#2c3e50',
                marginTop: '0',
                marginBottom: '20px',
                fontSize: '22px'
              }}>
                Your Deliveries
              </h2>
              
              <div style={{ 
                overflowX: 'auto',
                borderRadius: '8px',
                border: '1px solid #e0e0e0'
              }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  minWidth: '800px'
                }}>
                  <thead>
                    <tr style={{ 
                      backgroundColor: '#f8f9fa',
                      textAlign: 'left'
                    }}>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Order ID</th>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Restaurant</th>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Customer</th>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Route</th>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Amount</th>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Status</th>
                      <th style={{ padding: '15px', fontWeight: '500' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveries.map(delivery => (
                      <tr key={delivery.id} style={{ 
                        borderBottom: '1px solid #e0e0e0',
                        '&:last-child': { borderBottom: 'none' }
                      }}>
                        <td style={{ padding: '15px' }}>#{delivery.id}</td>
                        <td style={{ padding: '15px', fontWeight: '500' }}>{delivery.restaurant}</td>
                        <td style={{ padding: '15px' }}>{delivery.customer}</td>
                        <td style={{ padding: '15px' }}>{delivery.route}</td>
                        <td style={{ padding: '15px' }}>{delivery.amount}</td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '500',
                            backgroundColor: 
                              delivery.status === 'Pending' ? '#fff3e0' :
                              delivery.status === 'In Progress' ? '#e3f2fd' : '#e8f5e9',
                            color: 
                              delivery.status === 'Pending' ? '#e65100' :
                              delivery.status === 'In Progress' ? '#1976d2' : '#2e7d32'
                          }}>
                            {delivery.status}
                          </span>
                        </td>
                        <td style={{ padding: '15px' }}>
                          <select
                            value={delivery.status}
                            onChange={(e) => handleStatusChange(delivery.id, e.target.value)}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '6px',
                              border: '1px solid #e0e0e0',
                              backgroundColor: 'white',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Routes Tab */}
          {activeTab === 'routes' && (
            <div>
              <h2 style={{ 
                color: '#2c3e50',
                marginTop: '0',
                marginBottom: '20px',
                fontSize: '22px'
              }}>
                Available Routes
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {availableRoutes.map(route => (
                  <div key={route.id} style={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{
                      height: '150px',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#7f8c8d'
                    }}>
                      [Route Map Preview]
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{ 
                        marginTop: '0',
                        marginBottom: '10px',
                        color: '#2c3e50'
                      }}>
                        {route.name}
                      </h3>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px',
                        marginBottom: '20px'
                      }}>
                        <div>
                          <div style={{
                            color: '#7f8c8d',
                            fontSize: '13px',
                            marginBottom: '5px'
                          }}>Distance</div>
                          <div style={{ fontWeight: '500' }}>{route.distance}</div>
                        </div>
                        <div>
                          <div style={{
                            color: '#7f8c8d',
                            fontSize: '13px',
                            marginBottom: '5px'
                          }}>Estimated Time</div>
                          <div style={{ fontWeight: '500' }}>{route.estimatedTime}</div>
                        </div>
                        <div>
                          <div style={{
                            color: '#7f8c8d',
                            fontSize: '13px',
                            marginBottom: '5px'
                          }}>Deliveries</div>
                          <div style={{ fontWeight: '500' }}>{route.deliveries}</div>
                        </div>
                        <div>
                          <div style={{
                            color: '#7f8c8d',
                            fontSize: '13px',
                            marginBottom: '5px'
                          }}>Estimated Earnings</div>
                          <div style={{ fontWeight: '500' }}>${route.deliveries * 5}</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => acceptRoute(route.id)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          backgroundColor: '#3498db',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '500',
                          fontSize: '16px'
                        }}
                      >
                        Accept This Route
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === 'earnings' && (
            <div>
              <h2 style={{ 
                color: '#2c3e50',
                marginTop: '0',
                marginBottom: '20px',
                fontSize: '22px'
              }}>
                Your Earnings
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div style={{
                  backgroundColor: '#e3f2fd',
                  padding: '20px',
                  borderRadius: '10px'
                }}>
                  <h3 style={{ 
                    marginTop: '0',
                    color: '#1976d2',
                    fontSize: '18px'
                  }}>This Week</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    margin: '15px 0'
                  }}>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Total Earnings</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>$342.75</div>
                    </div>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Deliveries</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>32</div>
                    </div>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Tips</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>$45.50</div>
                    </div>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Hours Online</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>28.5</div>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  backgroundColor: '#e8f5e9',
                  padding: '20px',
                  borderRadius: '10px'
                }}>
                  <h3 style={{ 
                    marginTop: '0',
                    color: '#2e7d32',
                    fontSize: '18px'
                  }}>This Month</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    margin: '15px 0'
                  }}>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Total Earnings</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>$1,245.30</div>
                    </div>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Deliveries</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>127</div>
                    </div>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Tips</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>$156.75</div>
                    </div>
                    <div>
                      <div style={{
                        color: '#7f8c8d',
                        fontSize: '13px',
                        marginBottom: '5px'
                      }}>Hours Online</div>
                      <div style={{ 
                        fontWeight: '600',
                        fontSize: '20px'
                      }}>112</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{
                height: '300px',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7f8c8d',
                marginBottom: '30px'
              }}>
                [Earnings Chart Visualization]
              </div>
              
              <div>
                <h3 style={{ 
                  marginTop: '0',
                  color: '#2c3e50',
                  fontSize: '18px',
                  marginBottom: '15px'
                }}>
                  Recent Transactions
                </h3>
                <div style={{ 
                  overflowX: 'auto',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0'
                }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    minWidth: '600px'
                  }}>
                    <thead>
                      <tr style={{ 
                        backgroundColor: '#f8f9fa',
                        textAlign: 'left'
                      }}>
                        <th style={{ padding: '15px', fontWeight: '500' }}>Date</th>
                        <th style={{ padding: '15px', fontWeight: '500' }}>Order ID</th>
                        <th style={{ padding: '15px', fontWeight: '500' }}>Amount</th>
                        <th style={{ padding: '15px', fontWeight: '500' }}>Tip</th>
                        <th style={{ padding: '15px', fontWeight: '500' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map(item => (
                        <tr key={item} style={{ 
                          borderBottom: '1px solid #e0e0e0',
                          '&:last-child': { borderBottom: 'none' }
                        }}>
                          <td style={{ padding: '15px' }}>May {item}, 2023</td>
                          <td style={{ padding: '15px' }}>#100{item}</td>
                          <td style={{ padding: '15px' }}>$12.{item}0</td>
                          <td style={{ padding: '15px' }}>$2.{item}0</td>
                          <td style={{ padding: '15px' }}>
                            <span style={{
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '13px',
                              fontWeight: '500',
                              backgroundColor: '#e8f5e9',
                              color: '#2e7d32'
                            }}>
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 style={{ 
                color: '#2c3e50',
                marginTop: '0',
                marginBottom: '20px',
                fontSize: '22px'
              }}>
                Account Settings
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px'
              }}>
                {/* Profile Settings */}
                <div>
                  <h3 style={{ 
                    color: '#2c3e50',
                    marginTop: '0',
                    marginBottom: '15px',
                    fontSize: '18px'
                  }}>
                    Profile Information
                  </h3>
                  
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>First Name</label>
                      <input 
                        type="text" 
                        defaultValue="John" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>Last Name</label>
                      <input 
                        type="text" 
                        defaultValue="Doe" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>Email</label>
                      <input 
                        type="email" 
                        defaultValue="john.doe@example.com" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>Phone Number</label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (555) 123-4567" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <button style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '16px'
                    }}>
                      Update Profile
                    </button>
                  </div>
                </div>
                
                {/* Vehicle Settings */}
                <div>
                  <h3 style={{ 
                    color: '#2c3e50',
                    marginTop: '0',
                    marginBottom: '15px',
                    fontSize: '18px'
                  }}>
                    Vehicle Information
                  </h3>
                  
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>Vehicle Type</label>
                      <select style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                      }}>
                        <option>Motorcycle</option>
                        <option>Bicycle</option>
                        <option>Car</option>
                        <option>Scooter</option>
                      </select>
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>Vehicle Make</label>
                      <input 
                        type="text" 
                        defaultValue="Honda" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>Vehicle Model</label>
                      <input 
                        type="text" 
                        defaultValue="PCX 150" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>License Plate</label>
                      <input 
                        type="text" 
                        defaultValue="ABC123" 
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          backgroundColor: 'white'
                        }} 
                      />
                    </div>
                    
                    <button style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '16px'
                    }}>
                      Update Vehicle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rider;