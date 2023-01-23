import SobreMi from "../atoms/SobreMi";
import Formacion from "../atoms/Formacion";

import Piano from '../../assets/img/piano.png'

import '../../assets/styles/TwoApartado.css'

function TwoApartado() {
    return ( 
        <>
            <div className="TwoApartado">
                <img className="piano" src={Piano}/>
                <Formacion/>
                <SobreMi/>
            </div>
        </>
     );
}

export default TwoApartado;