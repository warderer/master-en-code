import React, {useEffect, useState} from 'react';
import './App.css';
import ApiRequest from './utils/ApiRequest';
import useForm from './hook/useForm';
import EmployeeInputs from './components/EmployeeInputs';

function App() {
  const [datos, setDatos] = useState([]);
  const URI = 'http://d98d95a964fc.ngrok.io/employees';

  useEffect( ()=>{
      ApiRequest(URI,'',setDatos)
  },[])

  console.log("Este es el valor de la API",datos);

  const sendData = (data) => {
    console.log("Esta es mi data final-->",data);
  }

  const {inputs, handleInputChange, handleSubmit} = useForm(sendData, datos);

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
          
        {datos.map((element,index) => <EmployeeInputs index={index} inputs={inputs} handler={handleInputChange}/>)}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
