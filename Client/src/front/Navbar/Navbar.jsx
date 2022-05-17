import { NavLink } from "react-router-dom";
import { useState } from 'react'
import '../style/navbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../source/fondo2.png';

function Navbar() {

    const [show, setShow] = useState(true);
    let menus = show ? ('menu') : ('menu-off');
    


    return (

        <div className='header' >

            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className="icon-container" id='icon' onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faBars} className='icon'></FontAwesomeIcon>

            </div>
            <div className={menus} id="menu">
                <div className="nav-container">
                    <NavLink to="/" activeClassName="active" className="link">Inicio</NavLink>
                    <NavLink to="/transparencia" activeClassName="active" className="link">transparencia</NavLink>
                    <NavLink to="/Actividades" activeClassName="active" className="link">Actividades</NavLink>
                    <NavLink to="/Contactanos" activeClassName="active" className="link">Contáctanos</NavLink>
                </div>
            </div>


        </div>
    )

}
export default Navbar;