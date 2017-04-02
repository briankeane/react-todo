var React = require('react');
var ToDoItem = require('ToDoItem');


var ToDoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderToDos = () => {
      return todos.map((todo) => {
        return <ToDoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>
      });
    };


    return (
        <div>
          {renderToDos()}
        </div>
      )
  }
});

module.exports = ToDoList;