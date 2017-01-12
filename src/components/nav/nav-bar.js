import React from 'react'
const Radium = require('radium');
import NavItem from './nav-item.js'

function NavBar() {
  return (
      <div>
        <NavItem text="about" link={'/about'}/>
        <NavItem text="inbox" link={'/inbox'}/>
      </div>
  );
}

export default Radium(NavBar);
