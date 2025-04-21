import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUtensils, FaMoneyBillWave, FaImage, FaAlignLeft, FaPlus } from 'react-icons/fa';

const AddFoodItem = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [foodItem, setFoodItem] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    previewImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoodItem(prev => ({
          ...prev,
          image: file,
          previewImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`"${foodItem.name}" has been added to the menu!`);
    navigate('/restaurant-owner');
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      fontFamily: "'Poppins', sans-serif",
      animation: 'fadeIn 0.6s ease-in-out',
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.95))',
      position: 'relative',
      overflow: 'hidden'
    },
    foodPattern: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '150px',
      height: '150px',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")',
      opacity: 0.1,
      zIndex: 0
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '30px',
      position: 'relative',
      zIndex: 1
    },
    titleIcon: {
      backgroundColor: '#27ae60',
      color: 'white',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      boxShadow: '0 4px 10px rgba(39, 174, 96, 0.3)'
    },
    title: {
      fontSize: '32px',
      color: '#2c3e50',
      fontWeight: '600',
      position: 'relative',
      paddingBottom: '15px',
      margin: 0
    },
    titleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #27ae60, #2ecc71)',
      borderRadius: '2px'
    },
    formGroup: {
      marginBottom: '30px',
      position: 'relative',
      zIndex: 1
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #ecf0f1',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    },
    inputIcon: {
      padding: '0 15px',
      color: '#7f8c8d',
      fontSize: '18px',
      backgroundColor: '#ecf0f1',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      flex: 1,
      padding: '15px',
      fontSize: '16px',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent'
    },
    inputFocus: {
      borderColor: '#27ae60',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 3px rgba(39, 174, 96, 0.1)'
    },
    textareaContainer: {
      border: '2px solid #ecf0f1',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    },
    textareaIcon: {
      padding: '15px',
      color: '#7f8c8d',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    textarea: {
      width: '100%',
      padding: '0 15px 15px 15px',
      fontSize: '16px',
      border: 'none',
      outline: 'none',
      minHeight: '120px',
      resize: 'vertical',
      backgroundColor: 'transparent',
      fontFamily: "'Poppins', sans-serif"
    },
    imageUploadContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px dashed #bdc3c7',
      borderRadius: '10px',
      padding: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      marginBottom: '20px'
    },
    imageUploadContainerHover: {
      borderColor: '#27ae60',
      backgroundColor: '#f1f9f5'
    },
    imageUploadIcon: {
      fontSize: '40px',
      color: '#bdc3c7',
      marginBottom: '15px',
      transition: 'all 0.3s ease'
    },
    imageUploadText: {
      color: '#7f8c8d',
      marginBottom: '10px'
    },
    imageUploadButton: {
      backgroundColor: '#27ae60',
      color: 'white',
      padding: '8px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '14px'
    },
    imagePreview: {
      width: '100%',
      maxHeight: '250px',
      borderRadius: '10px',
      objectFit: 'cover',
      marginTop: '20px',
      border: '2px solid #ecf0f1',
      display: foodItem.previewImage ? 'block' : 'none'
    },
    submitButton: {
      background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
      color: 'white',
      padding: '18px 30px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      marginTop: '20px',
      transition: 'all 0.4s ease',
      boxShadow: '0 4px 15px rgba(46, 204, 113, 0.3)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1
    },
    submitButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 7px 20px rgba(46, 204, 113, 0.4)'
    },
    submitButtonActive: {
      transform: 'translateY(1px)'
    },
    buttonIcon: {
      marginRight: '10px'
    },
    globalStyles: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      body {
        background-color: #f5f7fa;
        background-image: url('https://www.transparenttextures.com/patterns/always-grey.png');
      }
    `
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{styles.globalStyles}</style>
      <div style={styles.container}>
        <div style={styles.foodPattern}></div>
        
        <div style={styles.titleContainer}>
          <div style={styles.titleIcon}>
            <FaUtensils size={24} />
          </div>
          <h2 style={styles.title}>
            Add New Food Item
            <span style={styles.titleAfter}></span>
          </h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <div style={styles.inputContainer}>
              <div style={styles.inputIcon}>
                <FaUtensils />
              </div>
              <input
                type="text"
                name="name"
                value={foodItem.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter food name (e.g., Chicken Biryani)"
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <div style={styles.inputContainer}>
              <div style={styles.inputIcon}>
                <FaMoneyBillWave />
              </div>
              <input
                type="number"
                name="price"
                value={foodItem.price}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter price in PKR (e.g., 450)"
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <div style={styles.textareaContainer}>
              <div style={styles.textareaIcon}>
                <FaAlignLeft />
              </div>
              <textarea
                name="description"
                value={foodItem.description}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Describe your delicious food item..."
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <div 
              style={{
                ...styles.imageUploadContainer,
                ...(isHovered && styles.imageUploadContainerHover)
              }}
              onClick={() => fileInputRef.current.click()}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaImage style={{
                ...styles.imageUploadIcon,
                ...(isHovered && { color: '#27ae60' })
              }} />
              <p style={styles.imageUploadText}>
                {foodItem.image ? foodItem.image.name : 'Click to upload food image or drag and drop'}
              </p>
              <button type="button" style={styles.imageUploadButton}>
                Choose File
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
            {foodItem.previewImage && (
              <img 
                src={foodItem.previewImage} 
                alt="Food preview" 
                style={styles.imagePreview}
              />
            )}
          </div>
          
          <button 
            type="submit" 
            style={styles.submitButton}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.target.style.transform = ''}
            onMouseDown={(e) => e.target.style.transform = 'translateY(1px)'}
            onMouseUp={(e) => e.target.style.transform = 'translateY(-3px)'}
          >
            <FaPlus style={styles.buttonIcon} />
            Add to Menu
          </button>
        </form>
      </div>
    </>
  );
};

export default AddFoodItem;