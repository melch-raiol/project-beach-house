import './styles.css';
import ImgFacebook from '../../assets/facebook.png';
import ImgInstagram from '../../assets/instagram.png';
import { useNavigate, Link } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    function handleHome() {
        navigate('/')
    };

    function handleAboutUs() {
        navigate('/AboutUs')
    };

    function handleContact() {
        navigate('/Contact')
    };

    function handleBook() {
        navigate('/Book')
    };

    function handleApartments() {
        navigate('/Apartments')
    };

    return (
        <header className='container-header'>
            <div>LOGO</div>

            <nav className='nav-header' >
                <div
                    className='nav-header-options'
                    onClick={() => handleHome()}
                >
                    Home
                </div>

                <div
                    className='nav-header-options'
                    onClick={() => handleAboutUs()}
                >
                    Sobre Somos
                </div>

                <div
                    className='nav-header-options'
                    onClick={() => handleContact()}
                >
                    Contato
                </div>

                <div
                    className='nav-header-options'
                    onClick={() => handleBook()}
                >
                    Reservas
                </div>

                <div
                    className='nav-header-options'
                    onClick={() => handleApartments()}
                >
                    Apartamentos
                </div>
            </nav>

            <div className='social-midia-icons'>

                <a target='_blank' href='https://www.facebook.com/profile.php?id=100064833496849'>
                    <img
                        className='social-midia-icons-facebook'
                        src={ImgFacebook}
                    />
                </a>

                <a target='_blank' href='https://instagram.com/casas_da_sepultura.oficial?igshid=ZDdkNTZiNTM='>

                    <img
                        className='social-midia-icons-instagram'
                        src={ImgInstagram}
                    />
                </a>
            </div>

        </header>
    )
};

export default Header;