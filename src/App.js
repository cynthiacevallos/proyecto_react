import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import { useState } from 'react';
function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div className="App">
      <Header />
      {mostrarFormulario ?  <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
