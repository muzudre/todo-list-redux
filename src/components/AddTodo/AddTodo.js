import React, { useState } from 'react'
import styles from './AddTodo.styles'

export default function AddTodo({ addTask }) {
    let [todo, setTodo] = useState('')

    return (
        <div style={styles.inputContainer}>
            <input
                style={styles.inputField}
                onChange={(event) => { setTodo(event.target.value) }}
                value={todo}
            />
            <button
                disabled={todo ? false : true}
                style={styles.submitButton}
                onClick={() => {
                    addTask(todo);
                    setTodo('')
                }}
            ><i className='fa fa-plus'></i></button>
        </div>
    )
}
