import { useNavigate } from 'react-router-dom';
import './styles.css';

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
                    onClick={() => handleApartments()}
                >
                    Apartamentos
                </div>
                <div
                    className='nav-header-options'
                    onClick={() => handleContact()}
                >
                    Contato
                </div>
            </nav>
            <div className='social-midia-icons'>
                <div
                    className='nav-header-options'
                    onClick={() => handleBook()}
                >
                    Reservas
                </div>
            </div>
        </header>
    )
};

export default Header;