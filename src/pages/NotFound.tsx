import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go back to home</Link>
    </div>
  );
}

export default NotFound;