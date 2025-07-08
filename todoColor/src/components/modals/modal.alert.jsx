import { createPortal } from "react-dom";
import React, { useState } from "react";

export default function AlertModal ({mensagem , onClose}){
    return createPortal (
        <section className="fixed inset-0 z-50 bg-black/60" onClick={onClose} >
            <dialog open className="top-[calc(50%-130px)] left-[calc(50%-310px)] flex justify-center items-center rounded-2xl flex-col gap-6 w-[50%] h-[40vh]"
            onClick={(e) => e.stopPropagation()}>
                <section className="flex flex-col justify-center items-center gap-8">
                    <h2 className="text-2xl">Alerta de erro!</h2>
                    <h3 className="text-lg">{mensagem}</h3>
                </section>
                <section>
                    <button className="w-[5rem] h-[3rem] bg-gray-200 rounded-2xl cursor-pointer hover:bg-gray-300 transition ease-in-out" onClick={onClose}>Ok</button>   
                </section>
            </dialog>
        </section>
         , document.getElementById('modal-alert')
    )
}   