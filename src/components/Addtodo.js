import React, { useState } from "react";
function AddTodo({onAddTodo}) {
    const [todo, setTodo] = useState('');
    const [completed, setCompleted] = useState('');
    const [userID, setUserID] = useState('');
    
    const makeNewId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    // Making a New ID for the todo list
    let newID = makeNewId();

    // create a new todo object
    const newTodo = {
        id: newID,
        todo,
        completed,
        userID,
    };
    if (typeof onAddTodo === "function"){
        onAddTodo(newTodo);
    }
 
    // Clear the form field after submission
    setTodo('')
    setCompleted('')
    setUserID('')
    
    };
    return(
        <div>
            <h2>Add New Todo</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Add Todo:</label>
                <input
                type="todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Enter</button>
            </div>
            </form>
        </div>
    );
}

export default AddTodo;