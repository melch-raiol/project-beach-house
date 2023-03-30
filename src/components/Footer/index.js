import './styles.css';
import ImgFacebook from '../../assets/facebook.png';
import ImgInstagram from '../../assets/instagram.png';

function Footer() {

    return (
        <footer className='container-footer'>
            <div className='address'>
                <span>Endereço:</span>
                <span>Rua Chincharro, 309 - Centro, Bombinhas / SC</span>

            </div>

            <div className='social-midia-icons'>
                <img
                    className='social-midia-icons-facebook'
                    src={ImgFacebook}
                />

                <img
                    className='social-midia-icons-intagram'
                    src={ImgInstagram}
                />
            </div>
        </footer>
    )
};

export default Footer;