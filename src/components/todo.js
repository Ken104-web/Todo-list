import React from "react";

function TodoList({todos}) {
    return (
        <div>
    <h1>My Todo list</h1>
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