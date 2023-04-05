import './styles.css';
import { useNavigate } from 'react-router-dom';
import useWindowDimension from '../WindowDimension/windowDimension';

function Header() {

    const { innerWidth, innerHeight } = useWindowDimension();

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
            <div
                className='logo-beach-house'
            >
                LOGO
            </div>

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

                {innerWidth <= 400 &&
                    <div
                        className='nav-header-options'
                        onClick={() => handleBook()}
                    >
                        Reservas
                    </div>
                }

            </nav>
            {innerWidth > 400 &&
                <div className='social-midia-icons'>
                    <div
                        className='nav-header-options'
                        onClick={() => handleBook()}
                    >
                        Reservas
                    </div>
                </div>
            }
        </header>
    )
};

export default Header;