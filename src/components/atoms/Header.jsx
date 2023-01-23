import Logo from '../../assets/react.svg'
import '../../assets/styles/Header.css';
import ImgProfile from  '../../assets/img/img-profile.jpg';

function Header() {
    return ( 
        <div className='divContainer'>
            <div className='imgContainer'>
                <img className='imgProfile' src={ImgProfile}/>
            </div>
            <div className='divContainerText'>
                <h1 className='text1'>Esduardo Palomeque Roblero</h1>
                <h1 className='text2'>Software development engineer</h1>
            </div>
            <h1></h1>
        </div>
     );
}

export default Header;
