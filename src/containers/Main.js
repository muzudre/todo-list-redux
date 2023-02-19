import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo/AddTodo'
import TodoItem from '../components/TodoItem/TodoItem'
import { addTask, completedTask, deleteTask } from '../redux/actions'
import styles from './Main.style'

export class Main extends Component {
    render() {
        return (
            <div style={styles.appContainer}>
                <div style={styles.container}>
                    <h1 style={styles.title}>
                        <span>Task </span>
                        <span style={styles.subTitle}>List</span>
                    </h1>
                    <p style={styles.desc}>{this.props.taskItems.filter((task) => task.completed === true).length} of {this.props.taskItems.length} Task</p>
                    <div style={styles.inputWrapper}>
                        <AddTodo
                            addTask={(todo) => { this.props.addTodo(todo) }}
                        />
                        <hr style={styles.separator} />
                    </div>
                    {this.props.taskItems.length > 0 ?
                        <>
                            {this.props.taskItems.map((task, index) => {
                                return (<TodoItem
                                    key={index}
                                    task={task}
                                    deleteTask={(task) => this.props.deleteTask(task)}
                                    completedTask={(task) => this.props.completedTask(task)}
                                />)
                            })}
                        </>
                        :
                        <div style={{ textAlign: 'center', padding: 20 }}>
                            <img width='250' src={'https://www.gstatic.com/tasks/zero-state-room-400.png'} alt="task" />
                            <h3>No tasks yet</h3>
                            <p>Add your to-dos and keep track of them across workspace.</p>
                        </div>
                    }

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    taskItems: state.taskItems
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (task) => dispatch(addTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
    completedTask: (task) => dispatch(completedTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)