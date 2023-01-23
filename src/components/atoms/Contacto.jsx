import contacto from '../../assets/img/email.png';
import mailbox from '../../assets/img/mailbox.png';
import facebook from  '../../assets/img/facebook.png';
import instagram from  '../../assets/img/instagram.png';

import '../../assets/styles/Contacto.css';

function Contacto() {
    return ( 
        <div className='contactoContainer'>
            <div className='div-container-flex-container-contacto'>
                <img className='contacto' src={contacto}/>
                <h1 className='titleContacto'>Contacto</h1>
            </div>
            <div className='div-container-flex'>
                <img className='mailbox' src={mailbox}/>
                <h2 className='textConten'>221214@ids-upchiapas.edu.mx</h2>
            </div>
            <div className='div-container-flex'>
                <img className='facebook' src={facebook}/>
                <h2 className='textConten'>Eduart Rob</h2>
            </div>
            <div className='div-container-flex'>
                <img className='instagram' src={instagram}/>
                <h2 className='textConten'>@eduart_rob</h2>
            </div>
        </div>
     );
}

export default Contacto;