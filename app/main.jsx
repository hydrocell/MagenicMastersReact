'use strict';

import '../public/css/style.css';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Header = require('../app/components/common/header.js'); 
var Footer = require('../app/components/common/footer.js');
var Layout = require('../app/components/common/layout.js');

var Main = React.createClass({
    render: function() {
            return (
                <Layout>
                <div>
                <Header/>
                    <div className='section'>
                        {this.props.children}
                    </div>
                <Footer />
                </div>
                </Layout>
            )
    }
})

module.exports = Main;
