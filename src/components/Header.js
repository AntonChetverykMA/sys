import React from 'react';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container'>
        <ul
          className='navbar-nav d-flex flex-row justify-content-around'
          style={{ width: '100%' }}
        >
          <li className='nav-item active'>
            <NavLink to='/' className='nav-link'>
              Task 1
            </NavLink>
          </li>
          <li className='nav-item active'>
            <NavLink to='/two' className='nav-link'>
              Task 2
            </NavLink>
          </li>
          <li className='nav-item active'>
            <NavLink to='/three' className='nav-link'>
              Task 3
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
