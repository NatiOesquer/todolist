import React from 'react'
import './notes.css'

export default function Notes() {
    return (
        <div className='container-notes'>
            <div className='header-notes'>
                <img className='monster-notes' src="assets/green-monster_notes.png" alt="Mounstruo mancha" />
                <h1>Notes</h1>
            </div>

            <div className='container-inputs'>
                <input
                    className='input-notes'
                    type='text'
                    name='text'
                    autoComplete='off'
                />
                <input
                    className='input-notes'
                    type='text'
                    name='text'
                    autoComplete='off'
                />
                <input
                    className='input-notes'
                    type='text'
                    name='text'
                    autoComplete='off'
                />
                <input
                    className='input-notes'
                    type='text'
                    name='text'
                    autoComplete='off'
                />
                <input
                    className='input-notes'
                    type='text'
                    name='text'
                    autoComplete='off'
                />
                <input
                    className='input-notes'
                    type='text'
                    name='text'
                    autoComplete='off'
                />

            </div>
            <div className='container-icono'>
                <img className='icono-notes' src="assets/baby-monster.png" alt="Logo" />
            </div>
        </div>
    )
}
