/**
 * useAuth Hook - Quản lý xác thực người dùng
 * Lấy token, user info từ localStorage
 * Tự động login với mock user để bypass login page
 */

import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lấy token và user từ localStorage khi component mount
    let storedToken = localStorage.getItem('authToken');
    let storedUser = localStorage.getItem('user');

    // Nếu chưa có token, tự động login với mock user
    if (!storedToken) {
      const mockUser = {
        id: 1,
        name: 'Demo User',
        email: 'demo@airetail.com',
        role: 'warehouse_manager',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCFo3D0VhkjDp6wYi7A3G3rtT-HeBeV9_Irw1MncCf1By9FiWAzrrW0Y1o_eR0BIqouI4JLwKyzpxHiyhHrOxhP1gc2OrbrKeKagYERgHPSLqIeqXh7iopYQYZFpQ3HRo32q_gQG4t9lU6JywKA9r6XbGmBU0YhjbyNzuCTVz8W4Q6FKwogP_fwDpM6p_EySDffHLbP5e-WRjoesCtXL6OJytbDZySk5VBmPYWb9eQM2XahiNm9R3AHtYeKbU3QQiT82T6wAgP0MXo',
      };
      const mockToken = 'mock_token_' + Date.now();
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      storedToken = mockToken;
      storedUser = JSON.stringify(mockUser);
    }

    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = !!token;

  return {
    user,
    token,
    loading,
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
