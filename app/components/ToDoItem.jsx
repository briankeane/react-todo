var React = require('react');



var ToDoItem = React.createClass({
  render: function () {
    var {text, id} = this.props;
    return (
        <div>
          {id}. {text}
        </div>
      )
  }
});

module.exports = ToDoItem;