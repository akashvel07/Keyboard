import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar-container">
      <div className="top-bar-pill">

        {/* Logo */}
        <div className="logo-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
            <path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 15h8" />
          </svg>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6 pr-1">
          <button className="nav-link">
            Keyboards
          </button>

          {/* Login Button */}
          <button className="login-btn">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}
