import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoItem() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    let removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });
    setTodos(updatedTodos)
  };

  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <Todo
            todos={todos} key={todo.id}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            importantTodo={importantTodo}
          />
        )
      })}
    </div>
  );
}

export default TodoItem;
