import { createPortal } from "react-dom";
import React, { useState } from "react";

export default function AlertModal ({mensagem , onClose}){
    return createPortal (
        <dialog open>
            <section>
                <h2>Alerta de erro!</h2>
                <h3>{mensagem}</h3>
            </section>
            <section>
                <button onClick={onClose}>Ok</button>   
            </section>
            
            
        </dialog> , document.getElementById('modal-alert')
    )
}   