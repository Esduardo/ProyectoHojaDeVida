import DivHojaVida from '../components/organism/DivHojaVida'
import '../assets/styles/HojaDeVida.css';
import TwoApartado from "../components/organism/TwoApartado";
import Extra from "../components/organism/Extra";
import Datos from "../components/organism/Datos";

function HojaVida() {
    return ( 
        <>
            <DivHojaVida/>
            <TwoApartado/>
            <Extra/>
            <Datos/>
        </>
     );
}

export default HojaVida;