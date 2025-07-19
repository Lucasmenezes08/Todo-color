import { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import LixeiraIcon from '../assets/lixeira.png';
import DeleteModal from './modals/modal.delete';
import AlertModal from "./modals/modal.alert";


export function Lista (){
    const [tarefas , setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        if (tarefasSalvas){
            return JSON.parse(tarefasSalvas);
        }
        return [];
    });
    const [novastarefas , setNovasTarefas] = useState('');
    const [validarConteudo , setValidarConteudo] = useState(false);
    const [modalOpen , setModalOpen] = useState(null);
    const [modalAlertClose , setModalAlertClose] = useState(false)
    const [mensagemAlerta, setMensagemAlerta] = useState('');
    const totalMaterias = tarefas.length;
    const materiasConcluidas = tarefas.filter(tarefa => tarefa.isCompleted).length;
    const barraProgresso = totalMaterias > 0 ? Math.round((materiasConcluidas / totalMaterias) * 100) : 0;


    function handleInputText (event){
        setNovasTarefas(event.target.value);
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

    function handleModalOpen (tarefa){
        setModalOpen(tarefa);
    }

    function handleModalClose (){
        setModalOpen(null);
    }


    function handleModalAlertOpen (){
        setModalAlertClose(true)
    }

    function adicionar (){

        setValidarConteudo(false);
        const novaTarefaObjeto = {
            id: Date.now(), 
            text: novastarefas,
            isCompleted: false 
        };

     

        if (novastarefas.trim() === ''){
            handleModalAlertOpen();
            setMensagemAlerta('Envio de conteudo vazio, por favor envie novamente!')
            setValidarConteudo(true);
            return;
        }

        const tarefaJaExiste = tarefas.some(tarefa => tarefa.text.trim().toLowerCase() === novastarefas.trim().toLocaleLowerCase());

        if (tarefaJaExiste){
            handleModalAlertOpen();
            setMensagemAlerta('A tarefa já existe na lista.')
            setValidarConteudo(true);
            return;
        }

        setTarefas(t => [...t , novaTarefaObjeto]);
        setNovasTarefas('');
    }

    function deletar (){
        if (modalOpen){
            const tarefasReformatadas = tarefas.filter(task => task.id !== modalOpen.id);
            setTarefas(tarefasReformatadas);
            handleModalClose();
        }
    }


    useEffect(()=> {
        localStorage.setItem('tarefas' , JSON.stringify(tarefas));

    }, [tarefas])

    return (
        <section className="min-w-[30%] min-h-[70vh] max-h-auto flex flex-col justify-start items-center bg-white overflow-auto rounded-2xl box-border shadow-3xl py-6 px-4">
            <section className="">
                <h2 className="font-medium text-xl font-sans mb-[2rem]">Minhas tarefas</h2>
            </section>

            <section className="w-full mb-[1.5rem]">
                <input 
                    className={`w-[100%] h-[9vh] bg-[#f0f2f5] overflow-hidden focus:outline-0 focus:ring-0 resize-none rounded-xl shadow-xs text-start px-3 mb-[2rem] hover:bg-[#e0e1e0] transition ease-in-out ${validarConteudo ? "border-1 border-red-500": "border-none"}`}
                    type="text"
                    id='items-input' 
                    value={novastarefas}
                    onChange={handleInputText}
                    onKeyDown={handleKeyDown}
                    placeholder="Adicione um item"  
                    maxLength={30}>
                </input>

                <p className={`mt-[-2rem] text-end px-4 ${novastarefas.length >= 15 && novastarefas.length < 30 ? 'text-yellow-500' : ''} ${novastarefas.length == 30 ? 'text-red-500' : ''}`}>{novastarefas ? novastarefas.length : 0}/30</p>
            </section>
            
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
            
            {totalMaterias === 0 ? (
                <p>Sem tarefas registradas</p>

            ):(

                <section className=" w-[100%] h-auto overflow-y-auto max-h-[calc(70vh-30vh)]" >
                <ol className="w-[100%] flex items-center flex-col">
                    {tarefas.map((tarefas , index) =>
                        <li key={tarefas.id} className="w-full flex items-center justify-between p-3 my-1 hover:bg-gray-200 rounded-2xl transition ease-in-out">
                            <section className="flex items-center justify-center my-1">
                                <input 
                                    type="checkbox" 
                                    checked={tarefas.isCompleted} 
                                    onChange={() => handleCheckBox(tarefas.id)}
                                    className="w-5 h-6 text-blue-300 rounded focus:ring-blue-500 cursor-pointer"
                                    >
                                    
                                </input>
                                <section className="px-4 text-lg text-[#121417] font-sans font-normal">
                                    {tarefas.text}
                                </section>
                                
                            </section>
                            <button onClick={() => handleModalOpen(tarefas)} 
                                    className="w-5 h-6 cursor-pointer"
                                >
                                <img src={LixeiraIcon}></img>
                            </button>

                        </li>
                        
                    )}
                </ol>
                
            </section>

            )
        }


         {modalOpen && (
            <DeleteModal 
            item={modalOpen.text}
            onDelete={deletar}
            onClose={handleModalClose}
            />
        )}
        

        {mensagemAlerta && (
            <AlertModal 
            mensagem={mensagemAlerta}
            onClose={() => setMensagemAlerta('')}
            />
        )}
        
        </section>  
    )
}