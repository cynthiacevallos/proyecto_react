import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
import { useState } from 'react';

const Formulario  = () =>{
    const [nombre,setNombre] = useState('')
    const [puesto,setPuesto] = useState('')
    const [foto, setFoto] = useState('')

            //prevent default -> No recarga la pagina
        //console.log("Manejar el envio",e)
      
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" valor={nombre} actualizarValor={setNombre} placeholder="Ingresar nombre" required />
            <CampoTexto titulo="Puesto" valor={puesto} actualizarValor={setPuesto} placeholder="Ingresar puesto" required />
            <CampoTexto titulo="Foto" valor={foto} actualizarValor={setFoto} placeholder="Ingresar enlace de foto" required />
            <ListaOpciones />
            {/*<Boton texto="Crear colaborador"/>*/}
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;