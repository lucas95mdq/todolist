import React, { useState } from 'react'

const List = ({list, setList}) => {

    const [edit, setEdit] = useState(null);
    const [newTodo, setNewTodo] = useState("");

    const handleEdit = (index, item) => {
        setEdit(index);
        setNewTodo(item)
    }

    const handleDelete =(index) => {
        const newList = [...list.slice(0, index), ...list.slice(index+1)]
        setList(newList);
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

  return (
    <div>
        <ul>
            {list?.map((item, index) => {
                return (
                <li key={index}>
                    {edit===index ? 
                    <><input type="text"  onChange={handleChange} value={newTodo}></input>
                    <button onClick={()=>handleConfirm(index, newTodo)}>Confirm</button></> :
                    <>
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