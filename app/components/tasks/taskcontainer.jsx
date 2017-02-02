'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TaskList = require('../../../app/components/tasks/taskdetails.jsx');

if (localStorage.getItem('reactjs-data') != null) {
    localStorage.clear();
}
  var reactjsJSON = '[{"taskid": "1", "name":"Finish Week 1 Deck", "description":"Introduction to React, Component, JSX", "priority":"Medium", "status":"Done"}, {"taskid": "2", "name":"Finish Week 1 Quiz", "description":"Introduction to MMR", "priority":"Medium", "status":"Done"}, {"taskid": "3",                       "name":"Finish Week 3 Deck", "description":"Props and States", "priority":"Medium", "status":"Done"}]';  

  localStorage.setItem('reactjs-data', reactjsJSON);

var Panel = ReactBootstrap.Panel;

 var TaskContainer = React.createClass( {  
   getInitialState: function(){
        return {data:[]};
    },
    loadData: function (){
        var reactdata = JSON.parse(localStorage.getItem('reactjs-data'));
        this.setState({data: reactdata});
    },
    componentDidMount: function () {
    this.loadData();        
    },
   render: function() {
     return (
         <div className="innersection">
            <Panel header='Task Master List' bsStyle="primary">
                  <div className="tableHeader" >
                    <div className="col-md-4" >Task Details</div>
                    <div className="col-md-4" >Priority</div>
                    <div className="col-md-4" >Status</div>        
                    </div>
                    <TaskList data = {this.state.data} />                    
            </Panel>                                
         </div>                  
         )
   }
 });


module.exports = TaskContainer;