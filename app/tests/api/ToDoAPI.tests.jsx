var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
  it ('should exist', () => {
    expect(ToDoAPI).toExist();
  });

  describe('setToDos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    it ('should set valid toDos array', () => {
      var toDos = [
        {
          id: 23,
          test: 'test all files',
          completed: false
        }
      ];
      ToDoAPI.setToDos(toDos);

      var actualToDos = JSON.parse(localStorage.getItem('todos'));
      expect(actualToDos).toEqual(toDos);
    });

    it ('should not set invalid toDos array', () => {
      var badToDos = {a: 'test', b: 'fuck' };
      ToDoAPI.setToDos(badToDos);

      var actualToDos = JSON.parse(localStorage.getItem('todos'));
      expect(actualToDos).toBe(null);
    });
  });

  describe('getToDos', () => {
    it ('does not get invalid data', () => {
      var actualToDos = ToDoAPI.getToDos();
      expect(actualToDos).toEqual([]);
    });

    it ('gets valid data', () => {
      var toDos = [
        {
          id: 23,
          test: 'test all files',
          completed: false
        }
      ];

      localStorage.setItem('todos', JSON.stringify(toDos));

      var actualToDos = ToDoAPI.getToDos(); 
      expect(actualToDos).toEqual(toDos);
    });
  });

  describe('filterToDos', () => {
    var toDos = [{
      id: 1,
      text: 'Some Text Here',
      completed: true
    }, {
      id: 2,
      text: 'Other Text Here',
      completed: false
    }, {
      id: 3,
      text: 'Still More Text Here',
      completed: true
    }]

    it ('firstTestDescription', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
      expect(filteredToDos.length).toBe(3);
    });

    it ('firstTestDescription', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, false, '');
      expect(filteredToDos.length).toBe(1);
    });

    it ('should sort by completed status', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
      expect(filteredToDos[0].completed).toBe(false);
    });

    it ('should filter toDos by searchText', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, 'More');
      expect(filteredToDos.length).toBe(1);
      expect(filteredToDos[0].id).toBe(3);
    });

    it ('should return all todos if empty searchText', () => {
      var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
      expect(filteredToDos.length).toBe(3);
    });
  });
});