import React from 'react'
import { createPortal } from 'react-dom'


export default function DeleteModal ({item , onDelete , onClose}){
    return createPortal(
        <section className='fixed inset-0 z-50 bg-black/60' onClick={onClose}>
            <dialog className='top-[calc(50%-130px)] left-[calc(50%-310px)] flex justify-center items-center rounded-2xl flex-col gap-6 w-[50%] h-[40vh]' open>
                <h2 className='text-xl'>Deseja deletar essa tarefa: <strong>{item}</strong>?</h2>
                <section className='flex gap-10 py-3'>
                    <button className='h-[3rem] w-[5rem] bg-gray-300 rounded-2xl cursor-pointer hover:bg-gray-400 transition ease-in-out' onClick={onDelete}>Sim</button>
                    <button className='h-[3rem] w-[5rem] bg-sky-300 rounded-2xl  cursor-pointer hover:bg-sky-400 transition ease-in-out' onClick={onClose}>Não</button>
                </section>
            </dialog> 
        </section>,  
        document.getElementById('modal-delete')
    )
}