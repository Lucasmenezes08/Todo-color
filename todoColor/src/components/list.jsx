import { useState } from "react"
import { Progress } from "./progress";

export function Lista (){
    const [tarefas , setTarefas] = useState([]);
    const [novastarefas , setNovasTarefas] = useState('');
    const totalMaterias = tarefas.length;
    const materiasConcluidas = tarefas.filter(tarefa => tarefa.isCompleted).length;

    function handleInputText (event){
        setNovasTarefas(event.target.value)
    }


    function handleKeyDown (event){
        if (event.key === 'Enter'){
            event.preventDefault();
            adicionar();
        }
    }

    function handleCheckBox (idTarefa){
        setTarefas(tarefasAnteriores =>
            tarefasAnteriores.map((tarefa => 
                tarefa.id === idTarefa ? {...tarefa , isCompleted: !tarefa.isCompleted} : tarefa
            ))
        )
    }

    function adicionar (){
        const novaTarefaObjeto = {
            id: Date.now(), 
            text: novastarefas,
            isCompleted: false 
        };

        setTarefas(t => [...t , novaTarefaObjeto]);
        setNovasTarefas('');
    }

    function deletar (index){
        const tarefasReformatadas = tarefas.filter((task , i) => i !== index);
        setTarefas(tarefasReformatadas);
    }

    

    return (
        <section>
            <section>
                <h2>Minhas tarefas</h2>
                <button>+</button>
            </section>

            <input 
                type="text"
                id='items-input' 
                value={novastarefas}
                onChange={handleInputText}
                onKeyDown={handleKeyDown}
                placeholder="Adicione um item"  
                maxLength={30}>
            </input>

            <section>
                <progress value={materiasConcluidas} max={totalMaterias}></progress>
            </section>

            <section>
                <button type="button"></button>
                <ol>
                    {tarefas.map((tarefas , index) =>
                        <li key={tarefas.id}>
                            <section>
                                <input 
                                    type="checkbox" 
                                    checked={tarefas.isCompleted} 
                                    onChange={() => handleCheckBox(tarefas.id)}>
                                </input>
                                {tarefas.text}
                                <button onClick={() => deletar(index)} >Deletar</button>
                            </section>

                        </li>
                        
                    )}
                </ol>
                
            </section>

        </section>
    )
}