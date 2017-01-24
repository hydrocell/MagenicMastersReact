'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Navbar = ReactBootstrap.Navbar;

const navbarInstance = (
  <Navbar  className="bgprimary" inverse >
    <Navbar.Header>
      <Navbar.Brand>
        <p>Header</p>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

ReactDOM.render(navbarInstance, document.getElementById('header'));