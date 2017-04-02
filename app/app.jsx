var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <ToDoApp/>,
  document.getElementById('app')
);
