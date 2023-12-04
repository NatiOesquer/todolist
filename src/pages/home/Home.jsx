import React from 'react'
import '../home/home.css'
import Title from '../../components/title/Title'
import Notes from '../../components/notes/Notes'
import Logo from '../../components/logo/Logo'
import TaskList from '../../components/taskList/TaskList'
import Footer from '../../components/footer/Footer'



export default function Home() {
    return (
        <div className='title-app'>
            <Title />
            <div className='container'>
                <Notes />
                <div className='task-app'>
                    <div className='title-list'>
                        <h1>
                            ToDo List
                        </h1>
                        <img className='monster-title' src="assets/green-monster_notes.png" alt="Monster mancha" />
                    </div>
                    <Logo />
                    <TaskList />
                </div>
            </div>
            <Footer />
        </div>

    );
}
