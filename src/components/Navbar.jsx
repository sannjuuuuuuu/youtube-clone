import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { dark, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${query}`);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">YouTube Clone</a>

        <form onSubmit={handleSearch} className="d-flex ms-auto me-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        {/* 🔘 Theme Toggle Button */}
        <button onClick={toggleTheme} className="btn btn-outline-secondary">
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
