'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Panel = ReactBootstrap.Panel;

var Card = React.createClass({
  render: function() {
    return (
        <div>
        
        <Panel bsStyle="primary" className="section col-md-3">
          Card
        </Panel>
        <div className="col-md-1" />
        <Panel bsStyle="primary" className="section col-md-3">
          Card
        </Panel>
        <div className="col-md-1" />
        <Panel bsStyle="primary" className="section col-md-3">
          Card
        </Panel>
    
        </div>
    );
  }
});

ReactDOM.render(<Card />, document.getElementById('card'));