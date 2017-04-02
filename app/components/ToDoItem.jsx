var React = require('react');



var ToDoItem = React.createClass({
  render: function () {
    var {text, id, completed} = this.props;
    return (
        <div onClick={() => {
            this.props.onToggle(id)
          }
        }>
          <input type="checkbox" checked={completed} />
          {text}
        </div>
      )
  }
});

module.exports = ToDoItem;