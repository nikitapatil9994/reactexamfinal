import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: '1rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          Hotel Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: 'none',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            justifyContent: 'flex-end',
          }}
        >
          <ul
            className="navbar-nav"
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1rem',
              paddingLeft: 0,
              marginBottom: 0,
            }}
          >
            <li className="nav-item">
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/reservations"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Reservations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/reservation-form"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Make Reservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
