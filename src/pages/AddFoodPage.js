import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddFoodItem = () => {
  const [foodItem, setFoodItem] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Fast Food',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFoodItem(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Food item submitted:', foodItem);
    alert('Food item added successfully!');
    // Reset form
    setFoodItem({
      name: '',
      price: '',
      description: '',
      category: 'Fast Food',
      image: null
    });
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>Add New Food Item</h1>
        <Link to="/restaurant-owner" style={styles.backBtn}>
          Back to Dashboard
        </Link>
      </nav>
      
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Food Name:</label>
            <input
              type="text"
              name="name"
              value={foodItem.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Price (Rs.):</label>
            <input
              type="number"
              name="price"
              value={foodItem.price}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              name="description"
              value={foodItem.description}
              onChange={handleChange}
              rows="3"
              style={styles.textarea}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Category:</label>
            <select
              name="category"
              value={foodItem.category}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="Fast Food">Fast Food</option>
              <option value="Desi Food">Desi Food</option>
              <option value="Chinese">Chinese</option>
              <option value="Desserts">Desserts</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Food Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.fileInput}
            />
          </div>
          
          <button type="submit" style={styles.submitBtn}>
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

// CSS styles as JavaScript objects
const styles = {
  page: {
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
  backBtn: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  formContainer: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  form: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    backgroundColor: 'white'
  },
  fileInput: {
    width: '100%',
    padding: '0.5rem 0'
  },
  submitBtn: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%'
  }
};

export default AddFoodItem;