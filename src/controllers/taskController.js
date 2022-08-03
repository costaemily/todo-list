import { atualizarTask, criarTask, deletarTask, listaTarefas } from "../services/taskService";

export const addTask = (data, feita, tarefa) => {
    return criarTask(data, feita, tarefa)
}

export const listTask = () => {
    return listaTarefas()
}

export const alterTask = (id, data, feita, tarefa) => {
    return atualizarTask(id, data, feita, tarefa)
}

export const deleteTask = (id) => {
    return deletarTask(id)
}