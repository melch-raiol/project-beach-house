import Footer from '../../components/Footer';
import Header from '../../components/Header';
import apartmentsFiveRooms from '../../databases/';
import './styles.css';

function Apartments() {
    return (
        <div className='container-apartments'>
            <Header />
            <div className='main-apartments-selection'>

                <div className='apartaments-collection'>
                    <div className='apartment-main-img'>
                        {apartmentsFiveRooms.image}
                    </div>
                    <div className='apartment-info'>
                        {apartments.info}
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
};

export default Apartments;