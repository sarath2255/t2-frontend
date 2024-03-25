
import React, { useState } from 'react';
import './Add.css';


function Form() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    place: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    name: '',
    password: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    place: '',
    agreeTerms: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateForm = () => {
    const { username, name, password, phone, address, dob, gender, place, agreeTerms } = formData;
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!name) newErrors.name = 'Name is required';
    if (!password) newErrors.password = 'Password is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!address) newErrors.address = 'Address is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!place) newErrors.place = 'Place is required';
    if (!agreeTerms) newErrors.agreeTerms = 'Required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; 
  };

  const addDetails = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const reqBody = new FormData();
      for (const key in formData) {
        reqBody.append(key, formData[key]);
      }

   
    }
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-card" style={{ width: '800px', height: 'auto' }}>
          <h2> RESET</h2>
          <form onSubmit={addDetails}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{ border: errors.username ? '1px solid red' : '1px solid #ccc' }}
              />
              <span style={{ color: 'red' }}>{errors.username}</span>
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ border: errors.name ? '1px solid red' : '1px solid #ccc' }}
              />
              <span style={{ color: 'red' }}>{errors.name}</span>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ border: errors.password ? '1px solid red' : '1px solid #ccc' }}
              />
              <span style={{ color: 'red' }}>{errors.password}</span>
            </div>
            <div className="form-group">
              <label>Phone No:</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{ border: errors.phone ? '1px solid red' : '1px solid #ccc' }}
              />
              <span style={{ color: 'red' }}>{errors.phone}</span>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={{ border: errors.address ? '1px solid red' : '1px solid #ccc' }}
              />
              <span style={{ color: 'red' }}>{errors.address}</span>
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                style={{ border: errors.dob ? '1px solid red' : '1px solid #ccc' }}
              />
              <span style={{ color: 'red' }}>{errors.dob}</span>
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
              <span style={{ color: 'red' }}>{errors.gender}</span>
            </div>
            <div className="form-group">
              <label>Place:</label>
              <select
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                style={{ border: errors.place ? '1px solid red' : '1px solid #ccc' }}
              >
                <option value="">Select a place</option>
                <option value="Place1">Place1</option>
                <option value="Place2">Place2</option>
                <option value="Place3">Place3</option>
              </select>
              <span style={{ color: 'red' }}>{errors.place}</span>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                />
                I agree to the terms and conditions
              </label>
              <span style={{ color: 'red' }}>{errors.agreeTerms}</span>
              </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;