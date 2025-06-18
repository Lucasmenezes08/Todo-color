import { useState } from 'react'
import './style/App.css'
import { Lista } from './components/list.jsx'

function App() {
    return (
        <section className='w-full h-[100vh] flex justify-center items-center bg-gradient-to-br from-pink-500 to-purple-700'>
            <Lista/>
        </section>

    )
}

export default App
