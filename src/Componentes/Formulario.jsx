import React, { useState } from 'react'

const Formulario = ({tarea, setTarea, list, setList}) => {



    const handleInput = (e) => {
        setTarea(e.target.value);
    }

    const handleClick = () => {
        setList([...list, tarea]);
        setTarea("");
    }


  return (
    <div>
        <input onChange={handleInput} value={tarea} type='text'></input>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Formulario