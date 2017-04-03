var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var ToDoList = require('ToDoList');
var ToDoItem = require('ToDoItem');

describe('ToDoList', () => {
  it ('should exist', () => {
    expect(ToDoList).toExist();
  });

  it ('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }]

    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ToDoItem)

    expect(toDosComponents.length).toBe(todos.length);
  });

  it ('should render empty message if no toDos', () => {
    var todos = []
    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(toDoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});