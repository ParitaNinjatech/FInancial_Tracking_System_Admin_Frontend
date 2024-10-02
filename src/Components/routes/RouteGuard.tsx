import { Navigate } from 'react-router-dom';

// Simulate an authentication function
const isAuthenticated = () => {
  // Add your actual authentication logic here
  // e.g., check if user token exists in localStorage or context
  return !!localStorage.getItem('jwtToken'); // Example logic
};

const ProtectedRoute = ({ children }:any) => {
  if (!isAuthenticated()) {
    // Redirect to SignIn page if not authenticated
    return <Navigate to="/signin" replace />;
  }

  // If authenticated, allow access to the route
  return children;
};

export const IsLoggedIn = () => {
  return !!localStorage.getItem('jwtToken');
};

export default ProtectedRoute;
