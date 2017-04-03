var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');


var ToDoList = require('ToDoList');
var AddToDoForm = require('AddToDoForm');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getToDos()
    }
  },
  componentDidUpdate: function () {
    ToDoAPI.setToDos(this.state.todos);
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
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
        ]
      });
  },
  handleToggle: function (id) {
    var updatedTodDos = this.state.todos.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
        item.completedAt = item.completed ? moment().unix() : undefined;
      }
      return item; 
    });
    this.setState({
      todo: updatedTodDos
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <ToDoSearch onSearch={this.handleToDoSearch}/>
            <ToDoList todos={filteredToDos} onToggle={this.handleToggle}/>
            <AddToDoForm onAddToDo={this.handleAddToDo} />
          </div>
        </div>
      </div>
      );
  }
});


module.exports = ToDoApp;