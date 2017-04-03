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
    expect(toDoApp.state.todos[0].createdAt).toBeA('number');
  });

  it ('should toggle completed value when handleToggle called', () => {
    var toDoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({ todos: [toDoData] });

    expect(toDoApp.state.todos[0].completed).toBe(false);
    toDoApp.handleToggle(toDoData.id);
    expect(toDoApp.state.todos[0].completed).toBe(true);
    expect(toDoApp.state.todos[0].completedAt).toBeA('number');
  });

  it ('should toggle todo from completed to incompleted', () => {
    var toDoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({ todos: [toDoData] });

    expect(toDoApp.state.todos[0].completed).toBe(true);
    toDoApp.handleToggle(toDoData.id);
    expect(toDoApp.state.todos[0].completed).toBe(false);
    expect(toDoApp.state.todos[0].completedAt).toNotExist();
  });
});