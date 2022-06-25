import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { TiEdit } from 'react-icons/ti';

    const Todo = ({ todos, removeTodo, updateTodo, completeTodo, importantTodo }) => {
        const [edit, setEdit] = useState ({
            id: null,
            value: ''
        });
            
        const submitUpdate = value => {
            updateTodo(edit.id, value);
            setEdit({
                id: null,
                value: ''
            });
        };
            
        if (edit.id) {
            return <TodoForm edit={edit} onSubmit={submitUpdate} />;
        }
        
        return todos.map((todo, index) => (
            <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
                {todo.text}
                <div className="iconsContainer">
                    <button onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
                    <TiEdit
                        onClick={() => setEdit({ id: todo.id, value: todo.text})}
                    />
                    <RiCloseCircleLine
                        onClick={() => removeTodo(todo.id)}
                    />
                    <BiCheckCircle
                        style={{ marginRight: 5 }}
                        onClick={() => completeTodo(todo.id)}
                    />
                </div>
            </div>
        ));
    }

export default Todo;
