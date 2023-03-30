import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImgSepulHouses1 from '../../assets/sepul-houses-1.JPG';

function Main() {


  return (
    <div className="container-main">
      <Header />

      <img
        className='img-background-main'
        src={ImgSepulHouses1}
      />

      <div
        className='houses-exhibition'
      >


      </div>

      <Footer />
    </div>
  )
};

export default Main
