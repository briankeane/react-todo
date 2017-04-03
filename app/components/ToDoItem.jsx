var React = require('react');
var moment = require('moment');



var ToDoItem = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
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
        <div onClick={() => {
            this.props.onToggle(id)
          }
        }>
          <input type="checkbox" checked={completed} />
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
      )
  }
});

module.exports = ToDoItem;