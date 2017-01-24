'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Panel = ReactBootstrap.Panel;

var Section = React.createClass({
  render: function() {
    return (
        <Panel bsStyle="primary" className="section">
          Section
        </Panel>
    );
  }
});

ReactDOM.render(<Section />, document.getElementById('section'));