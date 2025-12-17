// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('API Call:', url, options.method || 'GET');
    
    // Get token from localStorage
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    // Add authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(url, {
      headers,
      ...options,
    });

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Server returned non-JSON response: ${text}`);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    // Enhanced error logging
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      console.error('Network Error - Is the backend server running?', error);
      throw new Error('Cannot connect to server. Please ensure the backend is running on http://localhost:5000');
    }
    console.error('API Error:', error);
    throw error;
  }
};

// Blog API
export const blogAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/blogs${queryString ? `?${queryString}` : ''}`);
  },
  getById: (id) => apiCall(`/blogs/${id}`),
  create: (data) => apiCall('/blogs', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id, data) => apiCall(`/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id) => apiCall(`/blogs/${id}`, {
    method: 'DELETE',
  }),
};

// Contact API
export const contactAPI = {
  submit: (data) => apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getAll: () => apiCall('/contact'),
  getById: (id) => apiCall(`/contact/${id}`),
};

// Subscription API
export const subscriptionAPI = {
  subscribe: (email) => apiCall('/subscriptions', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),
  unsubscribe: (email) => apiCall(`/subscriptions/${email}`, {
    method: 'DELETE',
  }),
};

// Category API
export const categoryAPI = {
  getAll: () => apiCall('/categories'),
  getById: (id) => apiCall(`/categories/${id}`),
};

// Testimonial API
export const testimonialAPI = {
  getAll: (approved = true) => apiCall(`/testimonials${approved ? '' : '?approved=false'}`),
  getById: (id) => apiCall(`/testimonials/${id}`),
  submit: (data) => apiCall('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

// Health check
export const healthCheck = () => apiCall('/health');

// Auth API
export const authAPI = {
  register: (data) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  login: (data) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getMe: () => apiCall('/auth/me'),
  updateProfile: (data) => apiCall('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  changePassword: (data) => apiCall('/auth/change-password', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};

