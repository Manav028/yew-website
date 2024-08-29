'use client'
import { METHODS } from 'http';
import React from 'react'
import { useState } from 'react';
import { encryptString } from '@/lib/crypto';

const Register = () => {
  const [formData, setFormData] = useState({
    "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    "clientId": "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    "firstName": "manav",
    "lastName": "patel",
    "email": "bpatel@yewtechnologies.co.uk",
    "password": "123456PaA",
    "confirmPassword": "123456PaA", 
    "userExist": true
  });

  // V0YTO0HxMJps0fEMEW/Rrg==

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    
    e.preventDefault();

    const encryptedPassword = await encryptString(formData.email.toString(), formData.password);
      const encryptedConfirmPassword = await encryptString(formData.email.toString()  , formData.confirmPassword);

      const encryptedData = {
        ...formData,
        password: encryptedPassword,
        confirmPassword: encryptedConfirmPassword,
      };

      console.log(encryptedData)

    try {
  
      const response = await fetch(`https://sandpiperdevwebapi2.azurewebsites.net/v2/tenants/${formData.tenantId}/clients/${formData.clientId}/FrontDoorUserManagement/RegisterUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(encryptedData),
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
    <div className="flex  bg-gray-100 items-center justify-center" style={{ height: "calc(100vh - 60px)" }}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Register</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">

            <div>
              <label className="sr-only">First Name</label>
              <input
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                name="firstName"
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="sr-only">Last Name</label>
              <input
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                name="lastName"
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='sr-only'>Email</label>
              <input
               type='text'
               name='email'
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
               value={formData.email}
               onChange={handleChange}
               placeholder='Email'
               />
            </div>

            <div>
              <label className='sr-only'>Password</label>
              <input
               type='password'
               name='password'
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
               value={formData.password}
               onChange={handleChange}
               placeholder='Password'
               />
            </div>

            <div>
              <label className='sr-only'>Confirm Password</label>
              <input
               type='password'
               name='confirmPassword'
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
               value={formData.confirmPassword}
               onChange={handleChange}
               placeholder='Confirm Password'
               />
            </div>

          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register