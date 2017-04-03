var React = require('react');
var moment = require('moment');



var ToDoItem = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var toDoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completedAt) {
        message = 'Completed ';
        timestamp = createdAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');

    }
    return (
        <div className={toDoClassName} onClick={() => {
            this.props.onToggle(id)
          }
        }>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
      )
  }
});

module.exports = ToDoItem;