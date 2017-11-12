import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <p><strong>Error 404</strong>: Page not found!</p>
    <Link to="/">Click here</Link> to visit the Main Page
  </div>
);

export default NoMatch;
