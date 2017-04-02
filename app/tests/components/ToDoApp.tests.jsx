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
});