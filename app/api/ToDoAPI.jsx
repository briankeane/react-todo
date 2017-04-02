module.exports = {
  setToDos: function (toDos) {
    if ($.isArray(toDos)) {
      localStorage.setItem('todos', JSON.stringify(toDos));
      return toDos;
    }
  },
  getToDos: function () {
    var stringToDos = localStorage.getItem('todos');
    var toDos = [];

    try {
      toDos = JSON.parse(stringToDos);
    } catch (e) {

    }
    if ($.isArray(toDos)) {
      return toDos;
    }
    else
    {
      return []; 
    }
  }
};