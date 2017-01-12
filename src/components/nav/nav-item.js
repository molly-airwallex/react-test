import React from 'react';
import { PropTypes } from 'react';
const Radium = require('radium');
import { Link } from 'react-router';

function NavItem(props) {
  return (
        <p><Link to={props.link}>{props.text}</Link></p>
  );
}

export default Radium(NavItem);