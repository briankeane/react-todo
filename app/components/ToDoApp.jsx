var React = require('react');
var uuid = require('node-uuid');


var ToDoList = require('ToDoList');
var AddToDoForm = require('AddToDoForm');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dog'
        }, {
          id: uuid(),
          text: 'clean the yard'
        }, {
          id: uuid(),
          text: 'do other shit'
        }, {
          id: uuid(),
          text: 'do lots of shit'
        }
      ]
    }
  },
  handleToDoSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddToDo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(),
          text: text
        }
        ]
      });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <ToDoSearch onSearch={this.handleToDoSearch}/>
            <ToDoList todos={todos}/>
            <AddToDoForm onAddToDo={this.handleAddToDo} />
          </div>
        </div>
      </div>
      );
  }
});


module.exports = ToDoApp;