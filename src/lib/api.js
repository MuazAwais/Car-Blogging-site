// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || error.message || 'Something went wrong');
    }

    return await response.json();
  } catch (error) {
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

