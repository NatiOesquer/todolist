import { React, useState, useEffect } from 'react'
import TaskForm from '../taskForm/TaskForm';
import Task from '../task/Task';
import './taskList.css';

export default function TaskList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const tasksUpdated = [task, ...tasks];
            setTasks(tasksUpdated);
        }
    }

    const completeTask = id => {
        const tasksUpdated = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(tasksUpdated);
    }

    const deleteTask = id => {
        const tasksUpdated = tasks.filter(task => task.id !== id);
        setTasks(tasksUpdated);
    }
    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='tasks-list-container'>
                {tasks.map((task) =>
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                    />
                )}
            </div>
        </>
    )
}
