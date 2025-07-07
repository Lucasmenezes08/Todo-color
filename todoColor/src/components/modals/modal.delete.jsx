import React from 'react'
import { createPortal } from 'react-dom'


export default function DeleteModal ({item , onDelete , onClose}){
    return createPortal(
        <dialog open>
            <h2>Deseja deletar essa tarefa: <strong>{item}</strong>?</h2>
            <section>
                <button onClick={onDelete}>Sim</button>
                <button onClick={onClose}>Não</button>
            </section>
        </dialog> , document.getElementById('modal-delete')
    )
}