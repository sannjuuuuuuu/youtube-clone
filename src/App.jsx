import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetails from './pages/VideoDetail';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />

        {/* Main layout */}
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar: visible only on medium and above */}
            <div className="col-md-2 d-none d-md-block p-0">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="col-12 col-md-10 p-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
