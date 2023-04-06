import ImgFacebook from '../../assets/facebook.png';
import ImgInstagram from '../../assets/instagram.png';
import './styles.css';

function Footer() {

    return (
        <footer className='container-footer'>
            <div className='address-footer'>
                <span>Endereço:</span>
                <span>Rua Chincharro, 309 - Centro, Bombinhas / SC</span>
            </div>
            <div className='social-midia-icons'>
                <img
                    className='social-midia-icons-facebook'
                    src={ImgFacebook}
                />
                <a target='_blank' href='https://instagram.com/casas_da_sepultura.oficial?igshid=ZDdkNTZiNTM='>
                    <img
                        className='social-midia-icons-intagram'
                        src={ImgInstagram}
                    />
                </a>
            </div>
        </footer>
    )
};

export default Footer;