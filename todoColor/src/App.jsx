import { useState } from 'react'
import './style/App.css'
import { Lista } from './components/list.jsx'

function App() {
    return (
        <section className='w-full h-screen flex justify-center items-center bg-gradient-to-br from-sky-300 to-sky-400'>
            <Lista/>
        </section>

    )
}

export default App
