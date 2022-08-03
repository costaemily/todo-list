import React, { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../criarTarefa/style.css"

const CriarTarefa = ( {criarTarefa} ) => {

    const [tarefa, setTarefa] = useState("")
    const [data, setData] = useState("")

    const adicionarTarefa = (date, task) => {
        criarTarefa(date, task)
        limparCampos()
    }

    const limparCampos = () => {
        setTarefa("")
        setData("")
    }

    return(
        <Fragment>
            <div className="box">
                <div className="itens">
                    <input placeholder="Adicione uma tarefa" type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)}></input>
                </div>
                <div className="itens">
                    <input type="date" value={data} onChange={(e) => setData(e.target.value)}></input>
                </div>
                <div className="itens">
                    <FaPlus onClick={(() => adicionarTarefa(data, tarefa))}/>
                </div>
                
            </div>
        </Fragment>
    )
}

export default CriarTarefa;