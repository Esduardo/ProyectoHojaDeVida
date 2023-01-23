import Flor from '../../assets/img/flor.png'
import '../../assets/styles/sobreMi.css'

function SobreMi() {
    return ( 
        <div className='divSobreMi'>
            <h2 className='titleH2'>Sobre mi</h2>
            <img className='flor' src={Flor}/>
            <p>Hola! Mi nombre es Esduardo, tengo 19 años,<br/> 
                actualmente estoy estudiando en la<br/>
                 Universidad Politecnica de Chiapas.<br/><br/>

                Tengo conocimientos sobre muchos lenguajes ya.<br/>
                Actualmente soy musico.<br/><br/>

                Deseo compartir y trabajar con  empresas para<br/>
                mejorar mi entorno laboral
                Asi como otras cosas
            </p>    
        </div>
     );
}

export default SobreMi;