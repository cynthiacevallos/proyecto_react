import './CampoTexto.css'
//import { useState } from 'react'

const CampoTexto = (props) => {
    //const [valor,setValor] = useState('')

    //console.log("DATOS: ",props)
    const placeholderMod = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input placeholder={placeholderMod} value={props.valor} onChange={(e)=>props.actualizarValor} required={props.required}  />
    </div>
}
export default CampoTexto