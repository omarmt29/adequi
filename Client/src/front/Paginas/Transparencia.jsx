
import Navbar from "../Navbar/Navbar";
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/Transparencia.css';
import { useEffect, useState} from 'react';


function Transparencia() {
    


    return (
        <>
            <div className="main-container">
               <div className="nav-contenedor"> <Navbar/></div>


                <div className="containter-section">

                    <h2 className="titulo">Más informacion aqui.</h2>
                    <p className='subtitulo'>Es un hecho establecido hace demasiado tiempo lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal</p>

                    <div className="card-container" >
                        <div className="card" id='cardc'>
                            <FontAwesomeIcon icon={faFile} className='file'></FontAwesomeIcon>
                            <h3 id='h3'>PDF</h3>
                            <p>es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faFile} className='file'></FontAwesomeIcon>
                            <h3>PDF</h3>
                            <p>es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faFile} className='file'></FontAwesomeIcon>
                            <h3>PDF</h3>
                            <p>es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faFile} className='file'></FontAwesomeIcon>
                            <h3>PDF</h3>
                            <p>es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum</p>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )

}

export default Transparencia;