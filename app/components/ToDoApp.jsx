var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        }, {
          id: 2,
          text: 'clean the yard'
        }, {
          id: 3,
          text: 'do other shit'
        }, {
          id: 4,
          text: 'do lots of shit'
        }
      ]
    }
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <ToDoList todos={todos}/>
      </div>
      );
  }
});


module.exports = ToDoApp;