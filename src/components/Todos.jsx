import React, {useState} from 'react'

function Todo ({todo, removeTodo, index, completeTodo}) {
    return(
        <div className='todo' style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            {todo.text}
            <div className='buttons'>
                <button className='delete' onClick={() => removeTodo(index)}>X</button>
                <button className='complete' onClick={() => completeTodo(index)}>Complete Todo</button>
            </div>
        </div>
    )
}

function TodoForm ({addTodo}) {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} type='text' />
        </form>
    )
}

const Todos = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }

    const removeTodo = (index) => {
        const newTodos = [...todos]
        setTodos(newTodos)
        newTodos.splice(index, 1)
    }

    const completeTodo = (index) => {
        const newTodos = [...todos]
        setTodos(newTodos)
        newTodos[index].isCompleted = true
    }
  return (
    <div className='app'>
        <div className='todo-app'>
            <h1>Your Todos</h1>
            <div className='todo-list'>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo todo={todo} key={index} index={index} removeTodo={removeTodo} completeTodo={completeTodo} />
                ))}
            </div>
            </div>
    </div>
  )
}

export default Todos