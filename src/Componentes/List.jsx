import React, { useState } from 'react'

const List = ({list, setList, done, setDone}) => {

    const [edit, setEdit] = useState(null);
    const [newTodo, setNewTodo] = useState("");

    const handleEdit = (index, item) => {
        setEdit(index);
        setNewTodo(item)
    }

    const handleDelete =(index) => {
        const newList = [...list.slice(0, index), ...list.slice(index+1)]
        const newDone = [...done.slice(0, index), ...done.slice(index+1)]
        setList(newList);
        setDone(newDone);   
    }
    const handleConfirm = (index, newTodo) =>{
        setEdit(null);
        const newList = [...list];
        newList[index] = newTodo;
        setList(newList)
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }

    const handleChecked = (index, value) => {
        const newDone = [...done]
        newDone[index]= !value
        setDone(newDone)
    }

  return (
    <div>
        <ul>
            {list?.map((item, index) => {
                return (
                <li key={index}>

                    {edit===index ? 
                    <>
                    <input type="checkbox" checked={done[index]} onChange={() => handleChecked(index, done[index])}></input>
                    <input type="text"  onChange={handleChange} value={newTodo}></input>
                    <button onClick={()=>handleConfirm(index, newTodo)}>Confirm</button></> :
                    <>
                    <input type="checkbox" checked={done[index]} onChange={() => handleChecked(index, done[index])}></input>
                    <h3>{item}</h3> 
                    <button onClick={() => handleEdit(index, item)}>editar</button>                    
                    <button onClick={() => handleDelete(index)}>eliminar</button>
                    </> 
                    }
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List