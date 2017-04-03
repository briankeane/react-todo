export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  };
};

export var addToDo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text
  };
}

export var toggleShowCompleted = (text) => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
}

export var toggleToDo = (text) => {
  return {
    type: 'TOGGLE_TODO'
  };
}