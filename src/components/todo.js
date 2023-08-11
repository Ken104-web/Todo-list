import React from "react";
import AddTodo from "./Addtodo";

function TodoList({todos, onAddTodo}) {
    return (
        <div>
    <h1>My Todo list</h1>
        <AddTodo  onAddTodo={onAddTodo}/>
        {todos.map(todo => (
            <ul key={todo.id}>
                <li>{todo.todo}</li>
                <li>{todo.completed ? 'Completed' : 'Not Completed'}</li>
            </ul>
        ))}
    </div>
    );
}

export default TodoList;