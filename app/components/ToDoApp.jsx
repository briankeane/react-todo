var React = require('react');
var ToDoList = require('ToDoList');
var AddToDoForm = require('AddToDoForm');

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
  handleAddToDo: function (text) {
    var newToDos = this.state.todos;
    newToDos.push({
          id: this.state.todos[this.state.todos.length-1].id + 1,
          text: text
        });
    this.setState({
      todos: newToDos
      });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <ToDoList todos={todos}/>
            <AddToDoForm onAddToDo={this.handleAddToDo} />
          </div>
        </div>
      </div>
      );
  }
});


module.exports = ToDoApp;