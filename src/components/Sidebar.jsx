import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'Home', path: '/' },
  { name: 'Trending', path: '/' },
  { name: 'Music', path: '/' },
  { name: 'Gaming', path: '/' },
  { name: 'Technology', path: '/' },
];

const Sidebar = () => {
  return (
    <div className="bg-light h-100 border-end p-3">
      <h6 className="text-muted">Categories</h6>
      {categories.map((cat) => (
        <NavLink
          key={cat.name}
          to={cat.path}
          className="d-block mb-2 text-decoration-none text-dark"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          {cat.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
