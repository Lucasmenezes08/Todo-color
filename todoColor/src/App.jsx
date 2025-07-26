import { useState } from 'react'
import './style/App.css'
import { Lista } from './components/list.jsx'
import ColorIcon from './components/colors/color-icon.jsx'

function App() {
    return (
        <section className='relative w-full h-screen flex justify-center items-center bg-gradient-to-br from-sky-300 to-sky-400'>
            <ColorIcon/>
            <Lista/>
        </section>

    )
}

export default App
