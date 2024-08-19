'use client'
import { METHODS } from 'http';
import React from 'react'
import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        tenantId: '99',
        clientId: '99',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userExist: '',
      });
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`https://sandpiperdevwebapi2.azurewebsites.net/v2/tenants/${formData.tenantId}/clients/${formData.clientId}/FrontDoorUserRegistration/RegisterUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Registration successful!');
          } else {
            console.error('Registration failed!');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
    
      return (
        <div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      );
}

export default Register