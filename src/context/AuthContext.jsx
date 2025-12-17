import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../lib/api';
import { toast } from 'sonner';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Set token in localStorage and API headers
  const setAuthToken = (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
      setToken(newToken);
    } else {
      localStorage.removeItem('token');
      setToken(null);
    }
  };

  // Fetch current user
  const fetchUser = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.getMe();
      setUser(response.user);
    } catch (error) {
      console.error('Error fetching user:', error);
      // Token might be invalid, clear it
      setAuthToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Load user on mount
  useEffect(() => {
    fetchUser();
  }, [token]);

  // Register
  const register = async (name, email, password) => {
    try {
      const response = await authAPI.register({ name, email, password });
      setAuthToken(response.token);
      setUser(response.user);
      toast.success('Registration successful!');
      return response;
    } catch (error) {
      toast.error(error.message || 'Registration failed');
      throw error;
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const response = await authAPI.login({ email, password });
      setAuthToken(response.token);
      setUser(response.user);
      toast.success('Login successful!');
      return response;
    } catch (error) {
      toast.error(error.message || 'Login failed');
      throw error;
    }
  };

  // Logout
  const logout = () => {
    setAuthToken(null);
    setUser(null);
    toast.success('Logged out successfully');
  };

  // Update profile
  const updateProfile = async (data) => {
    try {
      const response = await authAPI.updateProfile(data);
      setUser(response.user);
      toast.success('Profile updated successfully');
      return response;
    } catch (error) {
      toast.error(error.message || 'Failed to update profile');
      throw error;
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    try {
      await authAPI.changePassword({ currentPassword, newPassword });
      toast.success('Password changed successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to change password');
      throw error;
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    updateProfile,
    changePassword,
    refreshUser: fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

