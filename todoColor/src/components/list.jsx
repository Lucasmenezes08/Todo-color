import { useState } from "react"


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

     

        if (novastarefas.trim() === ''){
            console.log ("Input vazio");
            return;
        }

        const tarefaJaExiste = tarefas.some(tarefa => tarefa.text.toLowerCase() === novastarefas.trim().toLocaleLowerCase());

        if (tarefaJaExiste){
            console.log("Tarefa ja existe!");
            return;
        }

        setTarefas(t => [...t , novaTarefaObjeto]);
        setNovasTarefas('');
    }

    function deletar (index){
        const tarefasReformatadas = tarefas.filter((task , i) => i !== index);
        setTarefas(tarefasReformatadas);
    }

    

    return (
        <section className="min-w-[30%] min-h-[70vh] max-h-auto flex flex-col justify-start items-center bg-white overflow-auto rounded-2xl box-border shadow-3xl py-6 px-4">
            <section className="">
                <h2 className="font-medium text-xl font-sans mb-[2rem]">Minhas tarefas</h2>
            </section>

            <input 
                className="w-[100%] h-[9vh] bg-[#f0f2f5] overflow-hidden border-none focus:outline-0 focus:ring-0 resize-none rounded-xl shadow-xs text-start px-3 mb-[2rem]"
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