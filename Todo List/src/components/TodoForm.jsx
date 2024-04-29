import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("")
    // here we setting up state for the single todo item.
    const {addTodo} = useTodo()
    // here we have put addTodo into curly braces{} beacuse it is an object that we have imported from TodoContext.js file.

    const add = (e) => {
        e.preventDefault()
    
        if (!todo) return
    
        console.log("Adding todo:", todo); // Add this line for debugging
    
        addTodo({ todo, completed: false })
        setTodo("")
    }
    

    // console.log(add);

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


