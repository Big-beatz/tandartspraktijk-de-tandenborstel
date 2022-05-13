import React from 'react';
import {NavLink} from 'react-router-dom'

function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li>
            <NavLink activeClassName="active-link" exact to="/">Home</NavLink>
          </li>

          <li>
            <NavLink activeClassName="active-link" to="/gaatjes">Gaatjes</NavLink>
          </li>

          <li>
            <NavLink activeClassName="active-link" to="/afspraak-maken">Afspraak maken</NavLink>
          </li>

          <li>
            <NavLink activeClassName="active-link" to="/tanden-bleken">Tanden bleken</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;