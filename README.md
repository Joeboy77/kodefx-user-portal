# KodeFX User Portal

A secure React application for KodeFX users that provides access to the privacy policy and account deletion functionality. All pages require authentication.

## Project Overview

The KodeFX User Portal is designed for forex traders who use the KodeFX platform to connect with forex experts. This portal provides:

1. A secure authentication system
2. Access to the privacy policy (requires authentication)
3. A user account deletion feature (requires authentication)

## Features

### Authentication System
- Login page with email and password validation
- Protected routes using React Router
- Session management with localStorage
- Automatic redirection to login for unauthenticated users

### Privacy Policy
- Comprehensive privacy policy specifically tailored for a forex trading platform
- Responsive design for all device sizes
- Clear organization with sections and subsections

### Account Deletion
- Two-step confirmation process to prevent accidental deletions
- Clear warnings about the consequences of account deletion
- Success feedback after deletion
- Automatic logout and redirection after account deletion

## Project Structure

```
kodefx-user-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── DeleteAccount.js
│   │   ├── DeleteAccount.css
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── PrivacyPolicy.js
│   │   ├── PrivacyPolicy.css
│   │   └── PrivateRoute.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```
git clone <repository-url>
cd kodefx-user-portal
```

2. Install dependencies:
```
yarn install
```

3. Start the development server:
```
yarn start
```

4. Build for production:
```
yarn build
```

## API Integration

The application integrates with the following API endpoints:

- **Login API**:
  - URL: `https://kodefx-c6d6097c6d0c.herokuapp.com/api/v1/users/login`
  - Method: POST
  - Payload: `{ email, password }`
  - Response: Contains user ID needed for authentication

- **Delete Account API**:
  - URL: `https://kodefx-c6d6097c6d0c.herokuapp.com/api/v1/users/:userId`
  - Method: DELETE
  - Authentication: User ID from login stored in localStorage

## Demo Credentials

For testing purposes, you can use the following credentials:
- Email: demo@kodefx.com
- Password: password123

## Notes

- User authentication is managed using localStorage for simplicity
- In a production environment, consider implementing more secure authentication methods like JWT with HTTP-only cookies
- The API endpoints in this demo are placeholders and should be replaced with actual endpoints in a production environment