import React, {useState} from 'react'
import Formulario from './Componentes/Formulario';
import List from './Componentes/List';

const App = () => {

  const [tarea, setTarea] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>Tareas</h1>
      <Formulario tarea={tarea} setTarea={setTarea} list={list} setList={setList}/>
      <List list={list} setList={setList} />
    </div>
  )
}

export default App