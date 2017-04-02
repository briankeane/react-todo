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
});