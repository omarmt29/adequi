
import logo from '../source/fondo2.png';
import mainpage from '../style/mainpage.css';

export default function Mainpage(){

    return(
        <>
            <div className="Main-container">

                {/* LOGO */}
                <div className='logo-container'>
                    <img src={logo}
                        alt='logo' id='logo' />

                </div>

                {/* NAVBAR */}
                <div className='navbar-container '>
                    <li class="nav-list" id="menu">
                        <a>Inicioo</a>
                        <a>Sobre nosotros</a>
                        <a>Actividadess</a>
                        <a>Transparencia</a>
                        <a>Contáctanos</a>
                    </li>

                </div>





                {/* SLIDER Aa LA IZQUIERDA */}

                {/* ASIDE DE NOTICIAS LA DERECHA */}

                {/* DIRECTIVA SLIDER */}

                {/* FOOTER */}









            </div>


        </>
    )

}