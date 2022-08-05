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
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add a new task ..." 
                        aria-label="Add a new task ..." aria-describedby="button-addon2"
                        value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={(() => adicionarTarefa(data, tarefa))}>+</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CriarTarefa;