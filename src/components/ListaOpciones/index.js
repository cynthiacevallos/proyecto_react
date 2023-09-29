import './ListaOpciones.css'

const ListaOpciones = () => {
    const equipos = ["Front End","DevOps","Diseño","Programacion"]
    return <div className="campo-opciones">
        <label>Equipo</label>
        <select>
            {equipos.map((x,index)=><option key={index}>{x}</option>)}
        </select>
    </div>
}
export default ListaOpciones