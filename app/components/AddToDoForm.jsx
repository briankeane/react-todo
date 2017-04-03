var React = require('react');

var AddToDoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.text.value;

    if (text !== "") {
      this.refs.text.value = "";
      this.props.onAddToDo(text);
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
          <input type="text" ref="text" placeholder="Enter something to do"/>
          <button className="button expanded">Add Item</button>
        </form>
      </div>
      );
  }
});

module.exports = AddToDoForm;