import React from 'react'
import { createPortal } from 'react-dom'


export default function DeleteModal ({item , onDelete , onClose}){
    return createPortal(
        <section className='fixed inset-0 z-50 bg-black/60' onClick={onClose}>
            <dialog className='absolute flex flex-col items-center justify-center w-[65%] max-h-[65vh] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-4 bg-gray-100 rounded-lg shadow-lg z-5' open onClick={(e) => e.stopPropagation()}>
                <h2 className='text-xl'>Deseja deletar essa tarefa: <strong>{item}</strong>?</h2>
                <section className='flex gap-10 py-10'>
                    <button className='h-[3rem] w-[5rem] bg-gray-300 rounded-2xl cursor-pointer hover:bg-gray-400 transition ease-in-out' onClick={onDelete}>Sim</button>
                    <button className='h-[3rem] w-[5rem] bg-sky-300 rounded-2xl  cursor-pointer hover:bg-sky-400 transition ease-in-out' onClick={onClose}>Não</button>
                </section>
            </dialog> 
        </section>,  
        document.getElementById('modal-delete')
    )
}