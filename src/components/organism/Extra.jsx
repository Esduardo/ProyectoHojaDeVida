import DivDecoration from '../atoms/DivDecoration'
import DivDecoration2 from '../atoms/DivDecoration2'

import Camara from '../../assets/img/camara.png'

import '../../assets/styles/Extra.css'

function Extra() {
    return ( 
        <div className='divExtra'>
            <div className='div-divDecoration'>
                <DivDecoration/>
                <DivDecoration2/>
                <DivDecoration/>
                <DivDecoration2/>
                <DivDecoration/>
                <DivDecoration2/>
                <DivDecoration/>
                <DivDecoration2/>
            </div>
            <img className='camara' src={Camara}/>
        </div>
     );
}

export default Extra;