import React from 'react'
import styles from './TodoItem.styles'

export default function TodoItem({ task, deleteTask, completedTask }) {
    return (
        <div>
            <div style={styles.taskContainer}>
                <div style={{ ...styles.taskWrapper, backgroundColor: task.completed ? '#f4f3f8' : null }}>
                    <p
                        style={
                            {
                                ...styles.task,
                                textDecoration: task.completed ? 'line-through' : 'none',
                                color: task.completed ? '#e13534' : 'black'
                            }
                        }
                        onClick={() => completedTask(task.text)}
                    >{task.text}</p>
                    <div style={styles.iconsWrapper}>
                        {/* <i
                            className={task.completed ? `fa  fa-check-circle` : `fa  fa-check-circle-o`}
                            style={{ ...styles.completedIcon, color: task.completed ? '#e13534' : '#1ea176' }}

                        ></i> */}
                        <i
                            className='fa fa-trash-o'
                            style={styles.deletedIcon}
                            onClick={() => deleteTask(task.text)}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
