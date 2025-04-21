import React from 'react';
import { useParams } from 'react-router-dom';

const HotelPage = () => {
  const { id } = useParams();

  // Mock data
  const hotels = {
    1: {
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1544025162-d76694265947",
        "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1711429513678-93f414d22809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
      ],
      description: "Premium dining experience with authentic Indian and Chinese cuisine. Our chefs use traditional recipes with modern presentation.",
      address: "123 Food Street, Delhi, India - 110001",
      contact: "+91 9876543210 | tastybites@example.com",
      rating: 4.5,
      openingHours: "11:00 AM - 11:00 PM (Mon-Sun)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566623773637!2d77.20790741508243!3d28.61390198242728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1624456789012!5m2!1sen!2sin"
    }
  };

  const hotel = hotels[id] || hotels[1];

  const teamMembers = [
    {
      name: "Raj Sharma",
      position: "Manager",
      contact: "raj@example.com",
      phone: "+91 9876543201",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      position: "Head Chef",
      contact: "priya@example.com",
      phone: "+91 9876543202",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Amit Singh",
      position: "Service Manager",
      contact: "amit@example.com",
      phone: "+91 9876543203",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      name: "Neha Gupta",
      position: "Marketing Head",
      contact: "neha@example.com",
      phone: "+91 9876543204",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          margin: '0'
        }}>{hotel.name}</h1>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 'bold',
          color: '#333',
          fontSize: '1.2rem'
        }}>★ {hotel.rating}</div>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '15px',
        margin: '30px 0'
      }}>
        {hotel.images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`${hotel.name} ${index + 1}`} 
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
            }}
          />
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#444',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '2px solid #eee'
          }}>About Us</h2>
          <p style={{ lineHeight: '1.6', margin: '8px 0' }}>{hotel.description}</p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#444',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '2px solid #eee'
          }}>Contact Information</h2>
          <p style={{ lineHeight: '1.6', margin: '8px 0' }}><strong>Address:</strong> {hotel.address}</p>
          <p style={{ lineHeight: '1.6', margin: '8px 0' }}><strong>Contact:</strong> {hotel.contact}</p>
          <p style={{ lineHeight: '1.6', margin: '8px 0' }}><strong>Opening Hours:</strong> {hotel.openingHours}</p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#444',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '2px solid #eee'
          }}>Location</h2>
          <div style={{
            margin: '20px 0',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
          }}>
            <iframe 
              title="hotel-location"
              src={hotel.mapUrl}
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#444',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '2px solid #eee'
          }}>Our Team</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '25px',
            marginTop: '20px'
          }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '20px',
                background: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '15px',
                    border: '3px solid #fff',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
                  }}
                />
                <h3 style={{
                  margin: '0 0 5px',
                  color: '#333'
                }}>{member.name}</h3>
                <p style={{
                  color: '#666',
                  fontWeight: 'bold',
                  margin: '5px 0'
                }}>{member.position}</p>
                <p style={{
                  color: '#555',
                  fontSize: '0.9rem',
                  margin: '4px 0'
                }}>{member.phone}</p>
                <p style={{
                  color: '#555',
                  fontSize: '0.9rem',
                  margin: '4px 0'
                }}>{member.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;