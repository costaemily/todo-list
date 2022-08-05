import React, { Fragment, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "../listarTarefa/style.css"

const ListarTarefa = ( {listaTarefa, alteraTarefa, excluirTarefa} ) => {

    const mostarAlerta = (id, dataT, feita, tarefa) => {
        var task = prompt("Editar tarefa", tarefa)
        if(task == null){
            alteraTarefa(id, dataT, feita, tarefa, "tarefa")
        }else{
            alteraTarefa(id, dataT, feita, task, "tarefa")
        }
    }

    return(
        <Fragment>
            <div className="box">
                <div>
                        {
                            Object.entries(listaTarefa).map((tarefa) => {
                                return(                                 
                                    <div key={tarefa[1].id} className="listaItens">
                                        
                                        <div className="item">
                                            <input type="checkbox" checked={tarefa[1].done['stringValue'] == "False" ? false : true} 
                                                    onChange={() => alteraTarefa(tarefa[1].id, tarefa[1].dateTask['stringValue'], tarefa[1].done['stringValue'], tarefa[1].task['stringValue'], "done")}/>
                                        </div>
                                        <div className={tarefa[1].done['stringValue'] == "True" ? "itemFeito" : "itemNormal"}>
                                            <div>
                                                {tarefa[1].task['stringValue']}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <FaEdit onClick={() => mostarAlerta(tarefa[1].id, tarefa[1].dateTask['stringValue'], tarefa[1].done['stringValue'], tarefa[1].task['stringValue'])}/>
                                            <FaTrashAlt onClick={() => excluirTarefa(tarefa[1].id)}/>
                                        </div>        
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </Fragment>
    )
}

export default ListarTarefa;