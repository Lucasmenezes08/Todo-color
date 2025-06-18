import { useState } from "react"
import LinearProgress from '@mui/material/LinearProgress';
import LixeiraIcon from '../assets/lixeira.png';


export function Lista (){
    const [tarefas , setTarefas] = useState([]);
    const [novastarefas , setNovasTarefas] = useState('');
    const totalMaterias = tarefas.length;
    const materiasConcluidas = tarefas.filter(tarefa => tarefa.isCompleted).length;
    const barraProgresso = totalMaterias > 0 ? Math.round((materiasConcluidas / totalMaterias) * 100) : 0;


    console.log("--- Render Lista Component ---");
    console.log("Tarefas:", tarefas);
    console.log("Total Matérias:", totalMaterias);
    console.log("Matérias Concluídas:", materiasConcluidas);
    console.log("Barra de Progresso (0-100):", barraProgresso);



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

            <section className="w-full mb-4 flex-col-reverse">
                <p>{barraProgresso} %</p>
                <LinearProgress
                    variant="determinate"
                    value={barraProgresso}
                    sx={{width: '100%' ,
                        height: '1rem' , 
                        backgroundColor: 'gray' ,
                        borderRadius: '20px', 
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',

                         '& .MuiLinearProgress-bar': {
                            backgroundColor: 'black', 
                            borderRadius: '20px',  
                            transition: 'transform 0.5s ease-in-out', 
                        },
                    
                    }}
                />
            </section>

            <section className=" w-[100%] h-auto overflow-y-auto max-h-[calc(70vh-30vh)]" >
                <ol className="w-[100%] flex items-center flex-col">
                    {tarefas.map((tarefas , index) =>
                        <li key={tarefas.id} className="w-full flex items-center justify-between p-3 my-1 ">
                            <section className="flex items-center justify-center my-1">
                                <input 
                                    type="checkbox" 
                                    checked={tarefas.isCompleted} 
                                    onChange={() => handleCheckBox(tarefas.id)}
                                    className="w-5 h-6 text-blue-300 rounded focus:ring-blue-500"
                                    >
                                    
                                </input>
                                <section className="px-4 text-lg text-[#121417] font-sans font-normal">
                                    {tarefas.text}
                                </section>
                                
                            </section>
                            <button onClick={() => deletar(index)} >
                                <img src={LixeiraIcon}></img>
                            </button>

                        </li>
                        
                    )}
                </ol>
                
            </section>

        </section>
    )
}