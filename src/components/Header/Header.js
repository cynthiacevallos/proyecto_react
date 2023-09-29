import "./Header.css"
import img from '../../assets/header.png'

function Header(){
    return <header className="header">
        <img  src={img} alt="org" />
    </header>
}
export default Header;