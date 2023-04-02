import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import ImgApartments from '../../assets/apartments.jpg';
import apartments from '../../databases/databases';

function Apartments() {
    return (
        <div className='container-apartments'>
            <Header />
            <img
                className='img-background-contact'
                src={ImgApartments}
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