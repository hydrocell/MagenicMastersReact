
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

var Header = React.createClass( {  
   render: function() {
     return (      
          <Navbar inverse >
            <Navbar.Header>
              <Navbar.Brand>
                   <Link to='/public/'>Home</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                    <Link to='/taskdetails'>Tasks</Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>        
   )}
});

module.exports = Header;