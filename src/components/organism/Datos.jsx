import Contacto from "../atoms/Contacto";
import Experiencia from "../atoms/Experiencia";
import Programar from "../atoms/Programar";

import '../../assets/styles/Datos.css'

function Datos() {
    return ( 
        <div className="Datos">
            <div className="containerDatos">
                <Contacto/>
                <br/>
                <Programar/>
            </div>
            <Experiencia/>
        </div>
     );
}

export default Datos;