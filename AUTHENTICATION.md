# Authentication System Documentation

## Overview

The Car Blogging site now includes a complete user authentication system with JWT-based authentication.

## Features

- ✅ User Registration
- ✅ User Login
- ✅ JWT Token Authentication
- ✅ Protected Routes
- ✅ User Profile Management
- ✅ Password Hashing (bcrypt)
- ✅ Protected API Routes
- ✅ Role-based Access (User/Admin)

## Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

This will install:
- `jsonwebtoken` - For JWT token generation and verification
- `bcryptjs` - For password hashing

### 2. Environment Variables

Update `backend/.env` file:

```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
MONGODB_URI=mongodb://localhost:27017/car-blog
PORT=5000
```

**Important:** Change `JWT_SECRET` to a strong, random string in production!

### 3. Start Backend

```bash
npm run dev
```

## API Endpoints

### Authentication Routes

#### Register User
```
POST /api/auth/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "token": "jwt-token-here",
  "user": { ... }
}
```

#### Get Current User
```
GET /api/auth/me
Headers: {
  "Authorization": "Bearer <token>"
}
```

#### Update Profile
```
PUT /api/auth/profile
Headers: {
  "Authorization": "Bearer <token>"
}
Body: {
  "name": "Updated Name",
  "bio": "User bio",
  "avatar": "https://..."
}
```

#### Change Password
```
PUT /api/auth/change-password
Headers: {
  "Authorization": "Bearer <token>"
}
Body: {
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

## Frontend Usage

### Using Auth Context

```jsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout, register } = useAuth();

  // Check if user is logged in
  if (isAuthenticated) {
    return <div>Welcome, {user.name}!</div>;
  }

  return <div>Please log in</div>;
}
```

### Protected Routes

```jsx
import ProtectedRoute from './components/auth/ProtectedRoute';

<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

### Login/Register Pages

- `/login` - Login page
- `/register` - Registration page

## User Model

```javascript
{
  name: String (required, 2-50 chars),
  email: String (required, unique, validated),
  password: String (required, min 6 chars, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  avatar: String (optional),
  bio: String (optional, max 200 chars),
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt before storage
2. **JWT Tokens**: Secure token-based authentication
3. **Token Expiration**: Tokens expire after 7 days (configurable)
4. **Protected Routes**: Middleware to protect API routes
5. **Input Validation**: All inputs are validated using express-validator
6. **Password Exclusion**: Passwords are never returned in API responses

## Middleware

### `authenticate` - Required Authentication
```javascript
import { authenticate } from '../middleware/auth';

router.get('/protected', authenticate, (req, res) => {
  // req.user contains the authenticated user
  res.json({ user: req.user });
});
```

### `isAdmin` - Admin Only
```javascript
import { authenticate, isAdmin } from '../middleware/auth';

router.delete('/admin-only', authenticate, isAdmin, (req, res) => {
  // Only admins can access this
});
```

### `optionalAuth` - Optional Authentication
```javascript
import { optionalAuth } from '../middleware/auth';

router.get('/public', optionalAuth, (req, res) => {
  // req.user will be set if token is valid, otherwise undefined
  if (req.user) {
    // User is authenticated
  }
});
```

## Frontend Components

### Navbar Integration
The navbar automatically shows:
- **Logged Out**: "Login" and "Sign Up" buttons
- **Logged In**: User avatar/name and "Logout" button

### Auth Context
Provides:
- `user` - Current user object
- `isAuthenticated` - Boolean
- `loading` - Loading state
- `login(email, password)` - Login function
- `register(name, email, password)` - Register function
- `logout()` - Logout function
- `updateProfile(data)` - Update user profile
- `changePassword(current, new)` - Change password

## Testing Authentication

### 1. Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 2. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 3. Access Protected Route
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <your-token>"
```

## Next Steps

1. **Add Admin Panel**: Create admin routes and components
2. **User Profiles**: Create user profile pages
3. **Password Reset**: Add forgot password functionality
4. **Email Verification**: Add email verification on registration
5. **Social Login**: Add OAuth (Google, Facebook, etc.)

## Troubleshooting

### Token Expired
- Tokens expire after 7 days
- User needs to login again
- Frontend automatically handles token expiration

### CORS Issues
- Ensure backend CORS is configured correctly
- Check that Authorization header is allowed

### Password Not Working
- Ensure password is at least 6 characters
- Check that password is being hashed correctly
- Verify bcrypt is working

## Security Best Practices

1. **Never commit `.env` files** with real secrets
2. **Use strong JWT_SECRET** in production
3. **Use HTTPS** in production
4. **Implement rate limiting** for login/register
5. **Add CSRF protection** for production
6. **Regularly update dependencies**

