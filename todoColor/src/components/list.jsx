import { useState } from "react"

export function Lista (){
    const [tarefas , setTarefas] = useState([]);
    const [novastarefas , setNovasTarefas] = useState('');

    function handleInputText (event){
        setNovasTarefas(event.target.value)
    }


    function handleKeyDown (event){
        if (event.key === 'Enter'){
            event.preventDefault();
            adicionar();
        }
    }

    function adicionar (){
        setTarefas(t => [...t , novastarefas]);
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
                <p>complete</p>
                <section></section>
            </section>

            <section>
                <button type="button"></button>
                <ol>
                    {tarefas.map((tarefas , index) =>
                        <li key={index}>
                            <section>
                                {tarefas}
                                <button key={index} onClick={() => deletar(index)} >Deletar</button>
                            </section>

                        </li>
                        
                    )}
                </ol>
                
            </section>

        </section>
    )
}