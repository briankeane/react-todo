var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var ToDoItem = require('ToDoItem');

describe('ToDoItem', () => {
  it ('should exist', () => {
    expect(ToDoItem).toExist();
  });

  it ('should call onToggle prop with id on click', () => {
    var toDoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var spy = expect.createSpy();
    var toDoItem = TestUtils.renderIntoDocument(<ToDoItem {...toDoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoItem));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(toDoData.id);
  });
});