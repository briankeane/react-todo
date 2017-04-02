var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var AddToDoForm = require('AddToDoForm');

describe('AddToDoForm', () => {
  it ('should exist', () => {
    expect(AddToDoForm).toExist();
  });

  it ('should call onAddToDo prop with valid data', () => {
    var testText = 'Check email'
    var spy = expect.createSpy();
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDoForm onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.text.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(testText);
  });

  it ('should not call onAddToDo prop when invalid data', () => {
    var testText = ''
    var spy = expect.createSpy();
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDoForm onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.text.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});