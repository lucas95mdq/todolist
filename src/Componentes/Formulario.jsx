import React, { useState } from 'react'

const Formulario = ({tarea, setTarea, list, setList, done, setDone}) => {



    const handleInput = (e) => {
        setTarea(e.target.value);
    }

    const handleClick = () => {
        setList([...list, tarea]);
        setTarea("");
        setDone([...done, false]);
    }


  return (
    <div>
        <input onChange={handleInput} value={tarea} type='text'></input>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Formulario