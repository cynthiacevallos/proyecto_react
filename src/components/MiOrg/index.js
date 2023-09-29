import './MiOrg.css'
import { useState } from 'react'
import add from '../../assets/add.png'

const MiOrg = (props) => {
    //Estado - hooks: funcionalidades con el comportamiento de React|
    //useState
    const [nombre,actualizarNombre] = useState("")
    const [mostrar,actualizarMostrar] = useState(false)
    
    console.log(props)
    const manejarClick = () => {
        console.log("Mostrar elemento",!mostrar)
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion {nombre}</h3>
        <img src={add} alt="add" onClick={props.cambiarMostrar} />
    </section>
}
export default MiOrg