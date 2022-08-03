import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { db } from '../database/connectionFirebase';

const tasksCol = collection(db, "taskList")

// Get a list of cities from your database
export async function listaTarefas() {
    const resp = []
    const querySnapshot = await getDocs(collection(db, "taskList"));
    querySnapshot.docs.forEach(doc => {
        
        let objecto = {
            id: doc.id,
            ...doc._document.data.value.mapValue.fields
        }
        resp.push(objecto)
    })
    //console.log(resp)
    return resp;
}

export async function criarTask(newDate, newDone, newTask){
    return await addDoc(tasksCol, {
        dateTask: newDate, 
        done: newDone, 
        task: newTask
    })
}

export async function atualizarTask(id, newDate, newDone, newTask){
    const idTask = doc(db, "taskList", `${id}`)
    //console.log(idTask)
    await updateDoc(idTask, {
        dateTask: newDate, 
        done: newDone, 
        task: newTask
      });
}

export async function deletarTask(id){
    await deleteDoc(doc(db, "taskList", id))
}