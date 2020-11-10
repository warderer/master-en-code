import React from 'react';
import './App.scss';
import useForm from './hook/useForm';

function App() {
  //Mala practica
  //const [nombre, setNombre] = useState['']
  //const [apellido, setApellidos] = useState['']
  //const [email, setEmail] = useState['']

  const sendData = (data) => {
    //Aca mandamos la info a la API
    console.log("Esta es mi data final-->",data);
  }

  const {inputs, handleInputChange, handleSubmit} = useForm(sendData);

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nombre" 
          onChange={handleInputChange}
          value={inputs.nombre}
          placeholder="tu nombre"
        />

        <input 
          type="text"
          name="apellidos"
          onChange={handleInputChange}
          value={inputs.apellidos}
          placeholder="tus apellidos"
        />


        <input 
          type="email" 
          name="email" 
          onChange={handleInputChange}
          value={inputs.email}
          placeholder="tu email"
        />

        <input 
          type="password" 
          name="password" 
          onChange={handleInputChange}
          value={inputs.email}
          placeholder="tu password"
        />
        
        <select name="genero" onChange={handleInputChange} value={inputs.genero}>
          <option value="">Elige un genero</option>
          <option value="H">Hombre</option>
          <option value="M">Mujer</option>
        </select>

        <input 
          type="number" 
          name="edad" 
          onChange={handleInputChange}
          value={inputs.edad}
          placeholder="tu edad"/>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
