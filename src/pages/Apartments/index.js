import ImgWhatsapp from '../../assets/whatsapp-icon.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import apartments from '../../databases/databases';
import './styles.css';

function Apartments() {
    return (
        <div className='container-apartments'>
            <Header />

            <img
                className='img-whatsapp'
                src={ImgWhatsapp}
            />

            <div className='main-apartments-selection'>

                {apartments.map(apartment => (
                    <div className='apartaments-collection'>

                        <div className='apartment-main-img'>
                            {apartment.image}
                        </div>
                        <div className='apartment-info'>
                            {apartment.info}
                        </div>
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    )
};

export default Apartments;