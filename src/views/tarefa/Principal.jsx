import { async } from "@firebase/util";
import React, { Fragment, useState, useEffect } from "react";
import CriarTarefa from "../../components/criarTarefa/Principal";
import ListarTarefa from "../../components/listarTarefa/Principal";
import { addTask, alterTask, deleteTask, listTask } from "../../controllers/taskController";
import "../tarefa/style.css"


const Principal = () => {

    const [listaTarefas, setListaTarefas] = useState([])
    const [feita, setFeita] = useState("False")

    const deleteTarefa = async(id) => {
        deleteTask(id)
        await listItems()
    }

    const altTarefa = async(id, dataTarefa, feitaTarefa, tarefa, opc) => {
        if(opc == "done"){
            if(feitaTarefa === "False"){
                feitaTarefa = "True"
            }else{
                feitaTarefa = "False"
            }
        }     
        alterTask(id, dataTarefa, feitaTarefa, tarefa) 
        await listItems()
    }

    const addTarefa = async(dataTarefa, tarefa) => {
        addTask(dataTarefa, feita, tarefa)
        await listItems()
    }

    const listItems = async () => {
        await listTask().then((data) => {
          setListaTarefas({ ...data })
        })
    }

    useEffect(() => {
        listItems()
    }, [])

    return(
        <div className="cont">
            <div className="text">
                <p>TO-DO LIST</p>
            </div>
            <CriarTarefa criarTarefa={addTarefa}/>
            <ListarTarefa listaTarefa={listaTarefas} alteraTarefa={altTarefa} excluirTarefa={deleteTarefa}/>
        </div> 
    )
}

export default Principal;