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
  },
  filterToDos: function (toDos, showCompleted, searchText) {
    var filteredToDos = toDos;

    // filter by showCompleted
    filteredToDos = filteredToDos.filter((item) => { 
      return !item.completed || showCompleted;
    });

    // filter by searchText
    if (searchText.length > 0) {
      filteredToDos = filteredToDos.filter((item) => {
        if (item.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          return true
        }
        return false
      });
    }
    // sort toDos with nonCompleted first
    filteredToDos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredToDos;
  }
};