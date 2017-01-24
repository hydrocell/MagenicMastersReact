'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');


var Panel = ReactBootstrap.Panel;

const panelsInstance = (
    <div>
       <Panel>
        Hero
        </Panel>
    </div>
);

ReactDOM.render(panelsInstance, document.getElementById('hero'));


