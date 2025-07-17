import { createPortal } from "react-dom";
import React, { useState } from "react";

export default function AlertModal ({mensagem , onClose}){
    return createPortal (
        <section className="fixed inset-0 z-50 bg-black/60" onClick={onClose} >
            <dialog open className="absolute flex flex-col items-center w-[65%] max-h-[65vh] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-4 bg-gray-100 rounded-lg shadow-lg z-5"
            onClick={(e) => e.stopPropagation()}>
                <section className="flex flex-col justify-center items-center gap-8">
                    <h2 className="text-2xl">Alerta de erro!</h2>
                    <h3 className="text-lg py-4">{mensagem}</h3>
                </section>
                <section>
                    <button className="w-[5rem] h-[3rem] bg-gray-200 rounded-2xl cursor-pointer hover:bg-gray-300 transition ease-in-out" onClick={onClose}>Ok</button>   
                </section>
            </dialog>
        </section>
         , document.getElementById('modal-alert')
    )
}   