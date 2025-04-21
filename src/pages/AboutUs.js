import React from 'react';
import { FaShippingFast, FaLeaf, FaHeart, FaAward, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px 40px',
      fontFamily: "'Poppins', sans-serif",
      color: '#333'
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)',
        borderRadius: '12px'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#2c3e50'
        }}>About TasteWay</h1>
        <p style={{
          fontSize: '18px',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
          color: '#555'
        }}>
          Delivering happiness one meal at a time - TasteWay connects food lovers with the best local restaurants
        </p>
      </div>

      {/* Our Story */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '80px',
        gap: '40px'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '20px',
            color: '#27ae60',
            position: 'relative',
            paddingBottom: '15px'
          }}>
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '80px',
              height: '4px',
              backgroundColor: '#27ae60'
            }}></span>
            Our Story
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            marginBottom: '20px',
            color: '#555'
          }}>
            TasteWay began in 2020 with a simple idea: to make food delivery faster, easier, and more delightful. 
            Founded by food enthusiasts in Karachi, we've grown from a small team of 5 to serving thousands of 
            customers across Pakistan.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#555'
          }}>
            What started as a passion project has now become one of the leading food delivery platforms, 
            connecting hungry customers with their favorite local restaurants.
          </p>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Our Team" 
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>

      {/* Our Mission */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '60px 40px',
        borderRadius: '12px',
        marginBottom: '80px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '32px',
          marginBottom: '30px',
          color: '#2c3e50'
        }}>Our Mission</h2>
        <p style={{
          fontSize: '18px',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.8',
          color: '#555'
        }}>
          To revolutionize food delivery by providing exceptional service, supporting local businesses, 
          and creating memorable dining experiences at home. We believe good food should be just a few taps away.
        </p>
      </div>

      {/* Why Choose Us */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '32px',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#2c3e50'
        }}>Why Choose TasteWay</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{
              backgroundColor: '#e3f5ec',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <FaShippingFast style={{ fontSize: '30px', color: '#27ae60' }} />
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Fast Delivery</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Average delivery time of just 30 minutes with our optimized routing system
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{
              backgroundColor: '#e3f5ec',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <FaLeaf style={{ fontSize: '30px', color: '#27ae60' }} />
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Quality Food</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Partnering only with top-rated restaurants that meet our quality standards
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{
              backgroundColor: '#e3f5ec',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <FaHeart style={{ fontSize: '30px', color: '#27ae60' }} />
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Customer Care</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              24/7 support to ensure your dining experience is always perfect
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{
              backgroundColor: '#e3f5ec',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <FaAward style={{ fontSize: '30px', color: '#27ae60' }} />
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Trusted Service</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Voted "Best Food Delivery App" for 3 consecutive years
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        marginBottom: '80px',
        textAlign: 'center'
      }}>
        <div>
          <h3 style={{ fontSize: '42px', color: '#27ae60', marginBottom: '10px' }}>500+</h3>
          <p style={{ color: '#666' }}>Restaurant Partners</p>
        </div>
        <div>
          <h3 style={{ fontSize: '42px', color: '#27ae60', marginBottom: '10px' }}>50K+</h3>
          <p style={{ color: '#666' }}>Happy Customers</p>
        </div>
        <div>
          <h3 style={{ fontSize: '42px', color: '#27ae60', marginBottom: '10px' }}>10+</h3>
          <p style={{ color: '#666' }}>Cities Served</p>
        </div>
        <div>
          <h3 style={{ fontSize: '42px', color: '#27ae60', marginBottom: '10px' }}>98%</h3>
          <p style={{ color: '#666' }}>Positive Reviews</p>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 style={{
          fontSize: '32px',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#2c3e50'
        }}>Meet Our Team</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {[
            { name: 'Ali Khan', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
            { name: 'Sara Ahmed', role: 'Head of Operations', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
            { name: 'Usman Malik', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/67.jpg' },
            { name: 'Fatima Raza', role: 'Customer Success', img: 'https://randomuser.me/api/portraits/women/63.jpg' }
          ].map((member, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              textAlign: 'center',
              paddingBottom: '20px'
            }}>
              <img 
                src={member.img} 
                alt={member.name} 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  marginBottom: '20px'
                }}
              />
              <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>{member.name}</h3>
              <p style={{ color: '#27ae60', marginBottom: '15px' }}>{member.role}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <a href="#" style={{ color: '#3498db' }}>LinkedIn</a>
                <a href="#" style={{ color: '#3498db' }}>Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;