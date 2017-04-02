var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it ('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it ('should add todo to the todos state on handleAddToDo', () => {
    var toDoText = 'test text';
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    toDoApp.setState({ todos: [] });
    toDoApp.handleAddToDo(toDoText);

    expect(toDoApp.state.todos.length).toBe(1);
    expect(toDoApp.state.todos[0].text).toBe(toDoText);
  });
});