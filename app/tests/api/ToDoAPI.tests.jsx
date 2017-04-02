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
});